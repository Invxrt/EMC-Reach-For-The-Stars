priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:mm_capture_invxrt_exe_multiblock_20_structure')
    .controllerId('')
    .name('Captured Structure')
    .layout((a) => {
      a.layer([
        'ABBBABBBA',
        'BDDDDDDDB',
        'BEFEFEFEB',
        'BFEFEFEFB',
        'ADDDDDDDA',
        'BFEFEFEFB',
        'BEFEFEFEB',
        'BDDDDDDDB',
        'ABBBABBBA'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       G',
        'D       G',
        'D       G',
        'D       G',
        'D       G',
        'D       G',
        'D       G',
        'BDDDDDDDB'
      ] )
      a.layer([
        'BFEFEFEFB',
        'F       G',
        'E       G',
        'F       G',
        'E       G',
        'F       G',
        'E       G',
        'F       G',
        'BFEFEFEFB'
      ] )
      a.layer([
        'BEFEFEFEB',
        'E       G',
        'F       G',
        'E  HHH  G',
        'F  H H  G',
        'E  HHH  G',
        'F       G',
        'E       G',
        'BEFEFEFEB'
      ] )
      a.layer([
        'AIIIIIIIA',
        'I       G',
        'I       G',
        'I  H H  G',
        'I   J   G',
        'I  H H  G',
        'I       G',
        'I       G',
        'AIIIIIIIA'
      ] )
      a.layer([
        'BFEFEFEFB',
        'F       G',
        'E       G',
        'F  HHH  G',
        'E  H H  G',
        'F  HHH  G',
        'E       G',
        'F       G',
        'BFEFEFEFB'
      ] )
      a.layer([
        'BEFEFEFEB',
        'E       G',
        'F       G',
        'E       G',
        'F       G',
        'E       G',
        'F       G',
        'E       G',
        'BEFEFEFEB'
      ] )
      a.layer([
        'BDDDDDDDB',
        'D       G',
        'D       G',
        'D       G',
        'D       G',
        'D       G',
        'D       G',
        'D       G',
        'BDDDDDDDB'
      ] )
      a.layer([
        'ABBBNBBBA',
        'BDDDDDDDB',
        'BEFEFEFEB',
        'BFEFEFEFB',
        'LDDDDDDDM',
        'BFEFEFEFB',
        'BEFEFEFEB',
        'BDDDDDDDB',
        'ABBBKBBBA'
      ] )
              .key('A', {
          block: 'ad_astra:calorite_block',
        })
        .key('B', {
          block: 'ad_astra:glowing_calorite_pillar',
        })
        .key('D', {
          block: 'mekanism:block_osmium',
        })
        .key('E', {
          block: 'mekanism:block_refined_glowstone',
        })
        .key('F', {
          block: 'mekanism:block_refined_obsidian',
        })
        .key('G', {
          block: 'mekanism:structural_glass',
        })
        .key('H', {
          block: 'chisel:futura/controller',
        })
        .key('I', {
          block: 'chisel:futura/wavy',
        })
        .key('J', {
          block: 'chisel:futura/mysterious_cube',
        })
        .key('K', {
          block: 'reach_for_the_stars:item_output_hatch',
        })
        .key('L', {
          block: 'reach_for_the_stars:item_input_hatch',
        })
        .key('M', {
          block: 'reach_for_the_stars:t4_rocket_assembler_controller',
        })
        .key('N', {
          block: 'reach_for_the_stars:energy_input_hatch',
        })
    });
});
