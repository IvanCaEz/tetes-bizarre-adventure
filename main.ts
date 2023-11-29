namespace SpriteKind {
    export const goal = SpriteKind.create()
    //  switch = SpriteKind.create()
    export const treasure = SpriteKind.create()
}

scene.onHitWall(SpriteKind.Player, function on_hit_wall(sprite: Sprite, location: tiles.Location) {
    if (location.x == 136 && location.y == 8) {
        info.setScore(200)
        scene.setTileMapLevel(tilemap`
            level one switched
        `)
        pause(500)
        scene.cameraShake(3, 500)
    }
    
})
function create_enemies(level: number) {
    let enemyList : Sprite[] = []
    if (level == 1) {
        for (let index = 0; index < 5; index++) {
            enemyList.push(sprites.create(assets.image`
                poopy left
            `, SpriteKind.Enemy))
        }
        for (let enemySprite of sprites.allOfKind(SpriteKind.Enemy)) {
            enemySprite.setPosition(Math.randomRange(20, 300), Math.randomRange(10, 220))
        }
    }
    
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function on_on_overlap_stairs(SpriteKind: Sprite, otherSprite: Sprite) {
    if (current_level == maxLevel) {
        game.over(true)
    } else {
        stair_sprite.destroy()
        current_level + 1
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.treasure, function on_on_overlap_treasure(SpriteKind: Sprite, otherSprite: Sprite) {
    info.setScore(100)
    treasure_sprite.setImage(sprites.dungeon.chestOpen)
})
function create_level_one() {
    
    scene.setTileMapLevel(tilemap`
        level one
    `)
    treasure_sprite = sprites.create(sprites.dungeon.chestClosed, SpriteKind.treasure)
    treasure_sprite.setPosition(25, 140)
    stair_sprite = sprites.create(sprites.dungeon.stairLarge, SpriteKind.goal)
    stair_sprite.setPosition(232, 200)
    create_enemies(1)
}

let treasure_sprite : Sprite = null
let stair_sprite : Sprite = null
let maxLevel = 0
let current_level = 0
let player_sprite = null
let switch_sprite = null
let switch_pulled = false
game.onUpdateInterval(1000, function on_update_interval() {
    for (let enemy of sprites.allOfKind(SpriteKind.Enemy)) {
        //  follow the player
        if (enemy.x < Player.player_sprite.x) {
            enemy.vx = 15
        } else {
            enemy.vx = -15
        }
        
        if (enemy.y < Player.player_sprite.y) {
            enemy.vy = 15
        } else {
            enemy.vy = -15
        }
        
    }
})
current_level = 1
maxLevel = 4
create_level_one()
namespace Player {
    export const player_sprite = sprites.create(sprites.duck.duck1, SpriteKind.Player)
    info.setLife(3)
    scene.cameraFollowSprite(Player.player_sprite)
    controller.moveSprite(Player.player_sprite, 100, 100)
}

