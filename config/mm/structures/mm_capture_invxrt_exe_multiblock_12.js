priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:desh_drill_structure')
    .controllerId('mm:desh_drill_controller')
    .name('Desh Drill')
    .layout((a) => {
      a.layer([
        'ABBBBBA',
        'BAAAAAB',
        'BAAAAAB',
        'BAAAAAB',
        'ABBBBBA'
      ] )
      a.layer([
        'BDDDDDB',
        'D AAA D',
        'D AAA D',
        'D AAA D',
        'BDDDDDB'
      ] )
      a.layer([
        'BDDDDDB',
        'D  A  D',
        'D AAA D',
        'D  A  D',
        'BDDDDDB'
      ] )
      a.layer([
        'BDDDDDB',
        'D     D',
        'D  A  D',
        'D     D',
        'BDDDDDB'
      ] )
      a.layer([
        'ABBEBBA',
        'BFFFFFB',
        'HFFFFFG',
        'BFFFFFB',
        'ABBCBBA'
      ] )
              .key('A', {
          block: 'ad_astra:desh_block',
        })
        .key('B', {
          block: 'ad_astra:glowing_desh_pillar',
        })
        .key('D', {
          block: 'minecraft:glass',
        })
        .key('E', {
          block: 'mm:desh_energy_port_input',
        })
        .key('F', {
          block: 'ad_astra:mars_sand',
        })
        .key('G', {
          block: 'mm:desh_item_port_output',
        })
        .key('H', {
          block: 'mm:desh_fluid_port_input',
        })
    });
});
