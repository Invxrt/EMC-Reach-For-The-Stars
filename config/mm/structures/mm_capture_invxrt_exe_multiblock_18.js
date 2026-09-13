priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:mm_capture_invxrt_exe_multiblock_18_structure')
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
        'D  EBE  D',
        'D  BAB  D',
        'D  EBE  D',
        'D       D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'ADDDDDDDA',
        'D       D',
        'D       D',
        'D  EEE  D',
        'D  EAE  D',
        'D  EBE  D',
        'D       D',
        'D       D',
        'ADDDDDDDA'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D       D',
        'D   E   D',
        'D  EAE  D',
        'D   E   D',
        'D       D',
        'D       D',
        'BDDDDDDDB'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       D',
        'D       D',
        'D       D',
        'D   E   D',
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
        'ABBBJBBBA',
        'BGGGGGGGB',
        'BGGGGGGGB',
        'BGGGGGGGB',
        'HGGGGGGGI',
        'BGGGGGGGB',
        'BGGGGGGGB',
        'BGGGGGGGB',
        'ABBBFBBBA'
      ] )
              .key('A', {
          block: 'ad_astra:calorite_block',
        })
        .key('B', {
          block: 'ad_astra:glowing_calorite_pillar',
        })
        .key('D', {
          block: 'mekanism:structural_glass',
        })
        .key('E', {
          block: 'powah:nitro_crystal_block',
        })
        .key('F', {
          block: 'minecraft:light_blue_concrete',
        })
        .key('G', {
          block: 'ad_astra:venus_sand',
        })
        .key('H', {
          block: 'minecraft:yellow_concrete',
        })
        .key('I', {
          block: 'minecraft:purple_concrete',
        })
        .key('J', {
          block: 'minecraft:lime_concrete',
        })
    });
});
