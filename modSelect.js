var modCheckbox = new Array(20);

// select
function modSelect(modNames, action) {
    for (let i = 0; i < modNames.length; i++) {
        const modCheckbox = document.querySelector(`input[mod-data="${modNames[i]}"]`);
        if (modCheckbox) {
            if (action === 'select') {
                modCheckbox.checked = true;
            } else if (action === 'deselect') {
                modCheckbox.checked = false;
            }
        }
    }
}

// performance
function perfMods1202(selectType) {
    modSelect(["alternate-current-mc1.20-1.7.0.jar", "c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar", "Debugify-1.20.2+1.0.jar", "enhancedblockentities-0.9.1+1.20.2.jar", "dynamic-fps-3.3.1+minecraft-1.20.0.jar", "entityculling-fabric-1.6.3-mc1.20.2.jar", "entity-view-distance-1.1.3+1.20.2.jar", "exordium-fabric-1.2.1-mc1.20.2.jar", "ferritecore-6.0.1-fabric.jar", "ImmediatelyFast-Fabric-1.2.8+1.20.4.jar", "indium-1.0.28+mc1.20.4.jar", "krypton-0.2.4.jar", "Ksyxis-1.2.2.jar", "lazydfu-0.1.3.jar", "lithium-fabric-mc1.20.2-0.12.0.jar", "methane-3.2.0.jar", "noxesium-1.1.1.jar", "sodium-fabric-mc1.20.2-0.5.5.jar", "sodium-extra-0.5.3+mc1.20.2-build.114.jar"], 'deselect');
    if (selectType == 'optimal') {
        modSelect(["c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar", "Debugify-1.20.2+1.0.jar", "dynamic-fps-3.3.1+minecraft-1.20.0.jar", "enhancedblockentities-0.9.1+1.20.2.jar", "entityculling-fabric-1.6.3-mc1.20.2.jar", "entity-view-distance-1.1.3+1.20.2.jar", "ferritecore-6.0.1-fabric.jar", "ImmediatelyFast-Fabric-1.2.8+1.20.4.jar", "krypton-0.2.4.jar", "Ksyxis-1.2.2.jar", "lithium-fabric-mc1.20.2-0.12.0.jar", "noxesium-1.1.1.jar", "sodium-fabric-mc1.20.2-0.5.5.jar", "sodium-extra-0.5.3+mc1.20.2-build.114.jar"], 'select');
    } else if (selectType == 'recommend') {
        modSelect(["c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar", "dynamic-fps-3.3.1+minecraft-1.20.0.jar", "entityculling-fabric-1.6.3-mc1.20.2.jar", "ferritecore-6.0.1-fabric.jar", "krypton-0.2.4.jar", "lithium-fabric-mc1.20.2-0.12.0.jar", "sodium-fabric-mc1.20.2-0.5.5.jar", "sodium-extra-0.5.3+mc1.20.2-build.114.jar"], 'select');
    } else if (selectType == 'min') {
        modSelect(["dynamic-fps-3.3.1+minecraft-1.20.0.jar", "ferritecore-6.0.1-fabric.jar", "lithium-fabric-mc1.20.2-0.12.0.jar", "sodium-fabric-mc1.20.2-0.5.5.jar"], 'select');
    } else {
        modSelect(["alternate-current-mc1.20-1.7.0.jar", "c2me-fabric-mc1.20.2-0.2.0+alpha.10.126.jar", "Debugify-1.20.2+1.0.jar", "enhancedblockentities-0.9.1+1.20.2.jar", "dynamic-fps-3.3.1+minecraft-1.20.0.jar", "entityculling-fabric-1.6.3-mc1.20.2.jar", "entity-view-distance-1.1.3+1.20.2.jar", "exordium-fabric-1.2.1-mc1.20.2.jar", "ferritecore-6.0.1-fabric.jar", "ImmediatelyFast-Fabric-1.2.8+1.20.4.jar", "indium-1.0.28+mc1.20.4.jar", "krypton-0.2.4.jar", "Ksyxis-1.2.2.jar", "lazydfu-0.1.3.jar", "lithium-fabric-mc1.20.2-0.12.0.jar", "methane-3.2.0.jar", "noxesium-1.1.1.jar", "sodium-fabric-mc1.20.2-0.5.5.jar", "sodium-extra-0.5.3+mc1.20.2-build.114.jar"], selectType);
    }
}

// QOL
function QOLMods1202(selectType) {
    if (selectType == 'recommend') {
        modSelect(["appleskin-fabric-mc1.20.2-2.5.1.jar", "ClearDespawn-fabric-1.20.2-1.1.15.jar", "forcecloseloadingscreen-2.2.0.jar", "shulkerboxtooltip-fabric-4.0.7+1.20.2.jar", "slyde-1.7.2.jar"], 'deselect');
        modSelect(["BetterF3-8.0.2-Fabric-1.20.2.jar", "Essential-fabric_1-20-2.jar", "reeses_sodium_options-1.7.0+mc1.20.2-build.97.jar", "simple-armor-hud-1.20.2-1.4.0.jar", "yosbr-0.1.2.jar"], 'select');
    } else {
        modSelect(["appleskin-fabric-mc1.20.2-2.5.1.jar", "BetterF3-8.0.2-Fabric-1.20.2.jar", "ClearDespawn-fabric-1.20.2-1.1.15.jar", "Essential-fabric_1-20-2.jar", "forcecloseloadingscreen-2.2.0.jar", "reeses_sodium_options-1.7.0+mc1.20.2-build.97.jar", "shulkerboxtooltip-fabric-4.0.7+1.20.2.jar", "simple-armor-hud-1.20.2-1.4.0.jar", "slyde-1.7.2.jar", "yosbr-0.1.2.jar"], selectType);
    }
}

