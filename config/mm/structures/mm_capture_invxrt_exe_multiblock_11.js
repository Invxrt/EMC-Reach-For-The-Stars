priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:steel_drill_structure')
    .controllerId('mm:steel_drill_controller')
    .name('Steel Drill')
    .layout((a) => {
      a.layer([
        'ABBBA',
        'BAAAB',
        'BAAAB',
        'BAAAB',
        'ABBBA'
      ] )
      a.layer([
        'BDDDB',
        'DAAAD',
        'DAAAD',
        'DAAAD',
        'BDDDB'
      ] )
      a.layer([
        'BDDDB',
        'DEEED',
        'DEEED',
        'DEEED',
        'BDDDB'
      ] )
      a.layer([
        'BDDDB',
        'D E D',
        'DEEED',
        'D E D',
        'BDDDB'
      ] )
      a.layer([
        'BDDDB',
        'D   D',
        'D E D',
        'D   D',
        'BDDDB'
      ] )
      a.layer([
        'AAHAA',
        'AGGGA',
        'IGGGF',
        'AGGGA',
        'AACAA'
      ] )
              .key('A', {
          block: 'immersiveengineering:sheetmetal_steel',
        })
        .key('B', {
          block: 'immersiveengineering:steel_scaffolding_standard',
        })
        .key('D', {
          block: 'minecraft:glass',
        })
        .key('E', {
          block: 'thermal:steel_block',
        })
        .key('F', {
          block: 'mm:item_port_output',
        })
        .key('G', {
          block: 'ad_astra:moon_sand',
        })
        .key('H', {
          block: 'mm:energy_port_input',
        })
        .key('I', {
          block: 'mm:fluid_port_input',
        })
    });
});
