namespace SpriteKind {
    export const goal = SpriteKind.create()
    export const treasure = SpriteKind.create()
    export const switch_ = SpriteKind.create()
    export const poopy = SpriteKind.create()
    export const yellow_card = SpriteKind.create()
    export const red_card = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const heart = SpriteKind.create()
    export const menu = SpriteKind.create()
    export const selector = SpriteKind.create()
}

let treasure_sprite : Sprite = null
let stair_sprite : Sprite = null
let switch_sprite : Sprite = null
let switch_sprite_two : Sprite = null
let heart_sprite : Sprite = null
let ball_sprite : Sprite = null
let play_sprite : Sprite = null
let player_sprite : Sprite = null
let how_to_play_sprite : Sprite = null
let credits_sprite : Sprite = null
let exit_sprite : Sprite = null
let maxLevel = 4
let current_level = 1
let player_direction = 1
let ball_found = false
let enemy_list : Sprite[] = []
let changed_level = false
let level_three_enemies_defeated = 0
let last_pressed = 0
let kick_cooldown_time = 500
let menu_option = 1
let selector_sprite : Sprite = null
let in_menu = true
namespace Player {
    export const player_sprite = sprites.create(assets.image`
                        tete front
                    `, SpriteKind.Player)
    info.setLife(3)
}

//  Shows the menu and it's options
function start_menu() {
    
    scene.setBackgroundImage(sprites.background.cityscape)
    Player.player_sprite.setPosition(20, 90)
    play_sprite = sprites.create(assets.image`PlayButtonSelected`, SpriteKind.menu)
    play_sprite.setPosition(80, 30)
    how_to_play_sprite = sprites.create(assets.image`HowToButton`, SpriteKind.menu)
    how_to_play_sprite.setPosition(80, 50)
    credits_sprite = sprites.create(assets.image`CreditsButton`, SpriteKind.menu)
    credits_sprite.setPosition(80, 70)
    exit_sprite = sprites.create(assets.image`ExitButton`, SpriteKind.menu)
    exit_sprite.setPosition(80, 90)
    selector_sprite = sprites.create(assets.image`selector`, SpriteKind.selector)
    selector_sprite.setPosition(30, 30)
}

//  Moves the selector sprite through the menu
function select_option() {
    
    if (menu_option == 1) {
        selector_sprite.setPosition(30, 30)
        paint_menu_buttons(1)
    } else if (menu_option == 2) {
        selector_sprite.setPosition(30, 50)
        paint_menu_buttons(2)
    } else if (menu_option == 3) {
        selector_sprite.setPosition(30, 70)
        paint_menu_buttons(3)
    } else if (menu_option == 4) {
        selector_sprite.setPosition(30, 90)
        paint_menu_buttons(4)
    }
    
}

//  Paints the menu buttons based on the position
function paint_menu_buttons(menu_option: number) {
    
    if (menu_option == 1) {
        play_sprite.setImage(assets.image`PlayButtonSelected`)
        how_to_play_sprite.setImage(assets.image`HowToButton`)
        credits_sprite.setImage(assets.image`CreditsButton`)
        exit_sprite.setImage(assets.image`ExitButton`)
    } else if (menu_option == 2) {
        play_sprite.setImage(assets.image`PlayButton`)
        how_to_play_sprite.setImage(assets.image`HowToButtonSelected`)
        credits_sprite.setImage(assets.image`CreditsButton`)
        exit_sprite.setImage(assets.image`ExitButton`)
    } else if (menu_option == 3) {
        play_sprite.setImage(assets.image`PlayButton`)
        how_to_play_sprite.setImage(assets.image`HowToButton`)
        credits_sprite.setImage(assets.image`CreditsButtonSelected`)
        exit_sprite.setImage(assets.image`ExitButton`)
    } else if (menu_option == 4) {
        play_sprite.setImage(assets.image`PlayButton`)
        how_to_play_sprite.setImage(assets.image`HowToButton`)
        credits_sprite.setImage(assets.image`CreditsButton`)
        exit_sprite.setImage(assets.image`ExitButtonSelected`)
    }
    
}

//  Destroy the menu sprites
function destroy_menu() {
    
    selector_sprite.destroy()
    play_sprite.destroy()
    how_to_play_sprite.destroy()
    credits_sprite.destroy()
    exit_sprite.destroy()
}

