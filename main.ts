namespace SpriteKind {
    export const goal = SpriteKind.create()
    // switch = SpriteKind.create()
    export const treasure = SpriteKind.create()
}

//  level.load(loadedLevel)
scene.onHitWall(SpriteKind.Player, function on_hit_wall(sprite: Sprite, location: tiles.Location) {
    if (location.x == 136 && location.y == 8) {
        info.setScore(200)
        scene.setTileMapLevel(tilemap`
                level one switched
            `)
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function on_on_overlap_goal(SpriteKind: Sprite, otherSprite: Sprite) {
    if (current_level == maxLevel) {
        game.over(true)
    } else {
        stair_sprite.destroy()
        current_level + 1
    }
    
})
function create_level_one() {
    
    scene.setTileMapLevel(tilemap`level one`)
    treasure_sprite = sprites.create(sprites.dungeon.chestClosed, SpriteKind.treasure)
    treasure_sprite.setPosition(25, 140)
    stair_sprite = sprites.create(sprites.dungeon.stairLarge, SpriteKind.goal)
    stair_sprite.setPosition(232, 200)
}

// switch_sprite = sprites.create(sprites.dungeon.green_switch_up, SpriteKind.switch)
// switch_sprite.set_position(136, 8)
sprites.onOverlap(SpriteKind.Player, SpriteKind.treasure, function on_on_overlap_treasure(SpriteKind: Sprite, otherSprite: Sprite) {
    info.setScore(100)
    treasure_sprite.setImage(sprites.dungeon.chestOpen)
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
    export const player_sprite = sprites.create(sprites.duck.duck1, SpriteKind.Player)
    info.setLife(3)
    scene.cameraFollowSprite(Player.player_sprite)
    controller.moveSprite(Player.player_sprite, 100, 100)
}

