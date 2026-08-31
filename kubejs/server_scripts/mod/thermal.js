ServerEvents.recipes((event) => {
  event.shaped("kubejs:iron_flux_coil", ["  R", " I ", "R  "], {
    I: "minecraft:iron_ingot",
    R: "minecraft:redstone",
  })

  event.remove({"output": "thermal:dynamo_stirling"});
  event.shaped("thermal:dynamo_stirling", [" I ", "121", "343"], {
    I: "kubejs:iron_flux_coil",
    1: "minecraft:iron_ingot",
    2: "#forge:gears/iron",
    3: "#forge:stone",
    4: "minecraft:redstone",
  });
});
