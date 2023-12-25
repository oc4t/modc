function load() {
    document.getElementById('load').style.marginTop = '0';
    setTimeout(function(){
        document.getElementById('load').style.overflow = 'visible';
    }, 1000);
}
function loadHome() {
    document.getElementById('load').style.marginTop = '-1500px';
    setTimeout(function(){
        window.location.replace("index.html");
    }, 250);
}
function loadMods() {
    document.getElementById('load').style.marginTop = '-1500px';
    setTimeout(function(){
        window.location.replace("mods.html");
    }, 250);
}
function loadModpacks() {
    document.getElementById('load').style.marginTop = '-1500px';
    setTimeout(function(){
        window.location.replace("modpacks.html");
    }, 250);
}