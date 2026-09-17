ServerEvents.recipes(event => {
    event.recipes.industrialforegoing.dissolution_chamber(
        ["industrialforegoing:plastic", "ad_astra:mercury_globe", "industrialforegoing:plastic", "industrialforegoing:pink_slime_ingot", "ad_astra:mercury_globe", "industrialforegoing:pink_slime_ingot", "ad_astra:ostrum_block", "ad_astra:ostrum_block"], // input items
        "industrialforegoing:pink_slime", // input fluid
        "reach_for_the_stars:mercury_core", // output item
        100 // time
    )
})