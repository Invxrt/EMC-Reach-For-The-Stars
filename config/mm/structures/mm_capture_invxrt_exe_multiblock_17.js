priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:mm_capture_invxrt_exe_multiblock_17_structure')
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
        'D  ABA  D',
        'D  BAB  D',
        'D  ABA  D',
        'D       D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D       D',
        'D  ABA  D',
        'D  BAB  D',
        'D  ABA  D',
        'D       D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'ADDDDDDDA',
        'D       D',
        'D       D',
        'D  ABA  D',
        'D  BAB  D',
        'D  ABA  D',
        'D       D',
        'D       D',
        'ADDDDDDDA'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D       D',
        'D   A   D',
        'D  AAA  D',
        'D   A   D',
        'D       D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D       D',
        'D       D',
        'D   A   D',
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
          block: 'ad_astra:calorite_block',
        })
        .key('B', {
          block: 'ad_astra:glowing_calorite_pillar',
        })
        .key('D', {
          block: 'ae2:quartz_vibrant_glass',
        })
        .key('E', {
          block: 'minecraft:light_blue_concrete',
        })
        .key('F', {
          block: 'ad_astra:mercury_stone',
        })
        .key('G', {
          block: 'minecraft:yellow_concrete',
        })
        .key('H', {
          block: 'minecraft:purple_concrete',
        })
        .key('I', {
          block: 'minecraft:lime_concrete',
        })
    });
});
