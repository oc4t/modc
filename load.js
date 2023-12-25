var bodyHeight = document.body.clientHeight;
function load() {
    document.getElementById('load').style.marginTop = '0';
    setTimeout(function(){
        document.getElementById('load').style.overflow = 'visible';
    }, 1000);
}
function loadHome() {
    bodyHeight = document.body.clientHeight;
    document.getElementById('load').style.marginTop = -bodyHeight - 500 + 'px';
    setTimeout(function(){
        window.location.replace("index.html");
    }, 250);
}
function loadMods() {
    bodyHeight = document.body.clientHeight;
    document.getElementById('load').style.marginTop = -bodyHeight - 500 + 'px';
    setTimeout(function(){
        window.location.replace("mods.html");
    }, 250);
}
function loadModpacks() {
    bodyHeight = document.body.clientHeight;
    document.getElementById('load').style.marginTop = -bodyHeight - 500 + 'px';
    setTimeout(function(){
        window.location.replace("modpacks.html");
    }, 250);
}