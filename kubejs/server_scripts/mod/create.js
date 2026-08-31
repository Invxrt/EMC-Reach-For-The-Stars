ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:andesite" });
  event.remove({ type: "createsifter:sifting" });

  //MISC
  event.shapeless("4x minecraft:andesite", [
    "2x minecraft:cobblestone",
    "2x minecraft:gravel",
  ]);

  event.shapeless("8x create:shaft", ["2x minecraft:andesite"]);
  event.shaped("create:andesite_casing", ["AAA", "ABA", "AAA"], {
    A: "minecraft:andesite",
    B: "#minecraft:logs",
  });

  // Sifting Recipes
  event.remove({ output: "createsifter:andesite_mesh" });
  event.shaped("createsifter:andesite_mesh", ["AAA", "ABA", "AAA"], {
    A: "minecraft:stick",
    B: "minecraft:andesite",
  });


  event.remove({ output: "createsifter:sifter" });
  event.shaped("createsifter:sifter", ["C C", "ADA", "CCC"], {
    A: "create:andesite_casing",
    C: "#minecraft:planks",
    D: "create:cogwheel",
  });

  event.recipes.createsifterSifting(
    [
      Item.of("minecraft:iron_nugget").withChance(0.1),
      Item.of("create:zinc_nugget").withChance(0.1),
      Item.of("create:copper_nugget").withChance(0.1),
      Item.of("minecraft:coal").withChance(0.2),
      Item.of("minecraft:flint").withChance(0.25),
      Item.of("immersiveengineering:nugget_aluminum").withChance(0.1),
    ],
    ["minecraft:gravel", "createsifter:andesite_mesh"],
  );
  event.recipes.createsifterSifting(
    [
      Item.of("minecraft:redstone").withChance(0.15),
      Item.of("minecraft:glowstone_dust").withChance(0.15),
      Item.of("minecraft:bone_meal").withChance(0.2),
    ],
    ["minecraft:sand", "createsifter:andesite_mesh"],
  );
});
