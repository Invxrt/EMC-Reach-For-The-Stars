ServerEvents.recipes((event) => {
  event.remove({ output: "projectexpansion:transmutation_interface" });
  event.shaped(
    Item.of("projectexpansion:transmutation_interface"),
    ["ABA", "BCB", "ABA"],
    {
      A: "projectexpansion:purple_emc_link",
      B: "projecte:condenser_mk2",
      C: "reach_for_the_stars:mercury_ingot",
    },
  );
  event.remove({ output: "projecte:gem_leggings" })
  event.shaped(
    Item.of("projecte:gem_leggings"),
    ['12 ', '34 ', '   '],
    {
      1: "projecte:rm_leggings",
      2: "projecte:black_hole_band",
      3: "justdirethings:time_wand",
      4: "projecte:klein_star_omega"
    }
  )
});
