ServerEvents.recipes((event) => {
    event.remove('resource_capsules:resource_gen_tier_1')
    event.shaped('resource_capsules:resource_gen_tier_1', ['ABA', 'BCB', 'ABA'], {
        A: 'immersiveengineering:sheetmetal_steel',
        B: 'immersiveengineering:steel_scaffolding_standard',
        C: 'kubejs:iron_flux_coil'
    })
    event.remove('resource_capsules:resource_gen_tier_2')
    event.shaped('resource_capsules:resource_gen_tier_2', ['ABA', 'BCB', 'ABA'], {
        A: 'ad_astra:desh_block',
        B: 'ad_astra:glowing_desh_pillar',
        C: 'ad_astra:cheese_block'
    })
    event.remove('resource_capsules:resource_gen_tier_3')
})