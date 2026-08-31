MMEvents.createStructures((event) => {
  event
    .create("mm:fuel_distillery_structure")
    .controllerId("mm:fuel_distillery")
    .name("Fuel Distillery")
    .layout((a) => {
      a.layer(["AAA", "ABA", "AAA"]);
      a.layer(["DED", "E E", "DED"]);
      a.layer(["DED", "E E", "DED"]);
      a.layer(["AHA", "FBG", "ACA"])
        .key("A", {
          block: "immersiveengineering:steel_scaffolding_standard",
        })
        .key("B", {
          block: "immersiveengineering:rs_engineering",
        })
        .key("D", {
          block: "immersiveengineering:sheetmetal_steel",
        })
        .key("E", {
          block: "minecraft:glass",
        })
        .key("F", {
          block: "mm:fluid_port_input",
        })
        .key("G", {
          block: "mm:fluid_port_output",
        })
        .key("H", {
          block: "mm:energy_port_input",
        });
    });
});
