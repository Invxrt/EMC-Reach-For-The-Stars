ServerEvents.recipes((event) => {
    event.shaped("reach_for_the_stars:transmutation_constructor_controller", ["ABA", "BCB", "ABA"], {
        A: "ad_astra:ostrum_block",
        B: "ad_astra:ostrum_ingot",
        C: "projecte:philosophers_stone",
    });
    event.remove({ output: "projecte:transmutation_table" });
  event
    .custom({
      type: "reach_for_the_stars:transmutation_constructor",
      ingredients: [
        {
          count: 64,
          ingredient: {
            item: "minecraft:obsidian",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "projecte:philosophers_stone",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "projecte:condenser_mk1",
          },
        },
        {
          count: 4,
          ingredient: {
            item: "reach_for_the_stars:mars_core",
          },
        },
      ],
      result: {
        item: "projecte:transmutation_table",
        count: 1,
      },
    })
    .id("transmutation");
});
