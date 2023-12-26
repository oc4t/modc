var modCheckbox = new Array(20);
// 1202

// performance
function allPerfMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="alternate-current-mc1.20-1.7.0.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="Debugify-1.20.2+1.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="enhancedblockentities-0.9.1+1.20.2.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="dynamic-fps-3.3.1+minecraft-1.20.0.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="entityculling-fabric-1.6.3-mc1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="entity-view-distance-1.1.3+1.20.2.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="exordium-fabric-1.2.1-mc1.20.2.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="ferritecore-6.0.1-fabric.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="ImmediatelyFast-Fabric-1.2.8+1.20.4.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="indium-1.0.28+mc1.20.4.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="krypton-0.2.4.jar"]');
    modCheckbox[12] = document.querySelector('input[data-mod="Ksyxis-1.2.2.jar"]');
    modCheckbox[13] = document.querySelector('input[data-mod="lazydfu-0.1.3.jar"]');
    modCheckbox[14] = document.querySelector('input[data-mod="lithium-fabric-mc1.20.2-0.12.0.jar"]');
    modCheckbox[15] = document.querySelector('input[data-mod="methane-3.2.0.jar"]');
    modCheckbox[16] = document.querySelector('input[data-mod="noxesium-1.1.1.jar"]');
    modCheckbox[17] = document.querySelector('input[data-mod="sodium-fabric-mc1.20.2-0.5.5.jar"]');
    modCheckbox[18] = document.querySelector('input[data-mod="sodium-extra-0.5.3+mc1.20.2-build.114.jar"]');
    for (let i = 0; i < 19; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectPerfMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="alternate-current-mc1.20-1.7.0.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="Debugify-1.20.2+1.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="dynamic-fps-3.3.1+minecraft-1.20.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="enhancedblockentities-0.9.1+1.20.2.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="entityculling-fabric-1.6.3-mc1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="entity-view-distance-1.1.3+1.20.2.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="exordium-fabric-1.2.1-mc1.20.2.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="ferritecore-6.0.1-fabric.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="ImmediatelyFast-Fabric-1.2.8+1.20.4.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="indium-1.0.28+mc1.20.4.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="krypton-0.2.4.jar"]');
    modCheckbox[12] = document.querySelector('input[data-mod="Ksyxis-1.2.2.jar"]');
    modCheckbox[13] = document.querySelector('input[data-mod="lazydfu-0.1.3.jar"]');
    modCheckbox[14] = document.querySelector('input[data-mod="lithium-fabric-mc1.20.2-0.12.0.jar"]');
    modCheckbox[15] = document.querySelector('input[data-mod="methane-3.2.0.jar"]');
    modCheckbox[16] = document.querySelector('input[data-mod="noxesium-1.1.1.jar"]');
    modCheckbox[17] = document.querySelector('input[data-mod="sodium-fabric-mc1.20.2-0.5.5.jar"]');
    modCheckbox[18] = document.querySelector('input[data-mod="sodium-extra-0.5.3+mc1.20.2-build.114.jar"]');
    for (let i = 0; i < 19; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}
function optimalPerfMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="Debugify-1.20.2+1.0.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="dynamic-fps-3.3.1+minecraft-1.20.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="enhancedblockentities-0.9.1+1.20.2.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="entityculling-fabric-1.6.3-mc1.20.2.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="entity-view-distance-1.1.3+1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="ferritecore-6.0.1-fabric.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="ImmediatelyFast-Fabric-1.2.8+1.20.4.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="krypton-0.2.4.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="Ksyxis-1.2.2.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="lithium-fabric-mc1.20.2-0.12.0.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="noxesium-1.1.1.jar"]');
    modCheckbox[12] = document.querySelector('input[data-mod="sodium-fabric-mc1.20.2-0.5.5.jar"]');
    modCheckbox[13] = document.querySelector('input[data-mod="sodium-extra-0.5.3+mc1.20.2-build.114.jar"]');
    for (let i = 0; i < 14; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function recommendedPerfMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="dynamic-fps-3.3.1+minecraft-1.20.0.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="entityculling-fabric-1.6.3-mc1.20.2.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="ferritecore-6.0.1-fabric.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="krypton-0.2.4.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="lithium-fabric-mc1.20.2-0.12.0.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="sodium-fabric-mc1.20.2-0.5.5.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="sodium-extra-0.5.3+mc1.20.2-build.114.jar"]');
    for (let i = 0; i < 8; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function minPerfMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="dynamic-fps-3.3.1+minecraft-1.20.0.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="ferritecore-6.0.1-fabric.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="lithium-fabric-mc1.20.2-0.12.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="sodium-fabric-mc1.20.2-0.5.5.jar"]');
    for (let i = 0; i < 4; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}

// QOL
function allQOLMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="appleskin-fabric-mc1.20.2-2.5.1.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="BetterF3-8.0.2-Fabric-1.20.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="ClearDespawn-fabric-1.20.2-1.1.15.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="Essential-fabric_1-20-2.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="forcecloseloadingscreen-2.2.0.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="reeses_sodium_options-1.7.0+mc1.20.2-build.97.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="shulkerboxtooltip-fabric-4.0.7+1.20.2.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="simple-armor-hud-1.20.2-1.4.0.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="slyde-1.7.2.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="yosbr-0.1.2.jar"]');
    for (let i = 0; i < 10; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectQOLMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="appleskin-fabric-mc1.20.2-2.5.1.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="BetterF3-8.0.2-Fabric-1.20.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="ClearDespawn-fabric-1.20.2-1.1.15.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="Essential-fabric_1-20-2.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="forcecloseloadingscreen-2.2.0.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="reeses_sodium_options-1.7.0+mc1.20.2-build.97.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="shulkerboxtooltip-fabric-4.0.7+1.20.2.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="simple-armor-hud-1.20.2-1.4.0.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="slyde-1.7.2.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="yosbr-0.1.2.jar"]');
    for (let i = 0; i < 10; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}
function recommendedQOLMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="BetterF3-8.0.1-Fabric-1.20.2.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="Essential-fabric_1-20-2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="reeses_sodium_options-1.7.0+mc1.20.2-build.97.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="simple-armor-hud-1.20.2-1.4.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="yosbr-0.1.2.jar"]');
    for (let i = 0; i < 5; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}

// Utility
function allUtilityMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="fabric-carpet-1.20.2-1.4.121+v231011.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="itemswapper-fabric-0.5.4-mc1.20.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="litematica-fabric-1.20.2-0.16.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="minihud-fabric-1.20.2-0.28.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="modmenu-8.0.1.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="replaymod-1.20.2-2.6.14.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="voicechat-fabric-1.20.2-2.4.32.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="tweakeroo-fabric-1.20.2-0.18.0.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="Xaeros_Minimap_23.9.3_Fabric_1.20.2.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="XaerosWorldMap_1.37.2_Fabric_1.20.2.jar"]');
    for (let i = 0; i < 10; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectUtilityMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="fabric-carpet-1.20.2-1.4.121+v231011.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="itemswapper-fabric-0.5.4-mc1.20.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="litematica-fabric-1.20.2-0.16.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="minihud-fabric-1.20.2-0.28.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="modmenu-8.0.1.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="replaymod-1.20.2-2.6.14.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="voicechat-fabric-1.20.2-2.4.32.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="tweakeroo-fabric-1.20.2-0.18.0.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="Xaeros_Minimap_23.9.3_Fabric_1.20.2.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="XaerosWorldMap_1.37.2_Fabric_1.20.2.jar"]');
    for (let i = 0; i < 10; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}
function recommendedUtilityMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="fabric-carpet-1.20.2-1.4.121+v231011.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="litematica-fabric-1.20.2-0.16.0.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="minihud-fabric-1.20.2-0.28.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="modmenu-8.0.1.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="replaymod-1.20.2-2.6.14.jar"]');
    for (let i = 0; i < 5; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}

// Aesthetic
function allAestheticMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="bobby-5.0.2.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="capes-1.5.3+1.20.2-fabric.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="chunksfadein-v1.0.0-1.20.2.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="continuity-3.0.0-beta.4+1.20.2.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="DistantHorizons-2.0.1-a-1.20.2.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="DynamicSoundFilters-1.4.0+1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="eating-animation-1.20+1.9.5.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="entity_model_features_fabric_1.20.2-1.2.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="entity_texture_features_fabric_1.20.2-5.0.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="fallingleaves-1.15.4+1.20.1.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="iris-mc1.20.2-1.6.14.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="lambdynamiclights-2.3.3+1.20.2.jar"]');
    modCheckbox[12] = document.querySelector('input[data-mod="Mambience-5.3.1+1.20.2.jar"]');
    modCheckbox[13] = document.querySelector('input[data-mod="notenoughanimations-fabric-1.6.4-mc1.20.2.jar"]');
    modCheckbox[14] = document.querySelector('input[data-mod="physics-mod-3.0.11-mc-1.20.2-fabric.jar"]');
    modCheckbox[15] = document.querySelector('input[data-mod="PresenceFootsteps-1.10.1.jar"]');
    modCheckbox[16] = document.querySelector('input[data-mod="spawnanimations-v1.9.2-mc1.17x-1.20x-mod.jar"]');
    modCheckbox[17] = document.querySelector('input[data-mod="visuality-0.7.1+1.20.jar"]');
    modCheckbox[18] = document.querySelector('input[data-mod="waveycapes-fabric-1.4.2-mc1.20.2.jar"]');
    modCheckbox[19] = document.querySelector('input[data-mod="weaponmaster-client-only-fabric-1.20.2-3.0.5.jar"]');
    for (let i = 0; i < 20; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectAestheticMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="bobby-5.0.2.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="capes-1.5.3+1.20.2-fabric.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="chunksfadein-v1.0.0-1.20.2.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="continuity-3.0.0-beta.4+1.20.2.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="DistantHorizons-2.0.1-a-1.20.2.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="DynamicSoundFilters-1.4.0+1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="eating-animation-1.20+1.9.5.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="entity_model_features_fabric_1.20.2-1.2.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="entity_texture_features_fabric_1.20.2-5.0.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="fallingleaves-1.15.4+1.20.1.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="iris-mc1.20.2-1.6.14.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="lambdynamiclights-2.3.3+1.20.2.jar"]');
    modCheckbox[12] = document.querySelector('input[data-mod="Mambience-5.3.1+1.20.2.jar"]');
    modCheckbox[13] = document.querySelector('input[data-mod="notenoughanimations-fabric-1.6.4-mc1.20.2.jar"]');
    modCheckbox[14] = document.querySelector('input[data-mod="physics-mod-3.0.11-mc-1.20.2-fabric.jar"]');
    modCheckbox[15] = document.querySelector('input[data-mod="PresenceFootsteps-1.10.1.jar"]');
    modCheckbox[16] = document.querySelector('input[data-mod="spawnanimations-v1.9.2-mc1.17x-1.20x-mod.jar"]');
    modCheckbox[17] = document.querySelector('input[data-mod="visuality-0.7.1+1.20.jar"]');
    modCheckbox[18] = document.querySelector('input[data-mod="waveycapes-fabric-1.4.2-mc1.20.2.jar"]');
    modCheckbox[19] = document.querySelector('input[data-mod="weaponmaster-client-only-fabric-1.20.2-3.0.5.jar"]');
    for (let i = 0; i < 20; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}
function recommendedAestheticMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="bobby-5.0.2.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="capes-1.5.3+1.20.2-fabric.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="chunksfadein-v1.0.0-1.20.2.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="continuity-3.0.0-beta.4+1.20.2.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="DynamicSoundFilters-1.4.0+1.20.2.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="entity_model_features_fabric_1.20.2-1.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="entity_texture_features_fabric_1.20.2-5.0.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="iris-mc1.20.2-1.6.14.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="lambdynamiclights-2.3.3+1.20.2.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="physics-mod-3.0.11-mc-1.20.2-fabric.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="spawnanimations-v1.9.2-mc1.17x-1.20x-mod.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="visuality-0.7.1+1.20.jar"]');
    modCheckbox[12] = document.querySelector('input[data-mod="weaponmaster-client-only-fabric-1.20.2-3.0.5.jar"]');
    for (let i = 0; i < 13; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}

// Wynncraft
function allWynncraftMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="wynntils-0.0.4-beta.105-fabric+MC-1.20.2.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="VoicesOfWynn-MC1.20.2-v1.6.jar"]');
    for (let i = 0; i < 2; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectWynncraftMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="wynntils-0.0.4-beta.105-fabric+MC-1.20.2.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="VoicesOfWynn-MC1.20.2-v1.6.jar"]');
    for (let i = 0; i < 2; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}

// Library
function allLibraryMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="cloth-config-12.0.109-fabric.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="fabric-api-0.90.7+1.20.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="fabric-language-kotlin-1.10.14+kotlin.1.9.20.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="libjf-3.13.1.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="malilib-fabric-1.20.2-0.17.0.jar"]');
    for (let i = 0; i < 5; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectLibraryMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="cloth-config-12.0.109-fabric.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="fabric-api-0.90.7+1.20.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="fabric-language-kotlin-1.10.14+kotlin.1.9.20.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="libjf-3.13.1.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="malilib-fabric-1.20.2-0.17.0.jar"]');
    for (let i = 0; i < 5; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}

