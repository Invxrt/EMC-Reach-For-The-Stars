ServerEvents.recipes((event) => {
  event
    .custom({
      type: "reach_for_the_stars:ritual_site",
      ingredients: [
        {
          count: 32,
          ingredient: {
            item: "ars_nouveau:ring_of_potential",
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
            item: "irons_spellbooks:invisibility_ring",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "irons_spellbooks:visibility_ring",
          },
        },
      ],
      result: {
        item: "botania:mana_tablet",
        nbt: "{creative: 1b, mana: 500000}",
        count: 1,
      },
    })
    .id("mana_tablet");
  event
    .custom({
      type: "reach_for_the_stars:ritual_site",
      ingredients: [
        {
          count: 64,
          ingredient: {
            item: "botania:blacker_lotus",
          },
        },
        {
          count: 32,
          ingredient: {
            item: "botania:gaia_ingot",
          },
        },
        {
          count: 32,
          ingredient: {
            item: "mythicbotany:alfsteel_ingot",
          },
        },
        {
          count: 32,
          ingredient: {
            item: "mythicbotany:dream_cherry",
          },
        },
        {
          count: 32,
          ingredient: {
            item: "mythicbotany:raw_elementium",
          },
        },
        {
          count: 32,
          ingredient: {
            item: "quark:ancient_sapling",
          },
        },
        {
          count: 12,
          ingredient: {
            item: "reach_for_the_stars:planet_core_conglomerate",
          },
        },
        {
          count: 8,
          ingredient: {
            item: "botania:gaia_pylon",
          },
        },
        {
          count: 4,
          ingredient: {
            item: "mythicbotany:wither_aconite_floating",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "botania:cacophonium",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "botania:record_gaia_2",
          },
        },
        {
          count: 1,
          ingredient: {
            type: "forge:nbt",
            item: "immersiveengineering:shader",
            nbt: '{shader_name:"immersiveengineering:transpride"}',
          },
        },
        {
          count: 1,
          ingredient: {
            type: "forge:nbt",
            item: "mythicbotany:andwari_ring",
            nbt: "{Damage:0}",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "mythicbotany:mjoellnir",
          },
        },
      ],
      result: {
        item: "botania:creative_pool",
        count: 1,
      },
    })
    .id("mana_pool");
  event
    .custom({
      type: "reach_for_the_stars:ritual_site",
      ingredients: [
        {
          count: 64,
          ingredient: {
            item: "ars_nouveau:blank_parchment",
          },
        },
        {
          count: 12,
          ingredient: {
            item: "reach_for_the_stars:planet_core_conglomerate",
          },
        },
        {
          count: 4,
          ingredient: {
            item: "ars_nouveau:glyph_explosion",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:archmage_spell_book",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:glyph_blink",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:glyph_linger",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:glyph_split",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:glyph_summon_decoy",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:wololo",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "irons_spellbooks:chained_book",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "irons_spellbooks:dragonskin_spell_book",
          },
        },
        {
          count: 1,
          ingredient: {
            type: "forge:nbt",
            item: "irons_spellbooks:scroll",
            nbt: '{"irons_spellbooks:spell_container":{data:[{id:"irons_spellbooks:pocket_dimension",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}}',
          },
        },
        {
          count: 1,
          ingredient: {
            item: "projectexpansion:infinite_fuel",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "bloodmagic:dungeon_metal_destructive",
          },
        },
      ],
      result: {
        item: "ars_nouveau:creative_spell_book",
        count: 1,
      },
    })
    .id("creative_book");
    event
    .custom({
      type: "reach_for_the_stars:ritual_site",
      ingredients: [
        {
          count: 64,
          ingredient: {
            item: "ars_nouveau:source_berry_pie",
          },
        },
        {
          count: 4,
          ingredient: {
            item: "reach_for_the_stars:planet_core_conglomerate",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:drygmy_charm",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:starbuncle_charm",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:whirlisprig_charm",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "ars_nouveau:wixie_charm",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "bloodmagic:bleedingedge",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "mythicbotany:gjallar_horn_full",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "resource_capsules:stellar_odyssey_music_disc",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "resource_capsules:tier_3_large_catalyst",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "twilightforest:charm_of_keeping_3",
          },
        },
        {
          count: 1,
          ingredient: {
            item: "twilightforest:uncrafting_table",
          },
        },
      ],
      result: {
        item: "ars_nouveau:creative_source_jar",
        count: 1,
      },
    })
    .id("mana_jar");
});
