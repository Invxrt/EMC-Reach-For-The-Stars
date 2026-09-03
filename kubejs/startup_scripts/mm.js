MMEvents.registerControllers(event => {
    event.create('fuel_distillery')
    .type('mm:machine')
    .name('Fuel Distillery Controller')
    // Rocket Assembly Controllers
    event.create('t1_rocket_assembly_controller')
    .type('mm:machine')
    .name('T1 Rocket Assembly Controller')

    event.create('t2_rocket_assembly_controller')
    .type('mm:machine')
    .name('T2 Rocket Assembly Controller')

    event.create('t3_rocket_assembly_controller')
    .type('mm:machine')
    .name('T3 Rocket Assembly Controller')

    // PLANET DRILLS
    event.create('steel_drill_controller')
    .type('mm:machine')
    .name('Steel Drill Controller')

    event.create('desh_drill_controller')
    .type('mm:machine')
    .name('Desh Drill Controller')
})
