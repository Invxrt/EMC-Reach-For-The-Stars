ServerEvents.recipes((event) => {
    event
    .custom({
      type: "reach_for_the_stars:skyblock_builder",
      fluid: {
        amount: 16000,
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          count: 500,
          ingredient: {
            item: "mysticalagriculture:soulium_block",
          },
        },
        {
          count: 8,
          ingredient: {
            item: "quark:soul_bead",
          },
        },
        {
          count: 4,
          ingredient: {
            item: "draconicevolution:item_chaotic_damage",
          },
        },
        {
          count: 4,
          ingredient: {
            item: "reach_for_the_stars:planet_core_conglomerate",
          },
        },
        {
          count: 2,
          ingredient: {
            item: "mysticalagriculture:soulium_spawner",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "draconicevolution:draconic_staff",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "draconicevolution:draconic_sword",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "irons_spellbooks:legionnaire_flamberge",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "justdirethings:eclipsealloy_sword",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "mysticalagriculture:soulium_dagger",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "mysticalagriculture:passive_soulium_dagger",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "mysticalagriculture:hostile_soulium_dagger",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "mythicbotany:mjoellnir",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "twilightforest:giant_sword",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "twilightforest:glass_sword",
          },
        },
      ],
      result: {
        item: "mysticalagriculture:creative_soulium_dagger",
        count: 1,
      },
    })
    .id("dagger");
    event
    .custom({
      type: "reach_for_the_stars:skyblock_builder",
      fluid: {
        amount: 16000,
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          count: 8,
          ingredient: {
            item: "reach_for_the_stars:planet_core_conglomerate",
          },
        },
        {
          count: 2,
          ingredient: {
            item: "twilightforest:maze_map_focus",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "bloodmagic:demonpylon",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "megacells:256m_crafting_storage",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "tconstruct:cheese_ingot",
          },
        },
      ],
      result: {
        item: "twilightforest:uncrafting_table",
        count: 1,
      },
    })
    .id("uncrafting_table");
    event
    .custom({
      type: "reach_for_the_stars:skyblock_builder",
      fluid: {
        amount: 16000,
        fluid: "minecraft:water",
      },
      ingredients: [
        {
          count: 64,
          ingredient: {
            item: "rftoolsbuilder:space_chamber",
          },
        },
        {
          count: 32,
          ingredient: {
            item: "ad_astra:oxygen_gear",
          },
        },
        {
          count: 4,
          ingredient: {
            item: "reach_for_the_stars:planet_core_conglomerate",
          },
        },
        {
          count: 2,
          ingredient: {
            item: "ad_astra:oxygen_distributor",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ad_astra:jet_suit",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ad_astra_giselle_addon:pneumatic_space_breathing_upgrade",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ad_astra_giselle_addon:pneumatic_space_fire_proof_upgrade",
          },
        },
      ],
      result: {
        item: "ad_astra_giselle_addon:creative_oxygen_can",
        count: 1,
      },
    })
    .id("oxygen");
})