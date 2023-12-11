// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level one switched":
            case "level1":return tiles.createTilemap(hex`10001000010211020202030215020302110202040b070a070a070a070a070a070a070a100b08090809070c140a0809080908091213070a070a08110209070a070a070a100e08070a09080908090807140a08090f0e0710130a070a070a07081109070a100e08120b0908090809080908090809120e0708090a070a070a070a070a070a100e080908090809100b08090809071405060c0c0c0a070a1013070a070a080204010202040e0809120b080908090809100b070a1013070a100e070a070a0102040b080908090809080908070d0d0e091213070a070a070a070a07080204090a100b080908090809080908090809080910060d140d0d0d0d140d0d0d140d0d0c05`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . 2 2 2 2 . . . . . . 2 
2 . . . . 2 2 2 2 . . . . . . 2 
2 . 2 2 . . . . . . 2 2 2 . . 2 
2 . 2 2 . . . . . . 2 2 2 . . 2 
2 . 2 2 . . . . . . . . . . . 2 
2 . 2 2 . . . 2 2 . . . . . . 2 
2 . . . . . . 2 2 . . . . 2 2 2 
2 2 2 2 2 . . 2 2 . . . . 2 2 2 
2 2 2 2 2 . . 2 2 . . . . . . 2 
2 . . 2 2 . . 2 2 . . . . 2 2 2 
2 . . 2 2 . . 2 2 . 2 2 2 2 . 2 
2 . . . . . . . . . 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenSwitchDown], TileScale.Sixteen);
            case "level two base":
            case "level two base1":return tiles.createTilemap(hex`20002000021b171717040217171d171717060b100b0b081717171d1717171717171d170418011501152018011501150115120d0e0d0e110115011501150115011501151921161a161a1918161a161a161a090d0c0f0e07161a161a161a1601151a161a19180115011405031e150115011501130e0d26150115011501150119181501151918161a1604021b1b1a161a161a16250c0f0a1a161a161a011e1402041e14140518011501192115011501150115060f0e0d0c0801150115161b1b03051b1b1b0418161a1619181a161a161a16060f0f0c0f0c0c081a161a161a1619181a161a191801011e0204141515010e1c130e0d0e0d0e0d0a241c0d011501201815011520181616170305171a1a160c230f0c0f0c0f0c0f0c0b230f161a1619211a161a1918011501191815011501150e0d0e0d0e0d0e0d0e0d0115011501161a1501151918161a1619181a161a0e1c240d0c0f0c0f0c0f0e1c0d1a161a161a161a161a192101150119211501150c230b250e0d0e0d0e0d0a230f1501011515011501152018161a1619181a161a161a16090d0f0c0f0c0e071a161a0105181a161a161a1918011501191815011501150115090d0e0d0e070115011519021a15011501151918161a1619181a161a161a161a16130c0f0a1a161a161a1922161a161a161a191801011e0503141e1415150115010f01150c150115011e05031e15011501151918161f021b04021b04221a161a161a161a161a161a16171717171a161a161a1918011f18151f1801161a15011501150115011501150115011501150115011519181620181a2018161a161a161a161a161a161a161a161a161a161a161a161a2018011f18151f18011501150115011501150115011501150115011501150115191816161a1a1f21161a161a161a161a161a161a161a161a161a161a161a161a1918011501152018011501150115011501150101141e141414141e15011501151921161a161a161a2b2d2d28161a161a161a161604021b1b1d1b1b1a161a161a19180115011501152c27272728150115011501151918011501150115011501151918161a161a161a2a272727291a161a161a161a1918161a161a161a161a161a19180115011501141414141e14141414141e14140518011501150115011501152018161a161a16040217171717171d1717171717171a161a161a1918161a161a19182b15012d282018150115011501150115011501150115011519210115011519212c2727272e19181a161a161a161a161a161a161a161a161a2018161a161a19182a15011529191815011501150115011501150115011501151f18011501152018161a161a1620181a161a161a161a161a161a161a161a161a0204161a161a190314141e141405031e141414141e141414141e1414141e1414030514141e1405`, img`
22222222222222222222222222222222
2....22......2....2............2
2....22......22..22.......22...2
2..222222.....2..2........22...2
2..222222.....2..2.....222222222
2...22.......22..22....222222222
2...22......22....22......22...2
2.222222..222......2222...22...2
2.222222..222......2222...22...2
2...22....................22...2
2...22...2222......222.........2
2...22...2222......222..22.....2
2...22......22....22...222.....2
2...22.......22..22....222.....2
2...22........2..2.....22......2
2.22222222....2..2...222222....2
2.22222222...........222222....2
2.22.22.22.....................2
2.22.22........................2
2.22.22........................2
2.22.22........................2
2....22...........222222222....2
2....222222.......222222222....2
2......22222.......22..........2
2......22222.......22..........2
2....2222222222222222....22....2
2....2222222222222222....22....2
22..2222.................22....2
22222222.................22....2
22...222.................22....2
2.....22.................22....2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterWest0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles6,sprites.builtin.forestTiles11], TileScale.Sixteen);
            case "level two bridge two":
            case "level two bridge1":return tiles.createTilemap(hex`20002000021b171717040217171d171717060b100b0b081717171d1717171717171d170418011501152018011501150115120d0e0d0e110115011501150115011501151921161a161a1918161a161a161a090d0c0f0e07161a161a161a1601151a161a19180115011405031e150115011501130e0d26150115011501150119181501151918161a1604021b1b1a161a161a16250c0f0a1a161a161a011e1402041e14140518011501192115011501150115060f0e0d0c0801150115161b1b03051b1b1b0418161a1619181a161a161a16060f0f0c0f0c0c081a161a161a1619181a161a191801011e0204141515010e1c130e0d0e0d0e0d0a241c0d011501201815011520181616170305171a1a160c230f0c0f0c0f0c0f0c0b230f161a1619211a161a1918011501191815011501150e0d0e0d0e0d0e0d0e0d0115011501161a1501151918161a1619181a161a0e1c240d0c0f0c0f0c0f0e1c0d1a161a161a161a161a192101150119211501150c230b250e0d0e0d0e0d0a230f1501011515011501152018161a1619181a161a161a16090d0f0c0f0c0e071a161a0105181a161a161a1918011501191815011501150115090d0e0d0e070115011519021a15011501151918161a1619181a161a161a161a16130c0f0a1a161a161a1922161a161a161a191801011e0503141e1415150115010f01150c150115011e05031e15011501151918161f021b04021b04221a161a161a161a161a161a16171717171a161a161a1918011f18151f1801161a15011501150115011501150115011501150115011519181620181a2018161a161a161a161a161a161a161a161a161a161a161a161a2018011f18151f18011501150115011501150115011501150115011501150115191816161a1a1f21161a161a161a161a161a161a161a161a161a161a161a161a1918011501152018011501150115011501150101141e141414141e15011501151921161a161a161a292b2b28161a161a161a161604021b1b1d1b1b1a161a161a19180115011501152a27272728150115011501151918011501150115011501151918161a161a161a2d2c2c2c2e1a161a161a161a1918161a161a161a161a161a19180115011501141414141e14141414141e14140518011501150115011501152018161a161a16040217171717171d1717171717171a161a161a1918161a161a19182915012b282018150115011501150115011501150115011519210115011519212a3233273019181a161a161a161a161a161a161a161a161a2018161a161a19182f15011531191815011501150115011501150115011501151f18011501152018161a161a1620181a161a161a161a161a161a161a161a161a0204161a161a190314141e141405031e141414141e141414141e1414141e1414030514141e1405`, img`
22222222222222222222222222222222
2....22......2....2............2
2....22......22..22.......22...2
2..222222.....2..2........22...2
2..222222.....2..2.....222222222
2...22.......22..22....222222222
2...22......22....22......22...2
2.222222..222......2222...22...2
2.222222..222......2222...22...2
2...22....................22...2
2...22...2222......222.........2
2...22...2222......222..22.....2
2...22......22....22...222.....2
2...22.......22..22....222.....2
2...22........2..2.....22......2
2.22222222....2..2...222222....2
2.22222222...........222222....2
2.22.22.22.....................2
2.22.22........................2
2.22.22........................2
2.22.22........................2
2....22...........222222222....2
2....222222.......222222222....2
2......22222.......22..........2
2..................22..........2
2....2222222222222222....22....2
2....2222222222222222....22....2
22..2222.................22....2
22..2222.................22....2
22...222.................22....2
2.....22.................22....2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterWest0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles7,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles6,sprites.builtin.forestTiles28,sprites.builtin.forestTiles24,sprites.builtin.forestTiles26,sprites.builtin.forestTiles13,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles27,sprites.builtin.forestTiles29], TileScale.Sixteen);
            case "level two bridge":
            case "level two base2":return tiles.createTilemap(hex`20002000021b171717040217171d171717060b100b0b081717171d1717171717171d170418011501152018011501150115120d0e0d0e110115011501150115011501151921161a161a1918161a161a161a090d0c0f0e07161a161a161a1601151a161a19180115011405031e150115011501130e0d26150115011501150119181501151918161a1604021b1b1a161a161a16250c0f0a1a161a161a011e1402041e14140518011501192115011501150115060f0e0d0c0801150115161b1b03051b1b1b0418161a1619181a161a161a16060f0f0c0f0c0c081a161a161a1619181a161a191801011e0204141515010e1c130e0d0e0d0e0d0a241c0d011501201815011520181616170305171a1a160c230f0c0f0c0f0c0f0c0b230f161a1619211a161a1918011501191815011501150e0d0e0d0e0d0e0d0e0d0115011501161a1501151918161a1619181a161a0e1c240d0c0f0c0f0c0f0e1c0d1a161a161a161a161a192101150119211501150c230b250e0d0e0d0e0d0a230f1501011515011501152018161a1619181a161a161a16090d0f0c0f0c0e071a161a0105181a161a161a1918011501191815011501150115090d0e0d0e070115011519021a15011501151918161a1619181a161a161a161a16130c0f0a1a161a161a1922161a161a161a191801011e0503141e1415150115010f01150c150115011e05031e15011501151918161f021b04021b04221a161a161a161a161a161a16171717171a161a161a1918011f18151f1801161a15011501150115011501150115011501150115011519181620181a2018161a161a161a161a161a161a161a161a161a161a161a161a2018011f18151f18011501150115011501150115011501150115011501150115191816161a1a1f21161a161a161a161a161a161a161a161a161a161a161a161a1918011501152018011501150115011501150101141e141414141e15011501151921161a161a161a292b2b28161a161a161a161604021b1b1d1b1b1a161a161a19180115011501152a27272728150115011501151918011501150115011501151918161a161a161a2d2c2c2c2e1a161a161a161a1918161a161a161a161a161a19180115011501141414141e14141414141e14140518011501150115011501152018161a161a16040217171717171d1717171717171a161a161a1918161a161a19182915012b282018150115011501150115011501150115011519210115011519212a2727273019181a161a161a161a161a161a161a161a161a2018161a161a19182f15011531191815011501150115011501150115011501151f18011501152018161a161a1620181a161a161a161a161a161a161a161a161a0204161a161a190314141e141405031e141414141e141414141e1414141e1414030514141e1405`, img`
22222222222222222222222222222222
2....22......2....2............2
2....22......22..22.......22...2
2..222222.....2..2........22...2
2..222222.....2..2.....222222222
2...22.......22..22....222222222
2...22......22....22......22...2
2.222222..222......2222...22...2
2.222222..222......2222...22...2
2...22....................22...2
2...22...2222......222.........2
2...22...2222......222..22.....2
2...22......22....22...222.....2
2...22.......22..22....222.....2
2...22........2..2.....22......2
2.22222222....2..2...222222....2
2.22222222...........222222....2
2.22.22.22.....................2
2.22.22........................2
2.22.22........................2
2.22.22........................2
2....22...........222222222....2
2....222222.......222222222....2
2......22222.......22..........2
2..................22..........2
2....2222222222222222....22....2
2....2222222222222222....22....2
22..2222.................22....2
22222222.................22....2
22...222.................22....2
2.....22.................22....2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterWest0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles7,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles6,sprites.builtin.forestTiles28,sprites.builtin.forestTiles24,sprites.builtin.forestTiles26,sprites.builtin.forestTiles13,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15], TileScale.Sixteen);
            case "level three no exit":
            case "level4":return tiles.createTilemap(hex`10001000002628272826282728272826282728001d0f181010101810101810101018111f1c0e01020202020202020202020312201d150408090908080808090908061722230e04061a1b040808061b1b040612201d2404061b1b040808061b1a040612211c1504080202080808080202080617201d0e04080808080a0b0808080806251f1e0e04080808080c0d080808080612201d150408090908080808090908061721230e04061b1a040808061a1a040612201d2404061b1b040808061a1a040612221c1504080202080808080202080617201d2405090909090909090909090712221e161319130f1113130f11131913142000000000001614000016140000000000`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . 2 2 . . . . . 2 . 
. 2 . . . . . 2 2 . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . 2 2 . . 2 2 . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouth,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile1,myTiles.tile7,myTiles.tile8,myTiles.tile12,myTiles.tile11,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast1,myTiles.tile9,myTiles.tile10,myTiles.tile15], TileScale.Sixteen);
            case "level three exit":
            case "level2":return tiles.createTilemap(hex`10001000002729282927292829282927292829001e0f18101010181010181010101811211d0e01020202020202020202020312221e150408090908080808090908061724200e04061a1b040808061b1b040612221e2504061b1b040808061b1a040612231d1504080202080808080202080617221e0e04080808080a0b080808080626211f0e04080808080c0d080808080612221e150408090908080808090908061723200e04061b1a040808061a1a040612221e2504061b1b040808061a1a040612241d1504080202080808080202080617221e2505090909090808090909090712241f161319130f111c1c0f111319131422000000000016141c1c16140000000000`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . 2 2 . . . . . 2 . 
. 2 . . . . . 2 2 . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 2 2 2 2 . . 2 2 2 2 2 2 . 
. . . . . . 2 . . 2 . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouth,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.stairNorth,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile11,myTiles.tile1,myTiles.tile7,myTiles.tile8,myTiles.tile12,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast1,myTiles.tile9,myTiles.tile10,myTiles.tile15], TileScale.Sixteen);
            case "level four":
            case "nivel1":return tiles.createTilemap(hex`0c000c0009090902010303020109070407040909040a050907090709090907090908060409090409070409070907090909090909040909090907090909090407090904090909040909090907090909090909090909040909090909090909070709090909090409090409090704090909090909090909070909090904090704090707090904090909090704090904090909090909`, img`
. . . 2 2 . . 2 2 . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.stairSouth,sprites.castle.tileGrass2,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tilePath7,sprites.castle.tileGrass1,sprites.castle.tilePath4], TileScale.Sixteen);
            case "level one":
            case "level one1":return tiles.createTilemap(hex`10001000010211020202030215020302110202040b070a070a070a070a070a070a070a100b08090809070c140a0809080908091213070a070a08110209070a070a070a100e08070a09080908090807140a08090f0e0710130a070a070a07081109070a100e08120b0908090809080908090809120e0708090a070a070a070a070a070a100e080908090809100b08090809071405060c0c0c0a070a1013070a070a080204010202040e0809120b080908090809100b070a1013070a100e070a070a0102040b080908090809080908070d0d0e091213070a070a070a070a07080204090a100b08090809080908090809080f080910060d140d0d0d0d140d0d0d140d0d0c05`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . 2 2 2 2 . . . . . . 2 
2 . . . . 2 2 2 2 . . . . . . 2 
2 . 2 2 . . . . . . 2 2 2 . . 2 
2 . 2 2 . . . . . . 2 2 2 . . 2 
2 . 2 2 . . . . . . . . . . . 2 
2 . 2 2 . . . 2 2 . . . . . . 2 
2 . . . . . . 2 2 . . . . 2 2 2 
2 2 2 2 2 . . 2 2 . . . . 2 2 2 
2 2 2 2 2 . . 2 2 . . . . . . 2 
2 . . 2 2 . . 2 2 . . . . 2 2 2 
2 . . 2 2 . . 2 2 . 2 2 2 2 . 2 
2 . . . . . . . . . 2 2 2 2 . 2 
2 . . . . . . . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenSwitchUp], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "turn1":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTilekid0":
            case "tile11":return tile11;
            case "myTile0":
            case "tile1":return tile1;
            case "myTile5":
            case "tile7":return tile7;
            case "myTilekid1":
            case "tile12":return tile12;
            case "turn0":
            case "tile8":return tile8;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile3":
            case "tile5":return tile5;
            case "turn3":
            case "tile13":return tile13;
            case "turn2":
            case "tile9":return tile9;
            case "myTilekid2":
            case "tile14":return tile14;
            case "myTilekid":
            case "tile10":return tile10;
            case "myTile6":
            case "tile15":return tile15;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
