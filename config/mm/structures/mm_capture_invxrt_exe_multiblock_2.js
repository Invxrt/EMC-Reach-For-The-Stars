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
        '  BBBBBBBBB   ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        '  BBBBBBBBB   ',
        'A             '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' BDDDDDDDDDB  ',
        ' D         D  ',
        ' D         D  ',
        ' D         D  ',
        ' D         D  ',
        ' D      E  D  ',
        ' D     EEE D  ',
        ' D      E  D  ',
        ' D         D  ',
        ' BDDDDDDDDDB  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' BDDDDDDDDDB  ',
        ' D         D  ',
        ' D         D  ',
        ' D         D  ',
        ' D     EEE D  ',
        ' D    EEEEED  ',
        ' D    EEEEED  ',
        ' D    EEEEED  ',
        ' D     EEE D  ',
        ' BDDDDDDDDDB  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' BDDDDDDDDDB  ',
        ' D         D  ',
        ' D         D  ',
        ' D         D  ',
        ' D     EEE D  ',
        ' D    EEEEED  ',
        ' D    EEFEED  ',
        ' D    EEEEED  ',
        ' D     EEE D  ',
        ' BDDDDDDDDDB  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' BDDDDDDDDDB  ',
        ' D         D  ',
        ' D         D  ',
        ' D         D  ',
        ' D     EEE D  ',
        ' D      EEED  ',
        ' D    EEFEED  ',
        ' D    EEEEED  ',
        ' D     EEE D  ',
        ' BDDDDDDDDDB  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' BDDDDDDDDDB  ',
        ' D         D  ',
        ' D         D  ',
        ' D         D  ',
        ' D         D  ',
        ' D         D  ',
        ' D      FE D  ',
        ' D      E  D  ',
        ' D         D  ',
        ' BDDDDDDDDDB  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' BDDDDDDDDDB  ',
        ' D         D  ',
        ' D         D  ',
        ' D  G      D  ',
        ' D         D  ',
        ' D         D  ',
        ' D      F  D  ',
        ' D         D  ',
        ' D         D  ',
        ' BDDDDDDDDDB  ',
        '              '
      ] )
      a.layer([
        '              ',
        '              ',
        '              ',
        ' BDDDDDDDDDB  ',
        ' D         D  ',
        ' D HHHHHHH D  ',
        ' D HJKLLHH D  ',
        ' D HHHHHHH D  ',
        ' D     HHH D  ',
        ' D     HIH D  ',
        ' D     HHH D  ',
        ' D         D  ',
        ' BDDDDDDDDDB  ',
        '              '
      ] )
      a.layer([
        '   NOOOOON    ',
        '   NPPQPPN    ',
        '   NOOOOON    ',
        ' BDDDDDDDDDB  ',
        ' D         D  ',
        ' D MMMMMMM D  ',
        ' D MHMLHMM D  ',
        ' D MMMMMMM D  ',
        ' D     MMM D  ',
        ' D     MII D  ',
        ' D     MMM D  ',
        ' D         D  ',
        ' BDDDDDDDDDB  ',
        '              '
      ] )
      a.layer([
        '   OAAVAAO    ',
        '   RSSSSTU    ',
        '   OAAAAAO    ',
        ' BDDDDDDDDDB  ',
        ' D         D  ',
        ' D MMMMMMM D  ',
        ' D MMMHMMM D  ',
        ' D MMMMMMM D  ',
        ' D     IMM D  ',
        ' D     MMI D  ',
        ' D     IMM D  ',
        ' D         D  ',
        ' BDDDDDDDDDB  ',
        '              '
      ] )
      a.layer([
        '   OAAAAAO   A',
        '   P   STX    ',
        '   OAAAAAO    ',
        '  BBBBBBBBB   ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' BDDDDDDDDDB  ',
        ' WBBBBBBBBB   ',
        '              '
      ] )
              .key('A', {
          block: 'immersiveengineering:sheetmetal_lead',
        })
        .key('B', {
          block: 'ae2:spatial_pylon',
        })
        .key('D', {
          block: 'tconstruct:clear_tinted_glass',
        })
        .key('E', {
          block: 'twilightforest:rainbow_oak_leaves',
        })
        .key('F', {
          block: 'twilightforest:twilight_oak_log',
        })
        .key('G', {
          block: 'create:framed_glass_trapdoor',
        })
        .key('H', {
          block: 'botania:golden_grass',
        })
        .key('I', {
          block: 'twilightforest:root',
        })
        .key('J', {
          block: 'minecraft:orange_concrete',
        })
        .key('K', {
          block: 'minecraft:cobblestone',
        })
        .key('L', {
          block: 'minecraft:light_blue_concrete',
        })
        .key('M', {
          block: 'minecraft:dirt',
        })
        .key('N', {
          block: 'ad_astra:moon_stone_brick_stairs',
        })
        .key('O', {
          block: 'ad_astra:moon_pillar',
        })
        .key('P', {
          block: 'ad_astra:polished_moon_stone',
        })
        .key('Q', {
          block: 'reach_for_the_stars:energy_input_hatch',
        })
        .key('R', {
          block: 'reach_for_the_stars:item_output_hatch',
        })
        .key('S', {
          block: 'create:fluid_pipe',
        })
        .key('T', {
          block: 'create:glass_fluid_pipe',
        })
        .key('U', {
          block: 'reach_for_the_stars:fluid_input_hatch',
        })
        .key('V', {
          block: 'reach_for_the_stars:skyblock_builder_controller',
        })
        .key('W', {
          block: 'ae2:cable_bus',
        })
        .key('X', {
          block: 'reach_for_the_stars:item_input_hatch',
        })
    });
});
