ServerEvents.recipes((event) => {
  event.remove("ad_astra:etrionic_blast_furnace");
  event.shaped("ad_astra:etrionic_blast_furnace", ["ADA", "CBC", "ADA"], {
    A: "thermal:steel_block",
    B: "minecraft:blast_furnace",
    C: "minecraft:redstone",
    D: "thermal:steel_plate",
  });

  // ASSEMBLERS
  event.shaped("reach_for_the_stars:t5_rocket_assembler_controller", ["ABA", "BDB", "ABA"], {
    A: "powah:nitro_crystal_block",
    B: "powah:crystal_nitro",
    D: "reach_for_the_stars:t4_rocket_assembler_controller",
  });

  // ROCKETS
  event.custom({
    type: "reach_for_the_stars:t4_rocket_assembler",
    ingredients: [
      {
        count: 1,
        ingredient: {
          item: "ad_astra:rocket_nose_cone",
        },
      },
      {
        count: 6,
        ingredient: {
          item: "ad_astra:calorite_block",
        },
      },
      {
        count: 2,
        ingredient: {
          item: "ad_astra:calorite_tank",
        },
      },
      {
        count: 4,
        ingredient: {
          item: "ad_astra:rocket_fin",
        },
      },
      {
        count: 1,
        ingredient: {
          item: "ad_astra:calorite_engine",
        },
      },
      {
        count: 1,
        ingredient: {
          item: "reach_for_the_stars:mercury_core",
        },
      },
    ],
    result: {
      count: 1,
      item: "ad_astra:tier_4_rocket",
    },
  });
  event.custom({
    type: "reach_for_the_stars:t5_rocket_assembler",
    ingredients: [
      {
        count: 1,
        ingredient: {
          item: "ad_astra:rocket_nose_cone",
        },
      },
      {
        count: 6,
        ingredient: {
          item: "powah:nitro_crystal_block",
        },
      },
      {
        count: 2,
        ingredient: {
          item: "ad_astra:calorite_tank",
        },
      },
      {
        count: 4,
        ingredient: {
          item: "ad_astra:rocket_fin",
        },
      },
      {
        count: 1,
        ingredient: {
          item: "ad_astra:calorite_engine",
        },
      },
      {
        count: 1,
        ingredient: {
          item: "reach_for_the_stars:venus_core",
        },
      },
    ],
    result: {
      count: 1,
      item: "ad_astra_rocketed:tier_5_rocket",
    },
  });
});
