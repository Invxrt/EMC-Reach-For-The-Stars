MMEvents.createProcesses((event) => {
  event
    .create("mm:fuel_distillery/conversion")
    .structureId("mm:fuel_distillery_structure")
    .ticks(50)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:fluid",
        fluid: "immersiveengineering:biodiesel",
        amount: 100,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:energy", amount: 100 },
    })
    .output({
      type: "mm:output/simple",
      ingredient: { type: "mm:fluid", fluid: "ad_astra:fuel", amount: 50 },
    });
});
