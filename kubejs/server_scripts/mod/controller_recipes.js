ServerEvents.recipes((event) => {
    event.shaped(Item.of('reach_for_the_stars:glacio_drill_controller'), ['ABA', 'BCB', 'ABA'], {
        A: "reach_for_the_stars:venus_ingot",
        B: "reach_for_the_stars:venus_core",
        C: "reach_for_the_stars:calorite_drill_controller"
    })
})