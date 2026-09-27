priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:mm_capture_invxrt_exe_multiblock_21_structure')
    .controllerId('')
    .name('Captured Structure')
    .layout((a) => {
      a.layer([
        'ABBBABBBA',
        'BAAAAAAAB',
        'BAAAAAAAB',
        'BAAAAAAAB',
        'AAAAAAAAA',
        'BAAAAAAAB',
        'BAAAAAAAB',
        'BAAAAAAAB',
        'ABBBABBBA'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D  AAA  D',
        'D AAAAA D',
        'D AAAAA D',
        'D AAAAA D',
        'D  AAA  D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D       D',
        'D  BAB  D',
        'D  AAA  D',
        'D  BAB  D',
        'D       D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D       D',
        'D  BAB  D',
        'D  AAA  D',
        'D  BAB  D',
        'D       D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'ADDDDDDDA',
        'D       D',
        'D       D',
        'D   A   D',
        'D  AAA  D',
        'D   A   D',
        'D       D',
        'D       D',
        'ADDDDDDDA'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D       D',
        'D       D',
        'D   B   D',
        'D       D',
        'D       D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D       D',
        'D       D',
        'D       D',
        'D       D',
        'D       D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D       D',
        'D       D',
        'D       D',
        'D       D',
        'D       D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'ABBBIBBBA',
        'BFFFFFFFB',
        'BFFFFFFFB',
        'BFFFFFFFB',
        'GFFFFFFFH',
        'BFFFFFFFB',
        'BFFFFFFFB',
        'BFFFFFFFB',
        'ABBBEBBBA'
      ] )
              .key('A', {
          block: 'ad_astra:ostrum_block',
        })
        .key('B', {
          block: 'ad_astra:glowing_ostrum_pillar',
        })
        .key('D', {
          block: 'ae2:quartz_vibrant_glass',
        })
        .key('E', {
          block: 'reach_for_the_stars:energy_input_hatch',
        })
        .key('F', {
          block: 'ad_astra:mercury_stone',
        })
        .key('G', {
          block: 'reach_for_the_stars:item_output_hatch',
        })
        .key('H', {
          block: 'reach_for_the_stars:fluid_input_hatch',
        })
        .key('I', {
          block: 'reach_for_the_stars:ostrum_drill_controller',
        })
    });
});
