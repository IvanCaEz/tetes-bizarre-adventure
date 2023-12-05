@namespace
class SpriteKind:
    goal = SpriteKind.create()
    treasure = SpriteKind.create()
    switch = SpriteKind.create()
    poopy = SpriteKind.create()
    yellow_card = SpriteKind.create()
    red_card = SpriteKind.create()
    ball = SpriteKind.create()

treasure_sprite: Sprite = None
stair_sprite: Sprite = None
switch_sprite: Sprite = None
switch_sprite_two: Sprite = None
ball_sprite: Sprite = None
maxLevel = 4
current_level = 2
player_direction = 1
player_sprite: Sprite = None
ball_found = False
kick_cooldown = False
enemy_list: List[Sprite] = []

@namespace
class Player:
    player_sprite = sprites.create(assets.image("""
                        tete right
                    """), SpriteKind.player)
    info.set_life(3)
    scene.camera_follow_sprite(Player.player_sprite)
    controller.move_sprite(Player.player_sprite, 100, 100)

# Create enemies
def create_enemies():
    global current_level, enemy_list
    if current_level == 1:
        poopy_one = sprites.create(assets.image("""poopy left """), SpriteKind.poopy)
        poopy_two = sprites.create(assets.image("""poopy left """), SpriteKind.poopy)
        poopy_three = sprites.create(assets.image("""poopy left """), SpriteKind.poopy)
        poopy_four = sprites.create(assets.image("""poopy left """), SpriteKind.poopy)
        enemy_list.append(poopy_one)
        enemy_list.append(poopy_two)
        enemy_list.append(poopy_three)
        enemy_list.append(poopy_four)
        for enemySprite in enemy_list:
            enemySprite.set_position(Math.random_range(20, 300), Math.random_range(10, 220))  
    elif current_level == 2:
        enemy_list = []
        red_card_one = sprites.create(assets.image("""redCard base """), SpriteKind.red_card)
        red_card_two = sprites.create(assets.image("""redCard base """), SpriteKind.red_card)
        yellow_card_one = sprites.create(assets.image("""yellowCard base """), SpriteKind.yellow_card)
        yellow_card_two = sprites.create(assets.image("""yellowCard base """), SpriteKind.yellow_card)
        enemy_list.append(red_card_one)
        enemy_list.append(red_card_two)
        enemy_list.append(yellow_card_one)
        enemy_list.append(yellow_card_two)
        red_card_one.set_position(25,150)
        red_card_two.set_position(300,450)
        yellow_card_one.set_position(216,170)
        yellow_card_two.set_position(400,56)


def on_update_interval():
    global current_level, enemy_list

    if current_level == 1:
        for poopy in sprites.all_of_kind(SpriteKind.poopy):
            # follow the player
            if poopy.x < Player.player_sprite.x:
                poopy.vx = 20
                animation.run_image_animation(poopy, assets.animation("""poopy animated right"""), 200, True)
                poopy.set_image(assets.image(""" poopy right """))
            else:
                poopy.vx = -20
                animation.run_image_animation(poopy, assets.animation("""poopy animated left"""), 200, True)
                poopy.set_image(assets.image(""" poopy left """))
            if poopy.y < Player.player_sprite.y:
                poopy.vy = 20
            else:
                poopy.vy = -20
    if current_level == 2:
        red_card_one = enemy_list[0]
        red_card_two = enemy_list[1]
        yellow_card_one = enemy_list[2]
        yellow_card_two = enemy_list[3]
        # The red card one activates when the player passes that location
        if Player.player_sprite.x >= 8 and Player.player_sprite.x <= 40 and Player.player_sprite.y <= 232:
            red_card_animation(red_card_one)

        yellow_card_animation(yellow_card_one)
        yellow_card_animation(yellow_card_two)

        if yellow_card_one.x == 216:
            yellow_card_one.vx = 60
            print("der")
        elif yellow_card_one.x == 296:
            yellow_card_one.vx = -60
            print("izq")
        if yellow_card_two.y == 24:
            yellow_card_two.vy = 60
            print("arriba")
        elif yellow_card_two.y == 56:
            yellow_card_two.vy = -60
            print("abajo")
game.on_update_interval(500, on_update_interval) 


def on_right_pressed():
    global player_direction
    animation.run_image_animation(Player.player_sprite, assets.animation("""walkRight"""), 200, True)
    Player.player_sprite.set_image(assets.image("""
                        tete right
                    """))
    player_direction = 3

controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    global player_direction
    animation.run_image_animation(Player.player_sprite, assets.animation(""" walkLeft """), 200, True)
    Player.player_sprite.set_image(assets.image(""" tete left """))
    player_direction = 4
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_up_pressed():
    global player_direction
    animation.run_image_animation(Player.player_sprite, assets.animation(""" backWalk """), 200, True)
    Player.player_sprite.set_image(assets.image(""" tete back """))
    player_direction = 1
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_down_pressed():
    global player_direction
    animation.run_image_animation(Player.player_sprite, assets.animation("""frontWalk"""), 200, True)
    Player.player_sprite.set_image(assets.image(""" tete front """))
    player_direction = 2
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_a_pressed():
    global player_direction, ball_found
    if ball_found and kick_cooldown == False:
        if player_direction == 1:
            projectileSprite = sprites.createProjectileFromSprite(assets.image("""ball idle"""), Player.player_sprite, 0, -110)
            music.pewPew.play()
            animation.run_image_animation(projectileSprite, assets.animation("""ballAttack"""), 50, True)
        elif player_direction == 2:
            projectileSprite = sprites.createProjectileFromSprite(assets.image("""ball idle"""), Player.player_sprite, 0, 110)
            music.pewPew.play()
            animation.run_image_animation(projectileSprite, assets.animation("""ballAttack"""), 50, True)
        elif player_direction == 3:
            projectileSprite = sprites.createProjectileFromSprite(assets.image("""ball idle"""), Player.player_sprite, 110, 0)
            music.pewPew.play()
            animation.run_image_animation(projectileSprite, assets.animation("""ballAttack"""), 50, True)
        elif player_direction == 4:
            projectileSprite = sprites.createProjectileFromSprite(assets.image("""ball idle"""), Player.player_sprite, -110, 0)
            music.pewPew.play()
            animation.run_image_animation(projectileSprite, assets.animation("""ballAttack"""), 50, True)
    print(player_direction)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# Yellow card on hit projectile
def on_overlap_projectile_with_enemy(sprite, otherSprite):
    sprites.destroy(otherSprite, effects.spray, 200)
    sprites.destroy(sprite, effects.cool_radial, 200)
    info.set_score(info.score()+50)

sprites.on_overlap(SpriteKind.projectile, SpriteKind.yellow_card, on_overlap_projectile_with_enemy)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.red_card, on_overlap_projectile_with_enemy)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.red_card, on_overlap_projectile_with_enemy)

# On hit wall
def on_hit_wall(sprite, location):
    global current_level
    print("X: "+location.x)
    print("Y: "+location.y)
    if current_level == 1:
        if location.x == 136 and location.y == 8:
            if (switch_sprite.image == sprites.dungeon.green_switch_up):
                info.set_score(info.score()+200)
                switch_sprite.set_image(sprites.dungeon.green_switch_down)
                scene.set_tile_map_level(tilemap("""
                    level one switched
                """))
                pause(500)
                music.play(music.melody_playable(music.big_crash), music.PlaybackMode.UNTIL_DONE)
                scene.camera_shake(3, 500)
            else:
                game.splash("The switch broke")
    elif current_level == 2:
        if location.x == 136 and location.y == 424:
            if (switch_sprite.image == sprites.dungeon.purple_switch_up):
                info.set_score(info.score()+200)
                switch_sprite.set_image(sprites.dungeon.purple_switch_down)
                scene.set_tile_map_level(tilemap("""
                                    level two bridge
                                """))
                pause(500)
                music.play(music.melody_playable(music.big_crash), music.PlaybackMode.UNTIL_DONE)
                scene.camera_shake(3, 500)
            else:
                game.splash("The switch broke")
        elif location.x == 40 and location.y == 8:
            if (switch_sprite_two.image == sprites.dungeon.purple_switch_up):
                info.set_score(info.score()+200)
                switch_sprite_two.set_image(sprites.dungeon.purple_switch_down)
                scene.set_tile_map_level(tilemap("""
                                                    level two bridge two
                                                """))
                pause(500)
                music.play(music.melody_playable(music.big_crash), music.PlaybackMode.UNTIL_DONE)
                scene.camera_shake(3, 500)
            else:
                game.splash("The switch broke")
    else:
        pass
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def reset_level():
    global current_level, switch_sprite, switch_sprite_two, treasure_sprite, ball_sprite
    if current_level == 1:
        switch_sprite.destroy()
        treasure_sprite.destroy()


