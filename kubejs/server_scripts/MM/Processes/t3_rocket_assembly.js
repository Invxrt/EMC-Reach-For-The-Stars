MMEvents.createProcesses((event) => {
  event
    .create("mm:t3_rocket_assembly1")
    .structureId("mm:t3_rocket_assembly_structure")
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
      ingredient: { type: "mm:item", item: "ad_astra:ostrum_block", count: 6 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: "ad_astra:ostrum_tank", count: 2 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: "ad_astra:rocket_fin", count: 4 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: 'ad_astra:ostrum_engine', count: 1 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: 'kubejs:mars_core', count: 1 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:energy", amount: 1000 }
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "ad_astra:tier_3_rocket",
        count: 1
      }
    });
});