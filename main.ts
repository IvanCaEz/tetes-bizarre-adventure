namespace SpriteKind {
    export const goal = SpriteKind.create()
    export const switch_ = SpriteKind.create()
    export const treasure = SpriteKind.create()
}

scene.onHitWall(SpriteKind.Player, function on_hit_wall(sprite: Sprite, location: tiles.Location) {
    
})
//  level.load(loadedLevel)
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function on_on_overlap_goal(SpriteKind: Sprite, otherSprite: Sprite) {
    if (current_level == maxLevel) {
        game.over(true)
    } else {
        stair_sprite.destroy()
        current_level + 1
    }
    
})
//  width = 160
//  height = 120
function create_level_one() {
    
    scene.setTileMapLevel(tilemap`
        level one
    `)
    treasure_sprite = sprites.create(sprites.dungeon.chestClosed, SpriteKind.treasure)
    treasure_sprite.setPosition(25, 140)
    stair_sprite = sprites.create(sprites.dungeon.stairLarge, SpriteKind.goal)
    stair_sprite.setPosition(232, 200)
    switch_sprite = sprites.create(sprites.dungeon.greenSwitchUp, SpriteKind.switch_)
    switch_sprite.setPosition(136, 8)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.treasure, function on_on_overlap_treasure(SpriteKind: Sprite, otherSprite: Sprite) {
    info.setScore(100)
})
let switch_sprite : Sprite = null
let stair_sprite : Sprite = null
let treasure_sprite : Sprite = null
let maxLevel = 0
let current_level = 0
let player_sprite = null
namespace CustomArt {
    export const Door = img`
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
    `
}

maxLevel = 3
create_level_one()
namespace Player {
    export const player_sprite2 = sprites.create(sprites.duck.duck1, SpriteKind.Player)
    info.setLife(3)
    scene.cameraFollowSprite(Player.player_sprite2)
    controller.moveSprite(Player.player_sprite2, 100, 100)
}

