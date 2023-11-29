@namespace
class SpriteKind:
    goal = SpriteKind.create()
    switch_ = SpriteKind.create()
    treasure = SpriteKind.create()

def on_hit_wall(sprite, location):
    pass
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

# level.load(loadedLevel)

def on_on_overlap_goal(SpriteKind, otherSprite):
    if current_level == maxLevel:
        game.over(True)
    else:
        stair_sprite.destroy()
        current_level + 1
sprites.on_overlap(SpriteKind.player, SpriteKind.goal, on_on_overlap_goal)

# width = 160
# height = 120
def create_level_one():
    global treasure_sprite, stair_sprite, switch_sprite
    scene.set_tile_map_level(tilemap("""
        level one
    """))
    treasure_sprite = sprites.create(sprites.dungeon.chest_closed, SpriteKind.treasure)
    treasure_sprite.set_position(25, 140)
    stair_sprite = sprites.create(sprites.dungeon.stair_large, SpriteKind.goal)
    stair_sprite.set_position(232, 200)
    switch_sprite = sprites.create(sprites.dungeon.green_switch_up, SpriteKind.switch_)
    switch_sprite.set_position(136, 8)

def on_on_overlap_treasure(SpriteKind, otherSprite):
    info.set_score(100)
sprites.on_overlap(SpriteKind.player, SpriteKind.treasure, on_on_overlap_treasure)

switch_sprite: Sprite = None
stair_sprite: Sprite = None
treasure_sprite: Sprite = None
maxLevel = 0
current_level = 0
player_sprite = None
@namespace
class CustomArt:
    Door = img("""
        . f f f f f f f f f f f f f f .
                    f b b b c b b b c b b b c b b f
                    f b b b c a a a a a a a c b b f
                    f b b b c a 9 9 9 9 9 a c b b f
                    f c b b c a 9 9 9 9 9 a c b b f
                    f c b b c a 9 9 9 9 9 a c b b f
                    f b b b c a a a a a a a c b a f
                    f b b b c b b b c b b b c a 9 f
                    f b b b c b b b c b b b c a 9 f
                    f b b b c b b b c b b b c b a f
                    f c b b c b b b c b b b c b b f
                    f c b b c b b b c b b b c b b f
                    f b b b c b b b c b b b c b b f
                    f b b b c b b b c b b b c b b f
                    f b b b c b b b c b b b c b b f
                    . f f f f f f f f f f f f f f .
    """)
maxLevel = 3
create_level_one()
@namespace
class Player:
    player_sprite2 = sprites.create(sprites.duck.duck1, SpriteKind.player)
    info.set_life(3)
    scene.camera_follow_sprite(Player.player_sprite2)
    controller.move_sprite(Player.player_sprite2, 100, 100)
