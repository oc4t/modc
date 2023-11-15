var modCheckbox = new Array(16);
// 1202

// performance
function allPerfMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/alternate-current-mc1.20-1.7.0.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/Debugify-1.20.2+1.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/dynamic-fps-3.2.1+minecraft-1.20.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/entityculling-fabric-1.6.2-mc1.20.1.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/entity-view-distance-1.1.3+1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/exordium-fabric-1.2.1-mc1.20.2.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/ferritecore-6.0.1-fabric.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="mods/1.20.2/krypton-0.2.4.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="mods/1.20.2/Ksyxis-1.1.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="mods/1.20.2/lithium-fabric-mc1.20.2-0.12.0.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="mods/1.20.2/methane-3.0.0-BETA.jar"]');
    modCheckbox[12] = document.querySelector('input[data-mod="mods/1.20.2/noxesium-1.0.5.jar"]');
    modCheckbox[13] = document.querySelector('input[data-mod="mods/1.20.2/servercore-fabric-1.3.9+1.20.2.jar"]');
    modCheckbox[14] = document.querySelector('input[data-mod="mods/1.20.2/sodium-fabric-mc1.20.2-0.5.3.jar"]');
    modCheckbox[15] = document.querySelector('input[data-mod="mods/1.20.2/sodium-extra-0.5.3+mc1.20.2-build.114.jar"]');
    for (let i = 0; i < 16; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectPerfMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/alternate-current-mc1.20-1.7.0.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/Debugify-1.20.2+1.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/dynamic-fps-3.2.1+minecraft-1.20.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/entityculling-fabric-1.6.2-mc1.20.1.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/entity-view-distance-1.1.3+1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/exordium-fabric-1.2.1-mc1.20.2.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/ferritecore-6.0.1-fabric.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="mods/1.20.2/krypton-0.2.4.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="mods/1.20.2/Ksyxis-1.1.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="mods/1.20.2/lithium-fabric-mc1.20.2-0.12.0.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="mods/1.20.2/methane-3.0.0-BETA.jar"]');
    modCheckbox[12] = document.querySelector('input[data-mod="mods/1.20.2/noxesium-1.0.5.jar"]');
    modCheckbox[13] = document.querySelector('input[data-mod="mods/1.20.2/servercore-fabric-1.3.9+1.20.2.jar"]');
    modCheckbox[14] = document.querySelector('input[data-mod="mods/1.20.2/sodium-fabric-mc1.20.2-0.5.3.jar"]');
    modCheckbox[15] = document.querySelector('input[data-mod="mods/1.20.2/sodium-extra-0.5.3+mc1.20.2-build.114.jar"]');
    for (let i = 0; i < 16; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}
function optimalPerfMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/Debugify-1.20.2+1.0.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/dynamic-fps-3.2.1+minecraft-1.20.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/entityculling-fabric-1.6.2-mc1.20.1.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/entity-view-distance-1.1.3+1.20.2.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/ferritecore-6.0.1-fabric.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/krypton-0.2.4.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/Ksyxis-1.1.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="mods/1.20.2/lithium-fabric-mc1.20.2-0.12.0.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="mods/1.20.2/noxesium-1.0.5.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="mods/1.20.2/sodium-fabric-mc1.20.2-0.5.3.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="mods/1.20.2/sodium-extra-0.5.3+mc1.20.2-build.114.jar"]');
    for (let i = 0; i < 12; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function recommendedPerfMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/dynamic-fps-3.2.1+minecraft-1.20.0.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/entityculling-fabric-1.6.2-mc1.20.1.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/ferritecore-6.0.1-fabric.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/krypton-0.2.4.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/lithium-fabric-mc1.20.2-0.12.0.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/sodium-fabric-mc1.20.2-0.5.3.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/sodium-extra-0.5.3+mc1.20.2-build.114.jar"]');
    for (let i = 0; i < 8; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function minPerfMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/dynamic-fps-3.2.1+minecraft-1.20.0.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/ferritecore-6.0.1-fabric.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/lithium-fabric-mc1.20.2-0.12.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/sodium-fabric-mc1.20.2-0.5.3.jar"]');
    for (let i = 0; i < 4; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}

// QOL
function allQOLMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/BetterF3-8.0.1-Fabric-1.20.2.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/ClearDespawn-fabric-1.20.1-1.1.13.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/essential_1-2-3_fabric_1-20-2.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/forcecloseloadingscreen-2.2.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/reeses_sodium_options-1.7.0+mc1.20.2-build.97.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/shulkerboxtooltip-fabric-4.0.7+1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/simple-armor-hud-1.20.2-1.4.0.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/slyde-1.7.2.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="mods/1.20.2/yosbr-0.1.2.jar"]');
    for (let i = 0; i < 9; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectQOLMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/BetterF3-8.0.1-Fabric-1.20.2.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/ClearDespawn-fabric-1.20.1-1.1.13.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/essential_1-2-3_fabric_1-20-2.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/forcecloseloadingscreen-2.2.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/reeses_sodium_options-1.7.0+mc1.20.2-build.97.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/shulkerboxtooltip-fabric-4.0.7+1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/simple-armor-hud-1.20.2-1.4.0.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/slyde-1.7.2.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="mods/1.20.2/yosbr-0.1.2.jar"]');
    for (let i = 0; i < 9; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}
function recommendedQOLMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/BetterF3-8.0.1-Fabric-1.20.2.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/essential_1-2-3_fabric_1-20-2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/reeses_sodium_options-1.7.0+mc1.20.2-build.97.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/simple-armor-hud-1.20.2-1.4.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/yosbr-0.1.2.jar"]');
    for (let i = 0; i < 5; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}

// Utility
function allUtilityMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/fabric-carpet-1.20.2-1.4.121+v231011.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/itemswapper-fabric-0.5.4-mc1.20.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/litematica-fabric-1.20.2-0.16.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/minihud-fabric-1.20.2-0.28.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/modmenu-8.0.0.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/tweakeroo-fabric-1.20.2-0.18.0.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/Xaeros_Minimap_23.8.4_Fabric_1.20.2.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/XaerosWorldMap_1.36.0_Fabric_1.20.2.jar"]');
    for (let i = 0; i < 8; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectUtilityMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/fabric-carpet-1.20.2-1.4.121+v231011.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/itemswapper-fabric-0.5.4-mc1.20.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/litematica-fabric-1.20.2-0.16.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/minihud-fabric-1.20.2-0.28.0.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/modmenu-8.0.0.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/tweakeroo-fabric-1.20.2-0.18.0.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/Xaeros_Minimap_23.8.4_Fabric_1.20.2.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/XaerosWorldMap_1.36.0_Fabric_1.20.2.jar"]');
    for (let i = 0; i < 8; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}
function recommendedUtilityMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/fabric-carpet-1.20.2-1.4.121+v231011.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/litematica-fabric-1.20.2-0.16.0.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/minihud-fabric-1.20.2-0.28.0.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/modmenu-8.0.0.jar"]');
    for (let i = 0; i < 4; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}

// Aesthetic
function allAestheticMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/appleskin-fabric-mc1.20.2-2.5.1.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/bobby-5.0.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/capes-1.5.3+1.20.2-fabric.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/chunksfadein-v1.0.0-1.20.2.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/continuity-3.0.0-beta.4+1.20.2.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/DistantHorizons-fabric-2.0.0-a-dev-1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/eating-animation-1.20+1.9.5-CMDfix.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/entity_model_features_fabric_1.20.2-1.1.0.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="mods/1.20.2/entity_texture_features_fabric_1.20.2-4.6.1.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="mods/1.20.2/fallingleaves-1.15.4+1.20.1.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="mods/1.20.2/iris-mc1.20.2-1.6.10.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="mods/1.20.2/lambdynamiclights-2.3.2+1.20.1.jar"]');
    modCheckbox[12] = document.querySelector('input[data-mod="mods/1.20.2/notenoughanimations-fabric-1.6.4-mc1.20.2.jar"]');
    modCheckbox[13] = document.querySelector('input[data-mod="mods/1.20.2/PresenceFootsteps-1.10.0.jar"]');
    modCheckbox[14] = document.querySelector('input[data-mod="mods/1.20.2/spawnanimations-v1.9.2-mc1.17x-1.20x-mod.jar"]');
    modCheckbox[15] = document.querySelector('input[data-mod="mods/1.20.2/visuality-0.7.1+1.20.jar"]');
    modCheckbox[16] = document.querySelector('input[data-mod="mods/1.20.2/waveycapes-fabric-1.4.1-mc1.20.2.jar"]');
    modCheckbox[17] = document.querySelector('input[data-mod="mods/1.20.2/weaponmaster-multi-fabric-1.20.2-3.0.5.jar"]');
    for (let i = 0; i < 18; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectAestheticMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/appleskin-fabric-mc1.20.2-2.5.1.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/bobby-5.0.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/capes-1.5.3+1.20.2-fabric.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/chunksfadein-v1.0.0-1.20.2.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/continuity-3.0.0-beta.4+1.20.2.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/DistantHorizons-fabric-2.0.0-a-dev-1.20.2.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/eating-animation-1.20+1.9.5-CMDfix.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/entity_model_features_fabric_1.20.2-1.1.0.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="mods/1.20.2/entity_texture_features_fabric_1.20.2-4.6.1.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="mods/1.20.2/fallingleaves-1.15.4+1.20.1.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="mods/1.20.2/iris-mc1.20.2-1.6.10.jar"]');
    modCheckbox[11] = document.querySelector('input[data-mod="mods/1.20.2/lambdynamiclights-2.3.2+1.20.1.jar"]');
    modCheckbox[12] = document.querySelector('input[data-mod="mods/1.20.2/notenoughanimations-fabric-1.6.4-mc1.20.2.jar"]');
    modCheckbox[13] = document.querySelector('input[data-mod="mods/1.20.2/PresenceFootsteps-1.10.0.jar"]');
    modCheckbox[14] = document.querySelector('input[data-mod="mods/1.20.2/spawnanimations-v1.9.2-mc1.17x-1.20x-mod.jar"]');
    modCheckbox[15] = document.querySelector('input[data-mod="mods/1.20.2/visuality-0.7.1+1.20.jar"]');
    modCheckbox[16] = document.querySelector('input[data-mod="mods/1.20.2/waveycapes-fabric-1.4.1-mc1.20.2.jar"]');
    modCheckbox[17] = document.querySelector('input[data-mod="mods/1.20.2/weaponmaster-multi-fabric-1.20.2-3.0.5.jar"]');
    for (let i = 0; i < 18; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}
function recommendedAestheticMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/bobby-5.0.2.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/capes-1.5.3+1.20.2-fabric.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/chunksfadein-v1.0.0-1.20.2.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/continuity-3.0.0-beta.4+1.20.2.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/entity_model_features_fabric_1.20.2-1.1.0.jar"]');
    modCheckbox[5] = document.querySelector('input[data-mod="mods/1.20.2/entity_texture_features_fabric_1.20.2-4.6.1.jar"]');
    modCheckbox[6] = document.querySelector('input[data-mod="mods/1.20.2/iris-mc1.20.2-1.6.10.jar"]');
    modCheckbox[7] = document.querySelector('input[data-mod="mods/1.20.2/lambdynamiclights-2.3.2+1.20.1.jar"]');
    modCheckbox[8] = document.querySelector('input[data-mod="mods/1.20.2/spawnanimations-v1.9.2-mc1.17x-1.20x-mod.jar"]');
    modCheckbox[9] = document.querySelector('input[data-mod="mods/1.20.2/visuality-0.7.1+1.20.jar"]');
    modCheckbox[10] = document.querySelector('input[data-mod="mods/1.20.2/weaponmaster-multi-fabric-1.20.2-3.0.5.jar"]');
    for (let i = 0; i < 11; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}

// Wynncraft
function allWynncraftMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/wynntils-0.0.4-beta.68-fabric+MC-1.20.2.jar"]');
    for (let i = 0; i < 2; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectWynncraftMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/wynntils-0.0.4-beta.68-fabric+MC-1.20.2.jar"]');
    for (let i = 0; i < 2; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}

// Library
function allLibraryMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/cloth-config-12.0.109-fabric.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/fabric-api-0.90.7+1.20.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/fabric-language-kotlin-1.10.13+kotlin.1.9.20.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/libjf-3.13.1.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/malilib-fabric-1.20.2-0.17.0.jar"]');
    for (let i = 0; i < 5; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = true;
    }
}
function deselectLibraryMods1202() {
    modCheckbox[0] = document.querySelector('input[data-mod="mods/1.20.2/cloth-config-12.0.109-fabric.jar"]');
    modCheckbox[1] = document.querySelector('input[data-mod="mods/1.20.2/fabric-api-0.90.7+1.20.2.jar"]');
    modCheckbox[2] = document.querySelector('input[data-mod="mods/1.20.2/fabric-language-kotlin-1.10.13+kotlin.1.9.20.jar"]');
    modCheckbox[3] = document.querySelector('input[data-mod="mods/1.20.2/libjf-3.13.1.jar"]');
    modCheckbox[4] = document.querySelector('input[data-mod="mods/1.20.2/malilib-fabric-1.20.2-0.17.0.jar"]');
    for (let i = 0; i < 5; i++) {
        if (modCheckbox[i]) modCheckbox[i].checked = false;
    }
}