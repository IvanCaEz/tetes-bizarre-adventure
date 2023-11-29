// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level one":
            case "level1":return tiles.createTilemap(hex`10001000010211020202030202020302110202040b070a070a070a070a070a070a070a100b08090809070c140a0809080908091213070a070a08110209070a070a070a100e08070a09080908090807140a08090f0e0710130a070a070a07081109070a100e08120b0908090809080908090809120e0708090a070a070a070a070a070a100e080908090809100b08090809071405060c0c0c0a070a1013070a070a08020f010202040e0809120b080908090809100b070a1013070a100e070a070a0102040b080908090809080908070d0d0e091213070a070a070a070a07080204090a100b08090809080908090809080f080910060d140d0d0d0d140d0d0d140d0d0c05`, img`
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
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
