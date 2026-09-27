ServerEvents.recipes((event) => {
  event.shaped("reach_for_the_stars:iron_flux_coil", ["  R", " I ", "R  "], {
    I: "minecraft:iron_ingot",
    R: "minecraft:redstone",
  })

  event.remove({"output": "thermal:dynamo_stirling"});
  event.shaped("thermal:dynamo_stirling", [" I ", "121", "343"], {
    I: "reach_for_the_stars:iron_flux_coil",
    1: "minecraft:iron_ingot",
    2: "#forge:gears/iron",
    3: "#forge:stone",
    4: "minecraft:redstone",
  });
  event.custom({
    type: "thermal:crystallizer",
    ingredients: [
      { fluid: "tconstruct:molten_amethyst", amount: 1000 },
      { item: "reach_for_the_stars:mars_shard", count: 64 }
    ],
    result: { item: "reach_for_the_stars:mars_ingot" }
  });
  event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_amethyst", 1000), "minecraft:amethyst_block");
});
