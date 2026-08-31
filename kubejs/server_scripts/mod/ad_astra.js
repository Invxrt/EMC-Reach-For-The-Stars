ServerEvents.recipes((event) => {
    event.remove("ad_astra:etrionic_blast_furnace")
    event.shaped("ad_astra:etrionic_blast_furnace", ["ADA", "CBC", "ADA"], {
    A: "thermal:steel_block",
    B: "minecraft:blast_furnace",
    C: "minecraft:redstone",
    D: "thermal:steel_plate",
  });
})