ServerEvents.recipes((event) => {
    event.remove({ output: 'ad_astra:rocket_fin' });
    event.remove({ output: 'ad_astra:rocket_nose_cone' });

    event.recipes.immersiveengineeringMetalPress("ad_astra:rocket_fin", "#forge:storage_blocks/steel", "kubejs:rocket_fin_mold");
    event.recipes.immersiveengineeringMetalPress("ad_astra:rocket_nose_cone", "#forge:storage_blocks/steel", "kubejs:rocket_nose_mold");

    event.recipes.shaped("kubejs:blank_mold", ["SSS", "SAS", "SSS"], { S: "#forge:plates/steel", A: "#forge:storage_blocks/steel" });
    event.recipes.shaped("kubejs:rocket_fin_mold", [" S ", "SAS", "S S"], { S: "#forge:plates/steel", A: "kubejs:blank_mold" });
    event.recipes.shaped("kubejs:rocket_nose_mold", [" S ", "SAS", "SSS"], { S: "#forge:plates/steel", A: "kubejs:blank_mold" });
})