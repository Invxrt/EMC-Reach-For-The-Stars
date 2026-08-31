MMEvents.createStructures((event) => {
  event
    .create("mm:t1_rocket_assembly_structure")
    .controllerId("mm:t1_rocket_assembly_controller")
    .name("T1 Rocket Assembly")
    .layout((a) => {
      a.layer(["ABA", "BDB", "ABA"]);
      a.layer(["BEB", "E E", "BEB"]);
      a.layer(["BEB", "E E", "BEB"]);
      a.layer(["AHA", "FDG", "ACA"])
        .key("A", {
          block: "immersiveengineering:light_engineering",
        })
        .key("B", {
          block: "immersiveengineering:sheetmetal_steel",
        })
        .key("D", {
          block: "immersiveengineering:rs_engineering",
        })
        .key("E", {
          block: "immersiveengineering:steel_scaffolding_standard",
        })
        .key("F", {
          block: "mm:item_port_input",
        })
        .key("G", {
          block: "mm:item_port_output",
        })
        .key("H", {
          block: "mm:energy_port_input",
        });
    });
});
