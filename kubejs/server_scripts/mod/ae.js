ServerEvents.recipes((event) => {
    event.remove({ output: 'ae2:entropy_manipulator' })
    event.shaped('ae2:entropy_manipulator', [' AB', ' CA', 'C  '], {
        A: 'immersiveengineering:wirecoil_copper',
        B: 'minecraft:redstone',
        C: 'immersiveengineering:stick_steel'
    })
})