priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:mm_capture_invxrt_exe_multiblock_2_structure')
    .controllerId('')
    .name('Captured Structure')
    .layout((a) => {
      a.layer([
        '              ',
        '              ',
        '              ',
        ' BDDDDDDDDDB  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' BDDDDDDDDDB  ',
        'A             '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' DEEEEEEEEED  ',
        ' E         E  ',
        ' E         E  ',
        ' E         E  ',
        ' E         E  ',
        ' E      F  E  ',
        ' E     FFF E  ',
        ' E      F  E  ',
        ' E         E  ',
        ' DEEEEEEEEED  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' DEEEEEEEEED  ',
        ' E         E  ',
        ' E         E  ',
        ' E         E  ',
        ' E     FFF E  ',
        ' E    FFFFFE  ',
        ' E    FFFFFE  ',
        ' E    FFFFFE  ',
        ' E     FFF E  ',
        ' DEEEEEEEEED  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' DEEEEEEEEED  ',
        ' E         E  ',
        ' E         E  ',
        ' E         E  ',
        ' E     FFF E  ',
        ' E    FFFFFE  ',
        ' E    FFGFFE  ',
        ' E    FFFFFE  ',
        ' E     FFF E  ',
        ' DEEEEEEEEED  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' DEEEEEEEEED  ',
        ' E         E  ',
        ' E         E  ',
        ' E         E  ',
        ' E     FFF E  ',
        ' E      FFFE  ',
        ' E    FFGFFE  ',
        ' E    FFFFFE  ',
        ' E     FFF E  ',
        ' DEEEEEEEEED  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' DEEEEEEEEED  ',
        ' E         E  ',
        ' E         E  ',
        ' E         E  ',
        ' E         E  ',
        ' E         E  ',
        ' E      GF E  ',
        ' E      F  E  ',
        ' E         E  ',
        ' DEEEEEEEEED  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' DEEEEEEEEED  ',
        ' E         E  ',
        ' E         E  ',
        ' E  H      E  ',
        ' E         E  ',
        ' E         E  ',
        ' E      G  E  ',
        ' E         E  ',
        ' E         E  ',
        ' DEEEEEEEEED  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' DEEEEEEEEED  ',
        ' E         E  ',
        ' E IIIIIII E  ',
        ' E IKLMMII E  ',
        ' E IIIIIII E  ',
        ' E     III E  ',
        ' E     IJI E  ',
        ' E     III E  ',
        ' E         E  ',
        ' DEEEEEEEEED  ',
        '              '
      ] )
      a.layer([
        '   OPPPPPO    ',
        '   OQQRQQO    ',
        '   OPPPPPO    ',
        ' DEEEEEEEEED  ',
        ' E         E  ',
        ' E NNNNNNN E  ',
        ' E NINMINN E  ',
        ' E NNNNNNN E  ',
        ' E     NNN E  ',
        ' E     NJJ E  ',
        ' E     NNN E  ',
        ' E         E  ',
        ' DEEEEEEEEED  ',
        '              '
      ] )
      a.layer([
        '   PAAWAAP    ',
        '   STTTTUV    ',
        '   PAAAAAP    ',
        ' DEEEEEEEEED  ',
        ' E         E  ',
        ' E NNNNNNN E  ',
        ' E NNNINNN E  ',
        ' E NNNNNNN E  ',
        ' E     JNN E  ',
        ' E     NNJ E  ',
        ' E     JNN E  ',
        ' E         E  ',
        ' DEEEEEEEEED  ',
        '              '
      ] )
      a.layer([
        '   PAAAAAP   A',
        '   Q   TUX    ',
        '   PAAAAAP    ',
        ' BDDDDDDDDDB  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' DEEEEEEEEED  ',
        ' BDDDDDDDDDB  ',
        '              '
      ] )
              .key('A', {
          block: 'immersiveengineering:sheetmetal_lead',
        })
        .key('B', {
          block: 'ae2:cable_bus',
        })
        .key('D', {
          block: 'ae2:spatial_pylon',
        })
        .key('E', {
          block: 'tconstruct:clear_tinted_glass',
        })
        .key('F', {
          block: 'twilightforest:rainbow_oak_leaves',
        })
        .key('G', {
          block: 'twilightforest:twilight_oak_log',
        })
        .key('H', {
          block: 'create:framed_glass_trapdoor',
        })
        .key('I', {
          block: 'botania:golden_grass',
        })
        .key('J', {
          block: 'twilightforest:root',
        })
        .key('K', {
          block: 'minecraft:lava',
        })
        .key('L', {
          block: 'minecraft:cobblestone',
        })
        .key('M', {
          block: 'minecraft:water',
        })
        .key('N', {
          block: 'minecraft:dirt',
        })
        .key('O', {
          block: 'ad_astra:moon_stone_brick_stairs',
        })
        .key('P', {
          block: 'ad_astra:moon_pillar',
        })
        .key('Q', {
          block: 'ad_astra:polished_moon_stone',
        })
        .key('R', {
          block: 'reach_for_the_stars:energy_input_hatch',
        })
        .key('S', {
          block: 'reach_for_the_stars:item_output_hatch',
        })
        .key('T', {
          block: 'create:fluid_pipe',
        })
        .key('U', {
          block: 'create:glass_fluid_pipe',
        })
        .key('V', {
          block: 'reach_for_the_stars:fluid_input_hatch',
        })
        .key('W', {
          block: 'reach_for_the_stars:skyblock_builder_controller',
        })
        .key('X', {
          block: 'reach_for_the_stars:item_input_hatch',
        })
    });
});