// Utility
function utilityMods1202(selectType) {
    if (selectType == 'recommend') {
        modSelect(["itemswapper-fabric-0.5.4-mc1.20.2.jar", "voicechat-fabric-1.20.2-2.4.32.jar", "tweakeroo-fabric-1.20.2-0.18.0.jar", "Xaeros_Minimap_23.9.3_Fabric_1.20.2.jar", "XaerosWorldMap_1.37.2_Fabric_1.20.2.jar"], 'deselect');
        modSelect(["fabric-carpet-1.20.2-1.4.121+v231011.jar", "litematica-fabric-1.20.2-0.16.0.jar", "minihud-fabric-1.20.2-0.28.0.jar", "modmenu-8.0.1.jar", "replaymod-1.20.2-2.6.14.jar"], 'select');
    } else {
        modSelect(["fabric-carpet-1.20.2-1.4.121+v231011.jar", "itemswapper-fabric-0.5.4-mc1.20.2.jar", "litematica-fabric-1.20.2-0.16.0.jar", "minihud-fabric-1.20.2-0.28.0.jar", "modmenu-8.0.1.jar", "replaymod-1.20.2-2.6.14.jar", "voicechat-fabric-1.20.2-2.4.32.jar", "tweakeroo-fabric-1.20.2-0.18.0.jar", "Xaeros_Minimap_23.9.3_Fabric_1.20.2.jar", "XaerosWorldMap_1.37.2_Fabric_1.20.2.jar"], selectType);
    }
}

// Aesthetic
function aestheticMods1202(selectType) {
    if (selectType == 'recommend') {
        modSelect(["DistantHorizons-2.0.1-a-1.20.2.jar", "DynamicSoundFilters-1.4.0+1.20.2.jar", "eating-animation-1.20+1.9.5.jar", "fallingleaves-1.15.4+1.20.1.jar", "Mambience-5.3.1+1.20.2.jar", "notenoughanimations-fabric-1.6.4-mc1.20.2.jar", "PresenceFootsteps-1.10.1.jar", "waveycapes-fabric-1.4.2-mc1.20.2.jar"], 'deselect');
        modSelect(["bobby-5.0.2.jar", "capes-1.5.3+1.20.2-fabric.jar", "chunksfadein-v1.0.0-1.20.2.jar", "continuity-3.0.0-beta.4+1.20.2.jar", "DynamicSoundFilters-1.4.0+1.20.2.jar", "entity_model_features_fabric_1.20.2-1.2.jar", "entity_texture_features_fabric_1.20.2-5.0.jar", "iris-mc1.20.2-1.6.14.jar", "lambdynamiclights-2.3.3+1.20.2.jar", "physics-mod-3.0.11-mc-1.20.2-fabric.jar", "spawnanimations-v1.9.2-mc1.17x-1.20x-mod.jar", "visuality-0.7.1+1.20.jar", "weaponmaster-client-only-fabric-1.20.2-3.0.5.jar"], 'select')
    } else {
        modSelect(["bobby-5.0.2.jar", "capes-1.5.3+1.20.2-fabric.jar", "chunksfadein-v1.0.0-1.20.2.jar", "continuity-3.0.0-beta.4+1.20.2.jar", "DistantHorizons-2.0.1-a-1.20.2.jar", "DynamicSoundFilters-1.4.0+1.20.2.jar", "eating-animation-1.20+1.9.5.jar", "entity_model_features_fabric_1.20.2-1.2.jar", "entity_texture_features_fabric_1.20.2-5.0.jar", "fallingleaves-1.15.4+1.20.1.jar", "iris-mc1.20.2-1.6.14.jar", "lambdynamiclights-2.3.3+1.20.2.jar", "Mambience-5.3.1+1.20.2.jar", "notenoughanimations-fabric-1.6.4-mc1.20.2.jar", "physics-mod-3.0.11-mc-1.20.2-fabric.jar", "PresenceFootsteps-1.10.1.jar", "spawnanimations-v1.9.2-mc1.17x-1.20x-mod.jar", "visuality-0.7.1+1.20.jar", "waveycapes-fabric-1.4.2-mc1.20.2.jar", "weaponmaster-client-only-fabric-1.20.2-3.0.5.jar"], selectType);
    }
}

// Wynncraft
function wynncraftMods1202(selectType) {
    modSelect(["wynntils-0.0.4-beta.105-fabric+MC-1.20.2.jar", "VoicesOfWynn-MC1.20.2-v1.6.jar"], selectType);
}

// Library
function libraryMods1202(selectType) {
    modSelect(["cloth-config-12.0.109-fabric.jar", "fabric-api-0.90.7+1.20.2.jar", "fabric-language-kotlin-1.10.14+kotlin.1.9.20.jar", "libjf-3.13.1.jar", "malilib-fabric-1.20.2-0.17.0.jar"], selectType);
}