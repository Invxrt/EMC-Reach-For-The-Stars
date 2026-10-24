priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:mm_capture_invxrt_exe_multiblock_22_structure')
    .controllerId('')
    .name('Captured Structure')
    .layout((a) => {
      a.layer([
        'A'
      ] )
              .key('A', {
          block: 'minecraft:barrier',
        })
    });
});