# On overlap stairs
def on_on_overlap_stairs(SpriteKind, otherSprite):
    global current_level
    if current_level == maxLevel:
        game.over(True)
    else:
        stair_sprite.destroy()
        current_level = current_level + 1
        reset_level()
        select_levels()
sprites.on_overlap(SpriteKind.player, SpriteKind.goal, on_on_overlap_stairs)

# On overlap treasure
def on_on_overlap_treasure(SpriteKind, otherSprite):
    if (treasure_sprite.image == sprites.dungeon.chest_closed):
        info.set_score(info.score()+100)
        treasure_sprite.set_image(sprites.dungeon.chest_open)
sprites.on_overlap(SpriteKind.player, SpriteKind.treasure, on_on_overlap_treasure)

# On overlap player with ball (item)
def on_on_overlap_ball(SpriteKind, otherSprite):
    global ball_found
    ball_found = True
    game.splash("You found your precious ball!")
    game.splash("Now you can kick it with A")
    ball_sprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.ball, on_on_overlap_ball)


# On enemy collision
def on_on_overlap_enemy(SpriteKind, otherSprite):
        info.changeLifeBy(-1)
        sprites.destroy(otherSprite, effects.ashes, 200)
        music.thump.play()
sprites.on_overlap(SpriteKind.player, SpriteKind.poopy, on_on_overlap_enemy)
sprites.on_overlap(SpriteKind.player, SpriteKind.yellow_card, on_on_overlap_enemy)
sprites.on_overlap(SpriteKind.player, SpriteKind.red_card, on_on_overlap_enemy)


def create_level_one():
    global treasure_sprite, stair_sprite, switch_sprite
    #music.play(music.create_song(assets.song("""level one bso""")),music.PlaybackMode.LOOPING_IN_BACKGROUND)
    scene.set_tile_map_level(tilemap("""
        level one
    """))
    treasure_sprite = sprites.create(sprites.dungeon.chest_closed, SpriteKind.treasure)
    treasure_sprite.set_position(25, 140)
    stair_sprite = sprites.create(sprites.dungeon.stair_large, SpriteKind.goal)
    stair_sprite.set_position(232, 200)
    switch_sprite = sprites.create(sprites.dungeon.green_switch_up, SpriteKind.switch)
    switch_sprite.set_position(136, 8)
    
    create_enemies()

def create_level_two():
    global treasure_sprite, stair_sprite, switch_sprite, switch_sprite_two, ball_sprite
    #music.play(music.create_song(assets.song("""level one bso""")),music.PlaybackMode.LOOPING_IN_BACKGROUND)
    scene.set_tile_map_level(tilemap("""
        level two base
    """))
    Player.player_sprite.set_position(228,23)

    treasure_sprite = sprites.create(sprites.dungeon.chest_closed, SpriteKind.treasure)
    treasure_sprite.set_position(484, 58)
    stair_sprite = sprites.create(sprites.dungeon.stair_large, SpriteKind.goal)
    stair_sprite.set_position(25, 492)
    switch_sprite = sprites.create(sprites.dungeon.purple_switch_up, SpriteKind.switch)
    switch_sprite.set_position(142, 424)
    switch_sprite_two = sprites.create(sprites.dungeon.purple_switch_up, SpriteKind.switch)
    switch_sprite_two.set_position(50, 8)
    ball_sprite = sprites.create(assets.image("""ball idle"""), SpriteKind.ball)
    ball_sprite.set_position(258, 46)
    create_enemies()

music.set_volume(40)




def red_card_animation(red_card_sprite: Sprite):
    if Player.player_sprite.y > red_card_sprite.y:
        animation.run_image_animation(red_card_sprite, assets.animation("""redCardFront"""), 200, True)
    else:
        animation.run_image_animation(red_card_sprite, assets.animation("""redCardBack"""), 200, True)
    red_card_sprite.follow(Player.player_sprite, 80, 70)

def yellow_card_animation(yellow_card_sprite: Sprite):
    if Player.player_sprite.y > yellow_card_sprite.y:
        animation.run_image_animation(yellow_card_sprite, assets.animation("""yellowCardFront"""), 200, True)
    else:
        animation.run_image_animation(yellow_card_sprite, assets.animation("""yellowCardBack"""), 200, True)


def select_levels():
    global current_level
    if current_level == 1:
        create_level_one()
    elif current_level == 2:
        create_level_two()



select_levels()

def on_life_zero():
    sprites.destroy(player_sprite, effects.ashes, 200)
    music.wawawawaa.play()
    game.game_over(False)
info.on_life_zero(on_life_zero)