ServerEvents.recipes((event) => {
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
})