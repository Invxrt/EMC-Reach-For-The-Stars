priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:mm_capture_invxrt_exe_multiblock_24_structure')
    .controllerId('')
    .name('Captured Structure')
    .layout((a) => {
      a.layer([
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        'A                '
      ] )
      a.layer([
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '    B       B    ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '                 ',
        '    B       B    ',
        '                 ',
        '                 ',
        '                 ',
        '                 '
      ] )
      a.layer([
        '                 ',
        '                 ',
        '      D   D      ',
        '                 ',
        '    E       E    ',
        '                 ',
        '  D           D  ',
        '                 ',
        '                 ',
        '                 ',
        '  D           D  ',
        '                 ',
        '    E       E    ',
        '                 ',
        '      D   D      ',
        '                 ',
        '                 '
      ] )
      a.layer([
        '                 ',
        '                 ',
        '      E   E      ',
        '                 ',
        '    E       E    ',
        '                 ',
        '  E           E  ',
        '                 ',
        '                 ',
        '                 ',
        '  E           E  ',
        '                 ',
        '    E       E    ',
        '                 ',
        '      E   E      ',
        '                 ',
        '                 '
      ] )
      a.layer([
        '                 ',
        '                 ',
        '      E   E      ',
        '                 ',
        '    E       E    ',
        '                 ',
        '  E           E  ',
        '                 ',
        '        F        ',
        '                 ',
        '  E           E  ',
        '                 ',
        '    E       E    ',
        '                 ',
        '      E   E      ',
        '                 ',
        '                 '
      ] )
      a.layer([
        '                 ',
        '                 ',
        '      EOOOE      ',
        '     GGHHHGG     ',
        '    EHHIHIHHE    ',
        '   GHIHHHHHIHG   ',
        '  EGHHHJJJHHHGE  ',
        '  GHIHJKNKJHIHG  ',
        '  GHHHJLKMJHHHG  ',
        '  GHIHJKKKJHIHG  ',
        '  EGHHHJJJHHHGE  ',
        '   GHIHHHHHIHG   ',
        '    EHHIHIHHE    ',
        '     GGHHHGG     ',
        '      EGGGE      ',
        '                 ',
        '                 '
      ] )
      a.layer([
        ' PPP         PPP ',
        'PbbbP eOOOe PcccP',
        'PbbbPdEUUUEdPcccP',
        'PbbbPUWXXXWUPcccP',
        ' PPPEX     XEPPP ',
        '  YUX       XUY  ',
        '  EW         WE  ',
        ' ZUX         XUZ ',
        ' aUX         XUa ',
        ' ZUX         XUZ ',
        '  EW         WE  ',
        '  YUX       XUY  ',
        ' PPPEX     XEPPP ',
        'PQQQPUWX XWUPSSSP',
        'PQQQPTEUVUETPSSSP',
        'PQQQP R   R PSSSP',
        ' PPP         PPP '
      ] )
      a.layer([
        ' fffgggOOOgggfffA',
        'fhhhfiiGGGiifhhhf',
        'fhhhfiEUUUEifhhhf',
        'fhhhfUXXXXXUfhhhf',
        'gfffEX     XEfffg',
        'giiUX       XUiig',
        'giEX         XEig',
        'giUX         XUig',
        'giUX         XUig',
        'giUX         XUig',
        'giEX         XEig',
        'giiUX       XUiig',
        'gfffEX     XEfffg',
        'fhhhfUXX XXUfhhhf',
        'fhhhfiEUVUEifhhhf',
        'fhhhfiig giifhhhf',
        ' fffggg   gggfff '
      ] )
              .key('A', {
          block: 'minecraft:barrier',
        })
        .key('B', {
          block: 'ars_nouveau:scryers_oculus',
        })
        .key('D', {
          block: 'ars_nouveau:magelight_torch',
        })
        .key('E', {
          block: 'chisel:fantasy2/pillar',
        })
        .key('F', {
          block: 'mysticalagriculture:tinkering_table',
        })
        .key('G', {
          block: 'chipped:ancient_gold_block',
        })
        .key('H', {
          block: 'ars_nouveau:magebloom_block',
        })
        .key('I', {
          block: 'projectexpansion:purple_fuel_block',
        })
        .key('J', {
          block: 'chipped:spiraled_crying_obsidian',
        })
        .key('K', {
          block: 'projecte:dark_matter_block',
        })
        .key('L', {
          block: 'reach_for_the_stars:item_output_hatch',
        })
        .key('M', {
          block: 'reach_for_the_stars:item_input_hatch',
        })
        .key('N', {
          block: 'reach_for_the_stars:steel_drill_controller',
        })
        .key('O', {
          block: 'rechiseled:gold_block_tiles_stairs_connecting',
        })
        .key('P', {
          block: 'bloodmagic:blankrune',
        })
        .key('Q', {
          block: 'justdirethings:refined_t3_fluid_block',
        })
        .key('R', {
          block: 'botania:rosa_arcana',
        })
        .key('S', {
          block: 'justdirethings:portal_fluid_block',
        })
        .key('T', {
          block: 'botania:agricarnation',
        })
        .key('U', {
          block: 'chipped:etched_crying_obsidian_bricks',
        })
        .key('V', {
          block: 'bloodmagic:ethereal_mimic',
        })
        .key('W', {
          block: 'experienceobelisk:cognitive_crystal_block',
        })
        .key('X', {
          block: 'chisel:bookshelf_warped/rainbow',
        })
        .key('Y', {
          block: 'botania:manastar',
        })
        .key('Z', {
          block: 'botania:orechid_ignem',
        })
        .key('a', {
          block: 'botania:dandelifeon',
        })
        .key('b', {
          block: 'bloodmagic:life_essence_block',
        })
        .key('c', {
          block: 'justdirethings:refined_t4_fluid_block',
        })
        .key('d', {
          block: 'botania:daffomill',
        })
        .key('e', {
          block: 'botania:spectrolus',
        })
        .key('f', {
          block: 'rechiseled:netherite_block_small_tiles_connecting',
        })
        .key('g', {
          block: 'minecraft:crimson_trapdoor',
        })
        .key('h', {
          block: 'rechiseled:netherite_block_meteoric',
        })
        .key('i', {
          block: 'minecraft:grass_block',
        })
    });
});
