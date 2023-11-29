@namespace
class SpriteKind:
    goal = SpriteKind.create()
    # switch = SpriteKind.create()
    treasure = SpriteKind.create()

def on_hit_wall(sprite, location):
    if location.x == 136 and location.y == 8:
        info.set_score(200)
        scene.set_tile_map_level(tilemap("""
            level one switched
        """))
        pause(500)
        scene.camera_shake(3, 500)
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def create_enemies(level: number):
    enemyList: List[Sprite] = []
    if level == 1:
        for index in range(5):
            enemyList.append(sprites.create(assets.image("""
                poopy left
            """), SpriteKind.enemy))
        for enemySprite in sprites.all_of_kind(SpriteKind.enemy):
            enemySprite.set_position(Math.random_range(20, 300), Math.random_range(10, 220))

def on_on_overlap_stairs(SpriteKind, otherSprite):
    if current_level == maxLevel:
        game.over(True)
    else:
        stair_sprite.destroy()
        current_level + 1
sprites.on_overlap(SpriteKind.player, SpriteKind.goal, on_on_overlap_stairs)

def on_on_overlap_treasure(SpriteKind, otherSprite):
    info.set_score(100)
    treasure_sprite.set_image(sprites.dungeon.chest_open)
sprites.on_overlap(SpriteKind.player, SpriteKind.treasure, on_on_overlap_treasure)


def create_level_one():
    global treasure_sprite, stair_sprite
    scene.set_tile_map_level(tilemap("""
        level one
    """))
    treasure_sprite = sprites.create(sprites.dungeon.chest_closed, SpriteKind.treasure)
    treasure_sprite.set_position(25, 140)
    stair_sprite = sprites.create(sprites.dungeon.stair_large, SpriteKind.goal)
    stair_sprite.set_position(232, 200)
    create_enemies(1)

treasure_sprite: Sprite = None
stair_sprite: Sprite = None
maxLevel = 0
current_level = 0
player_sprite = None
switch_sprite = None
switch_pulled = False


def on_update_interval():
    for enemy in sprites.all_of_kind(SpriteKind.enemy):
        # follow the player
        if enemy.x < Player.player_sprite.x:
            enemy.vx = 15
        else:
            enemy.vx = -15
        if enemy.y < Player.player_sprite.y:
            enemy.vy = 15
        else:
            enemy.vy = -15
game.on_update_interval(1000, on_update_interval)

current_level = 1
maxLevel = 4
create_level_one()

@namespace
class Player:
    player_sprite = sprites.create(sprites.duck.duck1, SpriteKind.player)
    info.set_life(3)
    scene.camera_follow_sprite(Player.player_sprite)
    controller.move_sprite(Player.player_sprite, 100, 100)

