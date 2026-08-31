MMEvents.registerControllers(event => {
    event.create('fuel_distillery')
    .type('mm:machine')
    .name('Fuel Distillery Controller')

    event.create('t1_rocket_assembly_controller')
    .type('mm:machine')
    .name('T1 Rocket Assembly Controller')

    event.create('t2_rocket_assembly_controller')
    .type('mm:machine')
    .name('T2 Rocket Assembly Controller')

})
