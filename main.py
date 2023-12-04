@namespace
class SpriteKind:
    goal = SpriteKind.create()
    treasure = SpriteKind.create()
    switch = SpriteKind.create()
    poopy = SpriteKind.create()
    bat = SpriteKind.create()
    ghost = SpriteKind.create()
    red_card = SpriteKind.create()
    yellow_card = SpriteKind.create()


treasure_sprite: Sprite = None
stair_sprite: Sprite = None
switch_sprite: Sprite = None
switch_sprite_two: Sprite = None
maxLevel = 4
current_level = 2
player_direction = 0
player_sprite: Sprite = None
    
@namespace
class Player:
    player_sprite = sprites.create(assets.image("""
                        tete right
                    """), SpriteKind.player)
    info.set_life(3)
    scene.camera_follow_sprite(Player.player_sprite)
    controller.move_sprite(Player.player_sprite, 100, 100)

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
    global player_direction
    if player_direction == 1:
        projectileSprite = sprites.createProjectileFromSprite(sprites.projectile.bubble1, Player.player_sprite, 0, -110)
        music.pewPew.play()
    elif player_direction == 2:
        projectileSprite = sprites.createProjectileFromSprite(sprites.projectile.bubble1, Player.player_sprite, 0, 110)
        music.pewPew.play()
    elif player_direction == 3:
        projectileSprite = sprites.createProjectileFromSprite(sprites.projectile.bubble1, Player.player_sprite, 110, 0)
        music.pewPew.play()
    elif player_direction == 4:
        projectileSprite = sprites.createProjectileFromSprite(sprites.projectile.bubble1, Player.player_sprite, -110, 0)
        music.pewPew.play()
    print(player_direction)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)



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
    global current_level
    if current_level == 2:
        switch_sprite.set_image(sprites.dungeon.green_switch_up)
        treasure_sprite.set_image(sprites.dungeon.chest_closed)
    
# Create enemies
def create_enemies():
    global current_level
    enemyList: List[Sprite] = []
    if current_level == 1:
        for index in range(5):
            enemyList.append(sprites.create(assets.image("""
                poopy left
            """), SpriteKind.poopy))
        for enemySprite in sprites.all_of_kind(SpriteKind.poopy):
            enemySprite.set_position(Math.random_range(20, 300), Math.random_range(10, 220))

# On overlap stairs
def on_on_overlap_stairs(SpriteKind, otherSprite):
    global current_level
    if current_level == maxLevel:
        game.over(True)
    else:
        stair_sprite.destroy()
        current_level = current_level + 1
        #reset_level()
        select_levels()
sprites.on_overlap(SpriteKind.player, SpriteKind.goal, on_on_overlap_stairs)

# On overlap treasure
def on_on_overlap_treasure(SpriteKind, otherSprite):
    if (treasure_sprite.image == sprites.dungeon.chest_closed):
        info.set_score(info.score()+100)
        treasure_sprite.set_image(sprites.dungeon.chest_open)
sprites.on_overlap(SpriteKind.player, SpriteKind.treasure, on_on_overlap_treasure)


# On enemy collision
def on_on_overlap_enemy_poopy(SpriteKind, otherSprite):
        info.changeLifeBy(-1)
        sprites.destroy(otherSprite, effects.ashes, 200)
        otherSprite.destroy()
        music.thump.play()
sprites.on_overlap(SpriteKind.player, SpriteKind.poopy, on_on_overlap_enemy_poopy)

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
    switch_sprite = sprites.create(sprites.dungeon.green_switch_up, SpriteKind.goal)
    switch_sprite.set_position(136, 8)
    create_enemies()

def create_level_two():
    global treasure_sprite, stair_sprite, switch_sprite, switch_sprite_two
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
    create_enemies()

music.set_volume(40)


def on_update_interval():
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
game.on_update_interval(500, on_update_interval)


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