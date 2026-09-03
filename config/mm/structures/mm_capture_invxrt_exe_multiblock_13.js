priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:t3_rocket_assembly_structure')
    .controllerId('mm:t3_rocket_assembly_controller')
    .name('T3 Rocket Assembly')
    .layout((a) => {
      a.layer([
        'ABBBBBA',
        'BJJJJJB',
        'BIIFIIB',
        'BGFHFGB',
        'BEEFEEB',
        'BDDDDDB',
        'ABBBBBA'
      ] )
      a.layer([
        'BLFLFLB',
        'L     L',
        'F     F',
        'L  M  L',
        'F     F',
        'L     L',
        'BKKKKKB'
      ] )
      a.layer([
        'BFLFLFB',
        'F     F',
        'L     L',
        'F  N  F',
        'L     L',
        'F     F',
        'BKKKKKB'
      ] )
      a.layer([
        'BLFHFLB',
        'L  T  L',
        'F  S  F',
        'HOP QRH',
        'F     F',
        'L     L',
        'BKKKKKB'
      ] )
      a.layer([
        'BFLFLFB',
        'F     F',
        'L     L',
        'F  U  F',
        'L     L',
        'F     F',
        'BKKKKKB'
      ] )
      a.layer([
        'BLFLFLB',
        'L     L',
        'F     F',
        'L  V  L',
        'F     F',
        'L     L',
        'BKKKKKB'
      ] )
      a.layer([
        'ABBYBBA',
        'BJJJJJB',
        'BIIFIIB',
        'WGFHFGX',
        'BEEFEEB',
        'BDDDDDB',
        'ABBCBBA'
      ] )
              .key('A', {
          block: 'ad_astra:ostrum_block',
        })
        .key('B', {
          block: 'ad_astra:glowing_ostrum_pillar',
        })
        .key('D', {
          block: 'powah:niotic_crystal_block',
        })
        .key('E', {
          block: 'powah:spirited_crystal_block',
        })
        .key('F', {
          block: 'ae2:quartz_block',
        })
        .key('G', {
          block: 'powah:nitro_crystal_block',
        })
        .key('H', {
          block: 'ae2:smooth_sky_stone_block',
        })
        .key('I', {
          block: 'powah:blazing_crystal_block',
        })
        .key('J', {
          block: 'powah:energized_steel_block',
        })
        .key('K', {
          block: 'minecraft:glass',
        })
        .key('L', {
          block: 'ae2:fluix_block',
        })
        .key('M', {
          block: 'powah:energy_cable_nitro',
        })
        .key('N', {
          block: 'powah:energizing_rod_nitro',
        })
        .key('O', {
          block: 'powah:energy_cable_blazing',
        })
        .key('P', {
          block: 'powah:energizing_rod_blazing',
        })
        .key('Q', {
          block: 'powah:energizing_rod_spirited',
        })
        .key('R', {
          block: 'powah:energy_cable_spirited',
        })
        .key('S', {
          block: 'powah:energizing_rod_niotic',
        })
        .key('T', {
          block: 'powah:energy_cable_niotic',
        })
        .key('U', {
          block: 'powah:energizing_rod_hardened',
        })
        .key('V', {
          block: 'powah:energy_cable_hardened',
        })
        .key('W', {
          block: 'mm:desh_item_port_input',
        })
        .key('X', {
          block: 'mm:desh_item_port_output',
        })
        .key('Y', {
          block: 'mm:desh_energy_port_input',
        })
    });
});
