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
});
