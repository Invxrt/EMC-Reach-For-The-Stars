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
    event.shaped(Item.of('minecraft:lapis_lazuli', 1), ["S S", " SS", "S S"], {
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
  // MARS SHARD RECIPES
  event.shaped(Item.of("powah:uraninite"), ["SSS", "   ", "   "], {
    S: "kubejs:mars_shard",
  });
  event.shaped(Item.of("minecraft:netherite_scrap"), ["SSS", "SSS", "SSS"], {
    S: "kubejs:mars_shard",
  });
  event.shaped(Item.of("ae2:fluix_crystal"), ["SSS", "S  ", "   "], {
    S: "kubejs:mars_shard",
  });
  event.shaped(Item.of("ae2:certus_quartz_crystal"), ["S S", " S ", "S S"], {
    S: "kubejs:mars_shard",
  });
  event.shaped(Item.of('minecraft:amethyst_shard'), ["S S", "S S", "S S"], {
    S: "kubejs:mars_shard",
  });
  event.shaped(Item.of('ad_astra:ostrum_ingot'), ["SSS", " S ", "   "], {
    S: "kubejs:mars_shard",
  });
  event.shaped(Item.of('ae2:sky_dust'), ["S  ", "   ", "   "], {
    S: "kubejs:mars_shard",
  });
  event.shaped(Item.of('thermal:lead_ingot'), ["SSS", "SSS", "   "], {
    S: "kubejs:mars_shard",
  });
  event.custom({
    type: "resource_capsules:resource_gen_tier_3",
    ingredients: [
      {
        item: "kubejs:mars_core",
      },
    ],
    result: {
      count: 1,
      item: "kubejs:mars_shard",
    },
  });
});