//  Behavior of the Poopy enemy (follows the player and animates based in the direction they are facing)
function poopy_behavior() {
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
}

//  Generates a number enemies of type Poopy
function generate_poopies(poopies_number: number) {
    let poopy: Sprite;
    for (let index = 0; index < poopies_number; index++) {
        poopy = sprites.create(assets.image`poopy left `, SpriteKind.poopy)
        poopy.setPosition(Math.randomRange(32, 240), Math.randomRange(16, 220))
    }
}

//  Generates a number of enemies of type Red Card
function generate_red_cards(red_cards_number: number) {
    let red_card: Sprite;
    for (let index = 0; index < red_cards_number; index++) {
        red_card = sprites.create(assets.image`redCard base `, SpriteKind.red_card)
        red_card.setPosition(Math.randomRange(32, 240), Math.randomRange(16, 220))
        red_card_animation(red_card)
    }
}

//  Generates a number of enemies of type Yellow Card
function generate_yellow_cards(yellow_cards_number: number) {
    let yellow_card: Sprite;
    for (let index = 0; index < yellow_cards_number; index++) {
        yellow_card = sprites.create(assets.image`yellowCard base `, SpriteKind.red_card)
        yellow_card.setPosition(Math.randomRange(32, 240), Math.randomRange(10, 220))
        yellow_card_animation(yellow_card)
        yellow_card.follow(Player.player_sprite, 60, 60)
    }
}

