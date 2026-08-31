ServerEvents.recipes((event) => {
  event.remove({"output": "mbtool:mbtool"});
  event.shaped("mbtool:mbtool", ["ABC", "DED", " F "], {
    A: "minecraft:iron_pickaxe",
    B: "immersiveengineering:heavy_engineering",
    C: "minecraft:iron_shovel",
    D: "minecraft:stone_button",
    E: "minecraft:book",
    F: "minecraft:stick",
  });
});