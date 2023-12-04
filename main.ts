namespace SpriteKind {
    export const goal = SpriteKind.create()
    export const treasure = SpriteKind.create()
    export const switch_ = SpriteKind.create()
    export const poopy = SpriteKind.create()
}

//  On hit wall
scene.onHitWall(SpriteKind.Player, function on_hit_wall(sprite: Sprite, location: tiles.Location) {
    
    console.log("X: " + location.x)
    console.log("Y: " + location.y)
    if (current_level == 1) {
        if (location.x == 136 && location.y == 8) {
            if (switch_sprite.image == sprites.dungeon.greenSwitchUp) {
                info.setScore(info.score() + 200)
                switch_sprite.setImage(sprites.dungeon.greenSwitchDown)
                scene.setTileMapLevel(tilemap`
                    level one switched
                `)
                pause(500)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
                scene.cameraShake(3, 500)
            } else {
                game.splash("The switch broke")
            }
            
        }
        
    }
    
    if (current_level == 2) {
        if (location.x == 136 && location.y == 424) {
            console.log("localizacion correcta")
            if (switch_sprite.image == sprites.dungeon.purpleSwitchUp) {
                console.log("imagen correcta")
                info.setScore(info.score() + 200)
                switch_sprite.setImage(sprites.dungeon.purpleSwitchDown)
                scene.setTileMapLevel(tilemap`
                                    level two bridge
                                `)
                pause(500)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
                scene.cameraShake(3, 500)
            } else {
                game.splash("The switch broke")
            }
            
        }
        
    } else {
        
    }
    
})
function reset_level() {
    
    if (current_level == 2) {
        switch_sprite.setImage(sprites.dungeon.greenSwitchUp)
        treasure_sprite.setImage(sprites.dungeon.chestClosed)
    }
    
}

//  Create enemies
function create_enemies() {
    
    let enemyList : Sprite[] = []
    if (current_level == 1) {
        for (let index = 0; index < 5; index++) {
            enemyList.push(sprites.create(assets.image`
                poopy left
            `, SpriteKind.poopy))
        }
        for (let enemySprite of sprites.allOfKind(SpriteKind.poopy)) {
            enemySprite.setPosition(Math.randomRange(20, 300), Math.randomRange(10, 220))
        }
    }
    
}

//  On overlap stairs
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function on_on_overlap_stairs(SpriteKind: Sprite, otherSprite: Sprite) {
    
    if (current_level == maxLevel) {
        game.over(true)
    } else {
        stair_sprite.destroy()
        current_level = current_level + 1
        // reset_level()
        select_levels()
    }
    
})
//  On overlap treasure
sprites.onOverlap(SpriteKind.Player, SpriteKind.treasure, function on_on_overlap_treasure(SpriteKind: Sprite, otherSprite: Sprite) {
    if (treasure_sprite.image == sprites.dungeon.chestClosed) {
        info.setScore(info.score() + 100)
        treasure_sprite.setImage(sprites.dungeon.chestOpen)
    }
    
})
//  On enemy collision
sprites.onOverlap(SpriteKind.Player, SpriteKind.poopy, function on_on_overlap_enemy_poopy(SpriteKind: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.ashes, 200)
    otherSprite.destroy()
    music.thump.play()
})
function create_level_one() {
    
    // music.play(music.create_song(assets.song("""level one bso""")),music.PlaybackMode.LOOPING_IN_BACKGROUND)
    scene.setTileMapLevel(tilemap`
        level one
    `)
    treasure_sprite = sprites.create(sprites.dungeon.chestClosed, SpriteKind.treasure)
    treasure_sprite.setPosition(25, 140)
    stair_sprite = sprites.create(sprites.dungeon.stairLarge, SpriteKind.goal)
    stair_sprite.setPosition(232, 200)
    switch_sprite = sprites.create(sprites.dungeon.greenSwitchUp, SpriteKind.goal)
    switch_sprite.setPosition(136, 8)
    create_enemies()
}

function create_level_two() {
    
    // music.play(music.create_song(assets.song("""level one bso""")),music.PlaybackMode.LOOPING_IN_BACKGROUND)
    scene.setTileMapLevel(tilemap`
        level two base
    `)
    Player.player_sprite.setPosition(228, 23)
    treasure_sprite = sprites.create(sprites.dungeon.chestClosed, SpriteKind.treasure)
    treasure_sprite.setPosition(484, 58)
    stair_sprite = sprites.create(sprites.dungeon.stairLarge, SpriteKind.goal)
    stair_sprite.setPosition(25, 492)
    switch_sprite = sprites.create(sprites.dungeon.purpleSwitchUp, SpriteKind.switch_)
    switch_sprite.setPosition(142, 424)
    create_enemies()
}

music.setVolume(40)
let treasure_sprite : Sprite = null
let stair_sprite : Sprite = null
let switch_sprite : Sprite = null
let maxLevel = 4
let current_level = 2
let player_sprite : Sprite = null
game.onUpdateInterval(500, function on_update_interval() {
    for (let poopy of sprites.allOfKind(SpriteKind.poopy)) {
        //  follow the player
        if (poopy.x < Player.player_sprite.x) {
            poopy.vx = 20
            animation.runImageAnimation(poopy, assets.animation`poopy animated right`, 200, true)
            poopy.setImage(assets.image` poopy right `)
        } else {
            poopy.vx = -20
            animation.runImageAnimation(poopy, assets.animation`poopy animated left`, 200, true)
            poopy.setImage(assets.image` poopy left `)
        }
        
        if (poopy.y < Player.player_sprite.y) {
            poopy.vy = 20
        } else {
            poopy.vy = -20
        }
        
    }
})
function select_levels() {
    
    if (current_level == 1) {
        create_level_one()
    } else if (current_level == 2) {
        create_level_two()
    }
    
}

namespace Player {
    export const player_sprite = sprites.create(sprites.duck.duck1, SpriteKind.Player)
    info.setLife(3)
    scene.cameraFollowSprite(Player.player_sprite)
    controller.moveSprite(Player.player_sprite, 100, 100)
}

select_levels()
info.onLifeZero(function on_life_zero() {
    sprites.destroy(player_sprite, effects.ashes, 200)
    music.wawawawaa.play()
    game.gameOver(false)
})
