ServerEvents.recipes((event) => {
  // EARTH SHARD RECIPES
  event.shaped(Item.of("minecraft:iron_ingot", 1), ["SSS", "S  ", "   "], {
    S: "kubejs:earth_shard",
  });
  event.shaped(Item.of("minecraft:copper_ingot", 1), ["SSS", "   ", "   "], {
    S: "kubejs:earth_shard",
  });
  event.shaped(Item.of("create:zinc_ingot", 1), ["S S", " S ", "   "], {
    S: "kubejs:earth_shard",
  });
  event.shaped(Item.of("minecraft:coal", 1), ["S S", "   ", " S "], {
    S: "kubejs:earth_shard",
  });
  event.shaped(Item.of("minecraft:redstone", 1), ["S S", "   ", "   "], {
    S: "kubejs:earth_shard",
  });
  event.shaped(Item.of("minecraft:glowstone_dust", 1), ["SS ", "   ", "   "], {
    S: "kubejs:earth_shard",
  });
  event.shaped(Item.of("minecraft:bone_meal", 1), ["S  ", "   ", "   "], {
    S: "kubejs:earth_shard",
  });
  event.shaped(Item.of("immersiveengineering:nugget_aluminum", 1), ["SSS", " S ", "   "], {
    S: "kubejs:earth_shard",
  });
  event.custom({
    type: "resource_capsules:resource_gen_tier_1",
    ingredients: [
      {
        item: "kubejs:earth_core",
      },
    ],
    result: {
      count: 1,
      item: "kubejs:earth_shard",
    },
  });
  // MOON SHARD RECIPES
  event.shaped(Item.of("minecraft:diamond", 1), ["SSS", "SSS", "SSS"], {
    S: "kubejs:moon_shard",
});
  event.shaped(Item.of('ars_nouveau:source_gem', 1), [" S ", "SSS", " S "], {
    S: "kubejs:moon_shard",
  });
  event.shaped(Item.of("minecraft:quartz", 1), ["S S", " S ", "S S"], {
    S: "kubejs:moon_shard",
  });
  event.shaped(Item.of("minecraft:gold_nugget", 1), [" S ", "S S", " S "], {
    S: "kubejs:moon_shard",
  });
  event.shaped(Item.of("ad_astra:desh_nugget", 1), ["S S", "S S", "S S"], {
    S: "kubejs:moon_shard",
  });
    event.shaped(Item.of("thermal:tin_nugget", 1), ["SSS", " S ", "   "], {
    S: "kubejs:moon_shard",
  });
    event.shaped(Item.of("thermal:silver_nugget", 1), ["SSS", " SS", "   "], {
    S: "kubejs:moon_shard",
  });
    event.shaped(Item.of("thermal:nickel_nugget", 1), ["SSS", "SSS", "   "], {
    S: "kubejs:moon_shard",
  });
    event.shaped(Item.of("immersiveengineering:nugget_uranium", 1), ["SSS", "SSS", "S S"], {
    S: "kubejs:moon_shard",
  });
  event.custom({
    type: "resource_capsules:resource_gen_tier_2",
    ingredients: [
      {
        item: "kubejs:moon_core",
      },
    ],
    result: {
      count: 1,
      item: "kubejs:moon_shard",
    },
  });
});
