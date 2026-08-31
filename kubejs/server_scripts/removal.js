ServerEvents.recipes(event =>{
	// wipe all Ex Deorum sieving recipes (empties the JEI Sieve categories)
    event.remove({ type: 'exdeorum:sieve' })
    event.remove({ type: 'exdeorum:compressed_sieve' })
    // meshes are useless without a sieve
    event.remove({ output: '#exdeorum:sieve_meshes' })
    // ore chunks were sieve-only drops (Create Sifter drops nuggets instead),
    // so remove the dead chunk -> ingot smelting/blasting recipes
    event.remove({ input: '#exdeorum:ore_chunks' })
    event.remove({ output: '#exdeorum:ore_chunks' })
	
	// remove waystones
	event.remove('waystones:waystone')
	event.remove('waystones:mossy_waystone')
	event.remove('waystones:sandy_waystone')
	event.remove('waystones:deepslate_waystone')
	event.remove('waystones:blackstone_waystone')
	event.remove('waystones:end_stone_waystone')
	
	// remove sieves
	event.remove('exdeorum:archwood_sieve')
	event.remove('exdeorum:blue_archwood_compressed_sieve')
	event.remove('exdeorum:green_archwood_compressed_sieve')
	event.remove('exdeorum:red_archwood_compressed_sieve')
	event.remove('exdeorum:purple_archwood_compressed_sieve')
	event.remove('exdeorum:oak_sieve')
	event.remove('exdeorum:spruce_sieve')
	event.remove('exdeorum:birch_sieve')
	event.remove('exdeorum:jungle_sieve')
	event.remove('exdeorum:acacia_sieve')
	event.remove('exdeorum:dark_oak_sieve')
	event.remove('exdeorum:mangrove_sieve')
	event.remove('exdeorum:cherry_sieve')
	event.remove('exdeorum:bamboo_sieve')
	event.remove('exdeorum:crimson_sieve')
	event.remove('exdeorum:warped_sieve')
	event.remove('exdeorum:oak_compressed_sieve')
	event.remove('exdeorum:spruce_compressed_sieve')
	event.remove('exdeorum:birch_compressed_sieve')
	event.remove('exdeorum:jungle_compressed_sieve')
	event.remove('exdeorum:acacia_compressed_sieve')
	event.remove('exdeorum:dark_oak_compressed_sieve')
	event.remove('exdeorum:mangrove_compressed_sieve')
	event.remove('exdeorum:cherry_compressed_sieve')
	event.remove('exdeorum:bamboo_compressed_sieve')
	event.remove('exdeorum:crimson_compressed_sieve')
	event.remove('exdeorum:warped_compressed_sieve')
	event.remove('exdeorum:mechanical_sieve')
	

	// Resource Capsules Mod
	event.remove({output: 'resource_capsules:tier_1_mini_capsule'})
	event.remove({output: 'resource_capsules:tier_2_mini_capsule'})
	event.remove({output: 'resource_capsules:tier_3_mini_capsule'})
	event.remove({input: 'resource_capsules:tier_1_mini_capsule'})
	event.remove({input: 'resource_capsules:tier_2_mini_capsule'})
	event.remove({input: 'resource_capsules:tier_3_mini_capsule'})
	event.remove({output: 'resource_capsules:tier_1_medium_capsule'})
	event.remove({output: 'resource_capsules:tier_2_medium_capsule'})
	event.remove({output: 'resource_capsules:tier_3_medium_capsule'})
	event.remove({input: 'resource_capsules:tier_1_medium_capsule'})
	event.remove({input: 'resource_capsules:tier_2_medium_capsule'})
	event.remove({input: 'resource_capsules:tier_3_medium_capsule'})
	event.remove({output: 'resource_capsules:tier_1_large_capsule'})
	event.remove({output: 'resource_capsules:tier_2_large_capsule'})
	event.remove({output: 'resource_capsules:tier_3_large_capsule'})
	event.remove({input: 'resource_capsules:tier_1_large_capsule'})
	event.remove({input: 'resource_capsules:tier_2_large_capsule'})
	event.remove({input: 'resource_capsules:tier_3_large_capsule'})


	// Ad Astra
	event.remove({output: 'ad_astra:tier_2_rocket'})
	event.remove({output: 'ad_astra:tier_3_rocket'})
	event.remove({output: 'ad_astra:tier_4_rocket'})
	event.remove({output: 'ad_astra_rocketed:tier_5_rocket'})
	event.remove({output: 'ad_astra_rocketed:tier_6_rocket'})
	event.remove({output: 'ad_astra_rocketed:tier_7_rocket'})
	event.remove({output: 'ad_astra:nasa_workbench'})
	event.remove({input: 'ad_astra:nasa_workbench'})


	// Project E
	event.remove({id: 'projecte:watch_of_flowing_time'})
	event.remove({output: 'projectexpansion:cyan_power_flower'})
	event.remove({output: 'projectexpansion:green_power_flower'})
	event.remove({output: 'projectexpansion:lime_power_flower'})
	event.remove({output: 'projectexpansion:yellow_power_flower'})
	event.remove({output: 'projectexpansion:orange_power_flower'})
	event.remove({output: 'projectexpansion:white_power_flower'})
	event.remove({output: 'projectexpansion:fading_power_flower'})
	event.remove({output: 'projectexpansion:final_power_flower'})


	// Create
	event.remove({ output: 'create:hand_crank' })
})
