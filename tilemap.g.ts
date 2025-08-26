// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`100010000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0b0101010101010101010101010b0c0c01010101010101010101010101010c0c010102090a0101010102090a01010c0c01010308070101010103080701010c0c01010405060101010104050601010c0c01010101010101010101010101010c0c01010101010101010101010101010c0c01010101010101010101010101010c0c01010101010101010101010101010c0c010102090a0101010102090a01010c0c01010308070101010103080701010c0c01010405060101010104050601010c0c01010101010101010101010101010c0c0b0101010101010101010101010b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles14,sprites.builtin.forestTiles15,sprites.builtin.forestTiles11,sprites.builtin.forestTiles10,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.dungeon.collectibleInsignia,sprites.builtin.brick], TileScale.Sixteen);
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
// Auto-generated code. Do not edit.
