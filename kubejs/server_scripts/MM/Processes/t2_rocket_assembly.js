MMEvents.createProcesses((event) => {
  event
    .create("mm:t2_rocket_assembly1")
    .structureId("mm:t2_rocket_assembly_structure")
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
      ingredient: { type: "mm:item", item: "ad_astra:desh_block", count: 6 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: "ad_astra:desh_tank", count: 2 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: "ad_astra:rocket_fin", count: 4 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: 'ad_astra:desh_engine', count: 1 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:item", item: 'kubejs:moon_core', count: 1 }
    })
    .input({
      type: "mm:input/consume",
      ingredient: { type: "mm:energy", amount: 1000 }
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "ad_astra:tier_2_rocket",
        count: 1
      }
    });
});