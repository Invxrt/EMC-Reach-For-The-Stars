ServerEvents.recipes((event) => {
    // CONTROLLERS
    event.shaped(Item.of("mm:fuel_distillery", 1), ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "#forge:ingots/steel",
        C: "minecraft:glass"
    });
    event.shaped(Item.of("mm:t1_rocket_assembly_controller", 1), ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "#forge:ingots/steel",
        C: "minecraft:redstone_block"
    });
    event.shaped(Item.of("mm:t2_rocket_assembly_controller", 1), ["ABA", "BCB", "ABA"], {
        A: "ad_astra:desh_block",
        B: "ad_astra:desh_ingot",
        C: "mm:t1_rocket_assembly_controller"
    });

    // PORTS
    event.shaped(Item.of("mm:fluid_port_input", 1), ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "#forge:ingots/steel",
        C: "minecraft:glass"
    });
    event.shaped(Item.of("mm:energy_port_input", 1), ["ABA", "BCB", "ABA"], {
        A: "#forge:ingots/steel",
        B: "minecraft:redstone",
        C: "#forge:storage_blocks/steel"
    });
    event.shaped(Item.of("mm:item_port_input", 1), ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "#forge:ingots/steel",
        C: "minecraft:chest"
    });
    event.shapeless(Item.of("mm:fluid_port_output", 1),["mm:fluid_port_input"])
    event.shapeless(Item.of("mm:fluid_port_input", 1),["mm:fluid_port_output"])
    event.shapeless(Item.of("mm:item_port_output", 1),["mm:item_port_input"])
    event.shapeless(Item.of("mm:item_port_input", 1),["mm:item_port_output"])
})
