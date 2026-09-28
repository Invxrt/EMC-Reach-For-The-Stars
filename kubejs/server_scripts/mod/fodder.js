ServerEvents.recipes((event) => {
    // TSS
    event.remove({output: "toms_storage:ts.inventory_connector"})
    event.shaped(Item.of("toms_storage:ts.inventory_connector", 1), ["ABA", "DCD", "ABA"], {
        A: "#minecraft:planks",
        B: "minecraft:comparator",
        C: "minecraft:redstone",
        D: '#forge:chests'
    });
    event.remove({output: "toms_storage:ts.inventory_cable_connector"})
    event.shaped(Item.of("toms_storage:ts.inventory_cable_connector", 1), [" BA", "DCE", " BA"], {
        A: "#minecraft:planks",
        B: "minecraft:comparator",
        C: "#forge:chests",
        D: 'toms_storage:ts.inventory_cable',
        E: 'minecraft:redstone'
    });
    // Random Progression items
    event.shaped(Item.of('reach_for_the_stars:mars_clay', 4), ['AB ', 'BA ', '   '], {
        A: "minecraft:clay",
        B: "ad_astra:mars_sand"
    });      
    // RANDOM
    event.shaped(Item.of('tconstruct:sky_slime_ball', 1), ['AAA', 'ABA', 'AAA'], {
        A: "reach_for_the_stars:air_essence",
        B: "minecraft:slime_ball"
    });
    event.remove({"output": "mbtool:mbtool"});
    event.shaped("mbtool:mbtool", ["ABC", "DED", " F "], {
        A: "minecraft:iron_pickaxe",
        B: "immersiveengineering:light_engineering",
        C: "minecraft:iron_shovel",
        D: "minecraft:stone_button",
        E: "minecraft:book",
        F: "minecraft:stick",
  });
  // PLANET CONGLOMERATE
  event.shaped(Item.of('reach_for_the_stars:planet_core_conglomerate', 1), ['123', '4 4', '567'], {
    1: "reach_for_the_stars:earth_core",
    2: "reach_for_the_stars:moon_core",
    3: "reach_for_the_stars:mars_core",
    4: "ad_astra:earth_globe",
    5: "reach_for_the_stars:mercury_core",
    6: "reach_for_the_stars:venus_core",
    7: "reach_for_the_stars:glacio_core"
  });
});
