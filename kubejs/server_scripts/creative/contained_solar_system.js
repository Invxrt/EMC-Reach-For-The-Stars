ServerEvents.recipes((event) => {
    event
    .custom({
      type: "reach_for_the_stars:contained_space_station",
      fluids: [{
        amount: 16000,
        fluid: "reach_for_the_stars:glacio_drill_fluid",
      },
    ],
      ingredients: [
        {
          count: 16,
          ingredient: {
            item: "tconstruct:fake_ingot",
          },
        },
        {
          count: 16,
          ingredient: {
            item: "tconstruct:soulsteel_ingot",
          },
        },
        {
          count: 16,
          ingredient: {
            item: "twilightforest:uncrafting_table",
          },
        },
        {
          count: 2,
          ingredient: {
            item: "projectexpansion:fading_matter_block",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "botania:creative_pool",
          },
        },
        {
          count: 1,
          ingredient: {
            item: 'ad_astra_giselle_addon:creative_oxygen_can',
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:creative_source_jar",
          },
        },
        {
          count: 1,
          ingredient: {
            item: 'ars_nouveau:creative_spell_book',
          },
        },
        {
          count: 1,
          ingredient: {
            type: "forge:nbt",
            item: "botania:mana_tablet",
            nbt: "{creative:1b, mana:500000}"
          },
        },
        {
          count: 1,
          ingredient: {
            item: "create:creative_motor",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "mekanism:creative_chemical_tank",
          },
        },
        {
          count: 1,
          ingredient: {
            type: "forge:nbt",
            item: "mekanism:creative_energy_cube",
            nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}',
          },
        },
        {
          count: 1,
          ingredient: {
            item: "pneumaticcraft:creative_compressed_iron_block",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "mysticalagriculture:creative_soulium_dagger",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "mekanism:creative_fluid_tank",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "enderio:player_token",
          },
        },
        {
          count: 1,
          ingredient: {
            item: 'integratedtunnels:part_player_simulator',
          },
        },
        {
          count: 1,
          ingredient: {
            type: "forge:nbt",
            item: "irons_spellbooks:scroll",
            nbt: '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:snowball",index:0,level:4,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}',
          },
        },
        {
          count: 1,
          ingredient: {
            item: "minecraft:player_head",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "mob_grinding_utils:solid_xp_baby",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "modularrouters:player_module",
          },
        },
        {
          count: 1,
          ingredient: {
            type: "forge:nbt",
            item: "productivebees:spawn_egg_configurable_bee",
            nbt: '{EntityTag:{type:"productivebees:chaos"}}',
          },
        },
        {
          count: 1,
          ingredient: {
            item: "rftoolsutility:flight_module",
          },
        },
      ],
      result: {
        item: "reach_for_the_stars:completion_trophy",
        count: 1,
      },
    })
    .id("trophy");
})