game.onUpdateInterval(500, function on_update_interval() {
    let red_card_one: Sprite;
    let red_card_two: Sprite;
    let yellow_card_one: Sprite;
    let yellow_card_two: Sprite;
    let spawn_enemy: number;
    
    if (current_level == 1) {
        poopy_behavior()
    }
    
    if (current_level == 2) {
        poopy_behavior()
        red_card_one = enemy_list[0]
        red_card_two = enemy_list[1]
        yellow_card_one = enemy_list[2]
        yellow_card_two = enemy_list[3]
        //  The red card one activates when the player passes that location
        if (Player.player_sprite.x >= 8 && Player.player_sprite.x <= 40 && Player.player_sprite.y <= 232) {
            red_card_animation(red_card_one)
        }
        
        yellow_card_animation(yellow_card_one)
        yellow_card_animation(yellow_card_two)
        if (yellow_card_one.x == 216) {
            yellow_card_one.vx = 60
        } else if (yellow_card_one.x == 296) {
            yellow_card_one.vx = -60
        }
        
        if (yellow_card_two.y == 24) {
            yellow_card_two.vy = 60
        } else if (yellow_card_two.y == 56) {
            yellow_card_two.vy = -60
        }
        
        if (Player.player_sprite.x <= 398 && Player.player_sprite.y >= 376 && Player.player_sprite.y <= 398) {
            red_card_animation(red_card_two)
        }
        
    } else if (current_level == 3) {
        spawn_enemy = Math.randomRange(0, 100)
        if (level_three_enemies_defeated < 15) {
            if (spawn_enemy < 10) {
                generate_red_cards(1)
            } else if (spawn_enemy < 20) {
                generate_yellow_cards(1)
            } else if (spawn_enemy < 35) {
                generate_poopies(1)
            }
            
            poopy_behavior()
        } else if (level_three_enemies_defeated >= 15 && changed_level == false) {
            changed_level = true
            pause(500)
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
            scene.cameraShake(8, 500)
            reset_level()
            scene.setTileMapLevel(assets.tilemap`level three exit `)
        }
        
        if (Player.player_sprite.y == 248) {
            current_level = current_level + 1
            select_levels()
        }
        
    } else if (current_level == 4) {
        if (Player.player_sprite.y >= 69) {
            game.gameOver(true)
        }
        
    }
    
    console.log(Player.player_sprite)
})
//  Interval for spawning poopies in floor 2
game.onUpdateInterval(1500, function on_update_interval_plus() {
    let spawn_enemy: number;
    
    if (current_level == 2) {
        spawn_enemy = Math.randomRange(0, 100)
        if (spawn_enemy < 35) {
            generate_poopies(1)
        }
        
    }
    
})
//  Changes the animation and the direction the player is facing
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    
    animation.runImageAnimation(Player.player_sprite, assets.animation`walkRight`, 200, true)
    Player.player_sprite.setImage(assets.image`
                        tete right
                    `)
    player_direction = 3
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    
    animation.runImageAnimation(Player.player_sprite, assets.animation` walkLeft `, 200, true)
    Player.player_sprite.setImage(assets.image` tete left `)
    player_direction = 4
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    
    if (in_menu == true) {
        if (menu_option > 1) {
            menu_option = menu_option - 1
            select_option()
        }
        
    } else {
        animation.runImageAnimation(Player.player_sprite, assets.animation` backWalk `, 200, true)
        Player.player_sprite.setImage(assets.image` tete back `)
        player_direction = 1
    }
    
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    
    if (in_menu == true) {
        if (menu_option < 4) {
            menu_option = menu_option + 1
            select_option()
        }
        
    } else {
        animation.runImageAnimation(Player.player_sprite, assets.animation`frontWalk`, 200, true)
        Player.player_sprite.setImage(assets.image` tete front `)
        player_direction = 2
    }
    
})
//  Fires a projectile when A is pressed in the direction the player is facing
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    let projectileSprite: Sprite;
    
    if (in_menu == true) {
        if (menu_option == 1) {
            select_levels()
            destroy_menu()
            in_menu = false
        } else if (menu_option == 2) {
            game.showLongText(`How To Play
 
 Joystick:
Use the joystick to move your character around the map
A button:
 Once you unlock the football you can shoot your enemies with a kick attack`, DialogLayout.Full)
        } else if (menu_option == 3) {
            game.showLongText(`Credits
 
Game made by Ivan Martinez and Joao Lopes.
 
 Inspired by the greatest team in the World Real Betis Balompié!`, DialogLayout.Full)
        } else if (menu_option == 4) {
            
        }
        
    } else if (ball_found && game.runtime() - last_pressed >= kick_cooldown_time) {
        if (player_direction == 1) {
            projectileSprite = sprites.createProjectileFromSprite(assets.image`ball idle`, Player.player_sprite, 0, -110)
            music.pewPew.play()
            animation.runImageAnimation(projectileSprite, assets.animation`ballAttack`, 50, true)
            last_pressed = game.runtime()
        } else if (player_direction == 2) {
            projectileSprite = sprites.createProjectileFromSprite(assets.image`ball idle`, Player.player_sprite, 0, 110)
            music.pewPew.play()
            animation.runImageAnimation(projectileSprite, assets.animation`ballAttack`, 50, true)
            last_pressed = game.runtime()
        } else if (player_direction == 3) {
            projectileSprite = sprites.createProjectileFromSprite(assets.image`ball idle`, Player.player_sprite, 110, 0)
            music.pewPew.play()
            animation.runImageAnimation(projectileSprite, assets.animation`ballAttack`, 50, true)
            last_pressed = game.runtime()
        } else if (player_direction == 4) {
            projectileSprite = sprites.createProjectileFromSprite(assets.image`ball idle`, Player.player_sprite, -110, 0)
            music.pewPew.play()
            animation.runImageAnimation(projectileSprite, assets.animation`ballAttack`, 50, true)
            last_pressed = game.runtime()
        }
        
    }
    
})
//  Overlap enemy on hit projectile
function on_overlap_projectile_with_enemy(sprite: Sprite, otherSprite: Sprite) {
    
    if (current_level == 3) {
        level_three_enemies_defeated = level_three_enemies_defeated + 1
    }
    
    drop_hearts(otherSprite)
    sprites.destroy(otherSprite, effects.spray, 200)
    sprites.destroy(sprite, effects.coolRadial, 200)
    info.setScore(info.score() + 50)
}

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.yellow_card, on_overlap_projectile_with_enemy)
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.red_card, on_overlap_projectile_with_enemy)
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.poopy, on_overlap_projectile_with_enemy)
//  On overlap with lava tiles (no mercy) 
function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    info.setLife(0)
}

scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, on_overlap_tile)
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, on_overlap_tile)
//  On hit wall interacts with the switches
scene.onHitWall(SpriteKind.Player, function on_hit_wall(sprite: Sprite, location: tiles.Location) {
    
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
        
    } else if (current_level == 2) {
        if (location.x == 136 && location.y == 424) {
            if (switch_sprite.image == sprites.dungeon.purpleSwitchUp) {
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
            
        } else if (location.x == 40 && location.y == 8) {
            if (switch_sprite_two.image == sprites.dungeon.purpleSwitchUp) {
                info.setScore(info.score() + 200)
                switch_sprite_two.setImage(sprites.dungeon.purpleSwitchDown)
                scene.setTileMapLevel(tilemap`
                                                    level two bridge two
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
//  Create enemies
function create_enemies() {
    let red_card_one: Sprite;
    let red_card_two: Sprite;
    let yellow_card_one: Sprite;
    let yellow_card_two: Sprite;
    
    if (current_level == 1) {
        enemy_list = []
        generate_poopies(3)
    } else if (current_level == 2) {
        enemy_list = []
        red_card_one = sprites.create(assets.image`redCard base `, SpriteKind.red_card)
        red_card_two = sprites.create(assets.image`redCard base `, SpriteKind.red_card)
        yellow_card_one = sprites.create(assets.image`yellowCard base `, SpriteKind.yellow_card)
        yellow_card_two = sprites.create(assets.image`yellowCard base `, SpriteKind.yellow_card)
        enemy_list.push(red_card_one)
        enemy_list.push(red_card_two)
        enemy_list.push(yellow_card_one)
        enemy_list.push(yellow_card_two)
        red_card_one.setPosition(25, 150)
        red_card_two.setPosition(300, 460)
        yellow_card_one.setPosition(216, 170)
        yellow_card_two.setPosition(400, 56)
    }
    
}

//  Destroys the sprites of the current level
function reset_level() {
    
    if (current_level == 1) {
        for (let poopy of sprites.allOfKind(SpriteKind.poopy)) {
            poopy.destroy()
        }
        switch_sprite.destroy()
        treasure_sprite.destroy()
    } else if (current_level == 2) {
        for (let poopy_two of sprites.allOfKind(SpriteKind.poopy)) {
            poopy_two.destroy()
        }
        switch_sprite.destroy()
        treasure_sprite.destroy()
        switch_sprite_two.destroy()
        for (let enemy_level_two of enemy_list) {
            enemy_level_two.destroy()
        }
    } else if (current_level == 3) {
        for (let poopy_three of sprites.allOfKind(SpriteKind.poopy)) {
            poopy_three.destroy()
        }
        for (let yellow_card of sprites.allOfKind(SpriteKind.yellow_card)) {
            yellow_card.destroy()
        }
        for (let red_card of sprites.allOfKind(SpriteKind.red_card)) {
            red_card.destroy()
        }
    }
    
}

//  15% chance for an enemy to drop a heart
function drop_hearts(enemy_sprite: Sprite) {
    let heart_sprite_generated: Sprite;
    if (Math.randomRange(0, 100) <= 15) {
        heart_sprite_generated = sprites.create(assets.image`heart`, SpriteKind.heart)
        heart_sprite_generated.setPosition(enemy_sprite.x, enemy_sprite.y)
    }
    
}

//  On overlap hearts (Max 5 hearts)
sprites.onOverlap(SpriteKind.Player, SpriteKind.heart, function on_on_overlap_hearts(SpriteKind: Sprite, otherSprite: Sprite) {
    if (info.life() < 5) {
        info.setLife(info.life() + 1)
        sprites.destroy(otherSprite, effects.hearts, 200)
    }
    
})
//  On overlap stairs
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function on_on_overlap_stairs(SpriteKind: Sprite, otherSprite: Sprite) {
    
    if (current_level == maxLevel) {
        game.over(true)
    } else {
        stair_sprite.destroy()
        reset_level()
        current_level = current_level + 1
        select_levels()
    }
    
})
//  On overlap treasure
sprites.onOverlap(SpriteKind.Player, SpriteKind.treasure, function on_on_overlap_treasure(SpriteKind: Sprite, otherSprite: Sprite) {
    if (treasure_sprite.image == sprites.dungeon.chestClosed) {
        info.setScore(info.score() + 100)
        treasure_sprite.setImage(sprites.dungeon.chestOpen)
        music.thump.play()
    }
    
})
//  On overlap player with ball (item)
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function on_on_overlap_ball(SpriteKind: Sprite, otherSprite: Sprite) {
    
    ball_found = true
    game.showLongText("You found your precious ball! Now you can kick it with button A.", DialogLayout.Bottom)
    Player.player_sprite.sayText("My precious...", 1000, null, 1, 7)
    ball_sprite.destroy()
})
//  On enemy collision
function on_on_overlap_enemy(SpriteKind: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.ashes, 200)
    music.thump.play()
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.poopy, on_on_overlap_enemy)
sprites.onOverlap(SpriteKind.Player, SpriteKind.yellow_card, on_on_overlap_enemy)
sprites.onOverlap(SpriteKind.Player, SpriteKind.red_card, on_on_overlap_enemy)
function create_level_one() {
    
    // music.play(music.create_song(assets.song("""level one bso""")),music.PlaybackMode.LOOPING_IN_BACKGROUND)
    scene.setTileMapLevel(tilemap`
            level one
        `)
    treasure_sprite = sprites.create(sprites.dungeon.chestClosed, SpriteKind.treasure)
    treasure_sprite.setPosition(25, 140)
    stair_sprite = sprites.create(sprites.dungeon.stairLarge, SpriteKind.goal)
    stair_sprite.setPosition(232, 200)
    switch_sprite = sprites.create(sprites.dungeon.greenSwitchUp, SpriteKind.switch_)
    switch_sprite.setPosition(136, 8)
    scene.cameraFollowSprite(Player.player_sprite)
    controller.moveSprite(Player.player_sprite, 100, 100)
    Player.player_sprite.setPosition(33, 188)
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
    switch_sprite_two = sprites.create(sprites.dungeon.purpleSwitchUp, SpriteKind.switch_)
    switch_sprite_two.setPosition(50, 8)
    ball_sprite = sprites.create(assets.image`ball idle`, SpriteKind.ball)
    ball_sprite.setPosition(258, 46)
    create_enemies()
}

function create_level_three() {
    let heart_sprite: Sprite;
    
    ball_found = true
    // music.play(music.create_song(assets.song("""level one bso""")),music.PlaybackMode.LOOPING_IN_BACKGROUND)
    scene.setTileMapLevel(tilemap`
        level three no exit
    `)
    Player.player_sprite.setPosition(129, 46)
    game.splash("Welcome to the arena!")
    game.showLongText("Defeat 15 enemies to be victorious, watch your step, the lava is hot.", DialogLayout.Bottom)
    if (info.life() < 5) {
        heart_sprite = sprites.create(assets.image`heart`, SpriteKind.heart)
        heart_sprite.setPosition(150, 50)
    }
    
    create_enemies()
}

function create_level_four() {
    scene.setTileMapLevel(tilemap`level four`)
    Player.player_sprite.setPosition(96, 6)
    Player.player_sprite.sayText("Finally...", 1000, null, 1, 7)
}

//  Animates the Red Card enemy and starts to follow the player
function red_card_animation(red_card_sprite: Sprite) {
    if (Player.player_sprite.y > red_card_sprite.y) {
        animation.runImageAnimation(red_card_sprite, assets.animation`redCardFront`, 200, true)
    } else {
        animation.runImageAnimation(red_card_sprite, assets.animation`redCardBack`, 200, true)
    }
    
    red_card_sprite.follow(Player.player_sprite, 80, 80)
    let chance_to_say = Math.randomRange(0, 100)
    if (chance_to_say < 20) {
        red_card_sprite.sayText("HEY FOUL", 1000, null, 1, 2)
    }
    
}

//  Animates the Yellow Card enemy 
function yellow_card_animation(yellow_card_sprite: Sprite) {
    if (Player.player_sprite.y > yellow_card_sprite.y) {
        animation.runImageAnimation(yellow_card_sprite, assets.animation`yellowCardFront`, 200, true)
    } else {
        animation.runImageAnimation(yellow_card_sprite, assets.animation`yellowCardBack`, 200, true)
    }
    
}

// select_levels()
//  Function to control the levels
function select_levels() {
    
    if (current_level == 1) {
        create_level_one()
    } else if (current_level == 2) {
        create_level_two()
    } else if (current_level == 3) {
        create_level_three()
    } else {
        create_level_four()
    }
    
}

start_menu()
info.onLifeZero(function on_life_zero() {
    sprites.destroy(Player.player_sprite, effects.ashes, 200)
    music.wawawawaa.play()
    game.gameOver(false)
})
