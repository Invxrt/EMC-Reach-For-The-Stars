MMEvents.createProcesses((event) => {
  event
    .create("mm:t1_rocket_assembly1")
    .structureId("mm:t1_rocket_assembly_structure")
    .ticks(100)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "ad_astra:rocket_nose_cone",
        count: 1
      }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: "thermal:steel_block", count: 6 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: "ad_astra:steel_tank", count: 2 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: "ad_astra:rocket_fin", count: 4 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: 'ad_astra:steel_engine', count: 1 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:energy", amount: 1000 }
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "ad_astra:tier_1_rocket",
        count: 1
      }
    });
});