ServerEvents.recipes((event) => {
    event.remove('resource_capsules:resource_gen_tier_1')
    event.shaped('resource_capsules:resource_gen_tier_1', ['ABA', 'BCB', 'ABA'], {
        A: 'immersiveengineering:sheetmetal_steel',
        B: 'immersiveengineering:steel_scaffolding_standard',
        C: 'reach_for_the_stars:iron_flux_coil'
    })
    event.remove('resource_capsules:resource_gen_tier_2')
    event.shaped('resource_capsules:resource_gen_tier_2', ['ABA', 'BCB', 'ABA'], {
        A: 'ad_astra:desh_block',
        B: 'ad_astra:glowing_desh_pillar',
        C: 'ad_astra:cheese_block'
    })
    event.remove('resource_capsules:resource_gen_tier_3')
    event.shaped('resource_capsules:resource_gen_tier_3', ['ABA', 'BCB', 'ABA'], {
        A: 'ad_astra:ostrum_block',
        B: 'ad_astra:glowing_ostrum_pillar',
        C: 'resource_capsules:resource_gen_tier_2'
    })
    event.remove('resource_capsules:resource_gen_tier_4')
    event.shaped('resource_capsules:resource_gen_tier_4', ['ABA', 'BCB', 'ABA'], {
        A: 'ad_astra:calorite_block',
        B: 'ad_astra:glowing_calorite_pillar',
        C: 'resource_capsules:resource_gen_tier_3'
    })
    event.remove('resource_capsules:resource_gen_tier_5')
    event.shaped('resource_capsules:resource_gen_tier_5', ['ABA', 'BCB', 'ABA'], {
        A: 'powah:nitro_crystal_block',
        B: 'powah:crystal_nitro',
        C: 'resource_capsules:resource_gen_tier_4'
    })




    // ADD CORES TO MACHINES
    event.custom({
		type: "resource_capsules:resource_gen_tier_4",
		ingredients: [
			{
				"item": "reach_for_the_stars:mercury_core"
			}
		],
		result: {
			"count": 1,
			"item": "reach_for_the_stars:mercury_shard"
		}
	});
    event.custom({
		type: "resource_capsules:resource_gen_tier_5",
		ingredients: [
			{
				"item": "reach_for_the_stars:venus_core"
			}
		],
		result: {
			"count": 1,
			"item": "reach_for_the_stars:venus_shard"
		}
	});
    event.custom({
		type: "resource_capsules:resource_gen_tier_6",
		ingredients: [
			{
				"item": "reach_for_the_stars:glacio_core"
			}
		],
		result: {
			"count": 1,
			"item": "reach_for_the_stars:glacio_shard"
		}
	});
})