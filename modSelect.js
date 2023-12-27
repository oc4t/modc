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
    modSelect(["alternate-current", "c2me-fabric", "debugify", "dynamic-fps", "ebe", "entityculling", "entity-view-distance", "exordium", "ferrite-core", "immediatelyfast", "indium", "krypton", "ksyxis", "lazydfu", "lithium", "methane", "noxesium", "sodium", "sodium-extra"], 'deselect');
    if (selectType == 'optimal') {
        modSelect(["c2me-fabric", "debugify", "dynamic-fps", "ebe", "entityculling", "entity-view-distance", "ferrite-core", "immediatelyfast", "krypton", "ksyxis", "lithium", "noxesium", "sodium", "sodium-extra"], 'select');
    } else if (selectType == 'recommend') {
        modSelect(["c2me-fabric", "dynamic-fps", "entityculling", "ferrite-core", "krypton", "lithium", "sodium", "sodium-extra"], 'select');
    } else if (selectType == 'min') {
        modSelect(["dynamic-fps", "ferrite-core", "lithium", "sodium"], 'select');
    } else {
        modSelect(["alternate-current", "c2me-fabric", "debugify", "dynamic-fps", "ebe", "entityculling", "entity-view-distance", "exordium", "ferrite-core", "immediatelyfast", "indium", "krypton", "ksyxis", "lazydfu", "lithium", "methane", "noxesium", "sodium", "sodium-extra"], selectType);
    }
}

// QOL
function QOLMods1202(selectType) {
    if (selectType == 'recommend') {
        modSelect(["appleskin", "cleardespawn", "forcecloseworldloadingscreen", "shulkerboxtooltip", "slyde"], 'deselect');
        modSelect(["betterf3", "essential", "reeses-sodium-options", "simple-armor-hud", "yosbr"], 'select');
    } else {
        modSelect(["appleskin", "betterf3", "cleardespawn", "essential", "forcecloseworldloadingscreen", "reeses-sodium-options", "shulkerboxtooltip", "simple-armor-hud", "slyde", "yosbr"], selectType);
    }
}

// Utility
function utilityMods1202(selectType) {
    if (selectType == 'recommend') {
        modSelect(["itemswapper", "simple-voice-chat", "tweakeroo-fabric-1.20.2-0.18.0.jar", "xaeros-minimap", "xaeros-world-map"], 'deselect');
        modSelect(["carpet", "litematica-fabric-1.20.2-0.16.0.jar", "minihud-fabric-1.20.2-0.28.0.jar", "modmenu", "replaymod"], 'select');
    } else {
        modSelect(["carpet", "itemswapper", "litematica-fabric-1.20.2-0.16.0.jar", "minihud-fabric-1.20.2-0.28.0.jar", "modmenu", "replaymod", "simple-voice-chat", "tweakeroo-fabric-1.20.2-0.18.0.jar", "xaeros-minimap", "xaeros-world-map"], selectType);
    }
}

// Aesthetic
function aestheticMods1202(selectType) {
    if (selectType == 'recommend') {
        modSelect(["distanthorizons", "eating-animation", "fallingleaves", "mambience", "not-enough-animations", "presence-footsteps", "wavey-capes"], 'deselect');
        modSelect(["bobby", "capes", "chunks-fade-in", "continuity", "dynamic-sound-filters", "entity-model-features", "entitytexturefeatures", "iris", "lambdynamiclights", "physicsmod", "spawn-animations", "visuality", "weaponmaster-client-only-fabric-1.20.2-3.0.5.jar"], 'select')
    } else {
        modSelect(["bobby", "capes", "chunks-fade-in", "continuity", "distanthorizons", "dynamic-sound-filters", "eating-animation", "entity-model-features", "entitytexturefeatures", "fallingleaves", "iris", "lambdynamiclights", "mambience", "not-enough-animations", "physicsmod", "presence-footsteps", "spawn-animations", "visuality", "wavey-capes", "weaponmaster-client-only-fabric-1.20.2-3.0.5.jar"], selectType);
    }
}

// Wynncraft
function wynncraftMods1202(selectType) {
    modSelect(["wynntils"], selectType);
}

// Library
function libraryMods1202(selectType) {
    modSelect(["cloth-config", "fabric-api", "fabric-language-kotlin", "libjf", "malilib-fabric-1.20.2-0.17.0.jar"], selectType);
}