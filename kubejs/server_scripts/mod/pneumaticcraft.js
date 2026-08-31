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
    results: [Item.of("kubejs:earth_element", 1)],
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
    pressure: 4.0,
    results: [Item.of("kubejs:fire_element", 1)],
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
    results: [Item.of("kubejs:water_element", 1)],
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
    results: [Item.of("kubejs:air_element", 1)],
  });
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "kubejs:earth_element",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "kubejs:fire_element",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "kubejs:water_element",
        count: 1,
      },
      {
        type: "pneumaticcraft:stacked_item",
        item: "kubejs:air_element",
        count: 1,
      },
    ],
    pressure: 4.5,
    results: [Item.of("kubejs:earth_core", 1)],
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
    results: [Item.of("kubejs:moon_core", 1)],
  });
  event.custom({
    type: "pneumaticcraft:assembly_laser",
    input: {
      type: "pneumaticcraft:stacked_item",
      item: "kubejs:moon_shard",
      count: 32,
    },
    program: "laser",
    result: {
      item: "kubejs:moon_ingot",
      count: 1,
    },
  })
});
