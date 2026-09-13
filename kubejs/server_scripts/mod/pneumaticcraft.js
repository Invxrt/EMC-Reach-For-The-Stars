ServerEvents.recipes((event) => {
  event.remove({ output: "pneumaticcraft:reinforced_stone" });
  event.shaped(
    Item.of("pneumaticcraft:reinforced_stone", 8),
    ["SSS", "SAS", "SSS"],
    { S: "ad_astra:moon_stone", A: "pneumaticcraft:ingot_iron_compressed" },
  );
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "minecraft:dirt",
        count: 64,
      },
    ],
    pressure: 3.0,
    results: [Item.of("reach_for_the_stars:earth_essence", 1)],
  });
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "minecraft:obsidian",
        count: 64,
      },
    ],
    pressure: 3.0,
    results: [Item.of("reach_for_the_stars:fire_essence", 1)],
  });
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "minecraft:blue_ice",
        count: 64,
      },
    ],
    pressure: 3.0,
    results: [Item.of("reach_for_the_stars:water_essence", 1)],
  });
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "minecraft:oak_sapling",
        count: 64,
      },
    ],
    pressure: 3.0,
    results: [Item.of("reach_for_the_stars:air_essence", 1)],
  });
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "reach_for_the_stars:earth_essence",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "reach_for_the_stars:fire_essence",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "reach_for_the_stars:water_essence",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "reach_for_the_stars:air_essence",
        count: 1,
      },
    ],
    pressure: 4.0,
    results: [Item.of("reach_for_the_stars:earth_core", 1)],
  });

  // Tier 2
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "ad_astra:moon_globe",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "ad_astra:desh_block",
        count: 16,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "ad_astra:cheese",
        count: 32,
      },
    ],
    pressure: 4.0,
    results: [Item.of("reach_for_the_stars:moon_core", 1)],
  });
  event.custom({
    type: "pneumaticcraft:assembly_laser",
    input: {
      type: "pneumaticcraft:stacked_item",
      item: "reach_for_the_stars:moon_shard",
      count: 32,
    },
    program: "laser",
    result: {
      item: "reach_for_the_stars:moon_ingot",
      count: 1,
    },
  })
  // DRILL FLUID
  event.custom({
    type: "pneumaticcraft:thermo_plant",
    exothermic: false,
    fluid_input: {
      type: "pneumaticcraft:fluid",
      fluid: "pneumaticcraft:lubricant",
      amount: 1000,
    },
    fluid_output: {
      type: "pneumaticcraft:fluid",
      fluid: "reach_for_the_stars:steel_drill_fluid",
      amount: 500,
    },
    item_input: {
      tag: "minecraft:coals"
    },
    temperature: {
      min_temp: 373
    }
  })
  event.custom({
    type: "pneumaticcraft:thermo_plant",
    exothermic: false,
    fluid_input: {
      type: "pneumaticcraft:fluid",
      fluid: "reach_for_the_stars:steel_drill_fluid",
      amount: 1000,
    },
    fluid_output: {
      type: "pneumaticcraft:fluid",
      fluid: "reach_for_the_stars:desh_drill_fluid",
      amount: 500,
    },
    item_input: {
      item: "ad_astra:desh_block"
    },
    temperature: {
      min_temp: 373
    }
  })
});
