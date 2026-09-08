StartupEvents.registry('item', event => {
    // Fodder
    event.create('mars_clay').displayName('Mars Clay').texture('kubejs:item/mars_clay')

    // Icons
    event.create('rfts_icon').displayName('Reach For The Stars Icon').texture('kubejs:item/rfts')
    event.create('exclemation_mark').displayName('Exclemation Mark').texture('kubejs:item/exclamation_mark')

    // Elemental
    event.create('earth_element').displayName('Earth Element').texture('kubejs:item/essence/earth_essence')
    event.create('air_element').displayName('Air Element').texture('kubejs:item/essence/air_essence')
    event.create('water_element').displayName('Water Element').texture('kubejs:item/essence/water_essence')
    event.create('fire_element').displayName('Fire Element').texture('kubejs:item/essence/fire_essence')

    // Planetary Ingots
    event.create('earth_ingot').displayName('Earth Ingot').texture('kubejs:item/planetary/earth_ingot')
    event.create('moon_ingot').displayName('Moon Ingot').texture('kubejs:item/planetary/moon_ingot')
    event.create('mars_ingot').displayName('Mars Ingot').texture('kubejs:item/planetary/mars_ingot')
    event.create('venus_ingot').displayName('Venus Ingot').texture('kubejs:item/temp')
    event.create('mercury_ingot').displayName('Mercury Ingot').texture('kubejs:item/temp')
    event.create('glacio_ingot').displayName('Glacio Ingot').texture('kubejs:item/temp')
    
    // General Additions
    event.create('iron_flux_coil').displayName('Iron Flux Coil').texture('kubejs:item/iron_flux_coil')


    // Core addition
    event.create('earth_core').displayName('Earth Resource Core').texture('kubejs:item/cores/earth_core')
    event.create('moon_core').displayName('Moon Resource Core').texture('kubejs:item/cores/moon_core')
    event.create('mars_core').displayName('Mars Resource Core').texture('kubejs:item/cores/mars_core')
    event.create('mercury_core').displayName('Mercury Resource Core').texture('kubejs:item/cores/mercury_core')
    event.create('venus_core').displayName('Venus Resource Core').texture('kubejs:item/cores/venus_core')
    event.create('glacio_core').displayName('Glacio Resource Core').texture('kubejs:item/cores/glacio_core')
    
    // Shard addition
    event.create('earth_shard').displayName('Earth Resource Shard').texture('kubejs:item/cores/earth_shard')
    event.create('moon_shard').displayName('Moon Resource Shard').texture('kubejs:item/cores/moon_shard')
    event.create('mars_shard').displayName('Mars Resource Shard').texture('kubejs:item/cores/mars_shard')
    event.create('mercury_shard').displayName('Mercury Resource Shard').texture('kubejs:item/cores/mercury_shard')
    event.create('venus_shard').displayName('Venus Resource Shard').texture('kubejs:item/cores/venus_shard')
    event.create('glacio_shard').displayName('Glacio Resource Shard').texture('kubejs:item/cores/glacio_shard')

    // General Addition
    event.create('rocket_fin_mold').displayName('Rocket Fin Mold').texture('kubejs:item/rocket_fin_mold')
    event.create('blank_mold').displayName('Blank Mold').texture('kubejs:item/blank_mold')
    event.create('rocket_nose_mold').displayName('Rocket Nose Mold').texture('kubejs:item/rocket_nose_mold')
})
StartupEvents.registry('fluid', event => {
    // Fluid Addition
    event.create('steel_drill_fluid').thickTexture(0xC0C0C0).bucketColor(0xC0C0C0).displayName('Steel Drill Fluid');
    event.create('desh_drill_fluid').thickTexture(0xF57D27).bucketColor(0xF57D27).displayName('Desh Drill Fluid');
})
    

    // Gas Addition

