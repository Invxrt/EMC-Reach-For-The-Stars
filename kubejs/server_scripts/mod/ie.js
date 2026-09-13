ServerEvents.recipes((event) => {
    event.remove({ output: 'ad_astra:rocket_fin' });
    event.remove({ output: 'ad_astra:rocket_nose_cone' });

    event.recipes.immersiveengineeringMetalPress("ad_astra:rocket_fin", "#forge:storage_blocks/steel", "reach_for_the_stars:rocket_fin_mold");
    event.recipes.immersiveengineeringMetalPress("ad_astra:rocket_nose_cone", "#forge:storage_blocks/steel", "reach_for_the_stars:rocket_nose_mold");

})