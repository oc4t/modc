function drop1202() {
    document.getElementById("1202-dropdown").classList.toggle("show");
    const arrow1202 = document.getElementById('arrow1202');
    rotated1202 = !rotated1202;
    arrow1202.style.transform = rotated1202 ? 'rotate(90deg)' : 'rotate(0deg)';
}
function dropPerformance() {
    document.getElementById("performance-dropdown").classList.toggle("show");
    const arrow1 = document.getElementById('arrow1');
    rotated1 = !rotated1;
    arrow1.style.transform = rotated1 ? 'rotate(90deg)' : 'rotate(0deg)';
}
function dropQOL() {
    document.getElementById("qol-dropdown").classList.toggle("show");
    const arrow2 = document.getElementById('arrow2');
    rotated2 = !rotated2;
    arrow2.style.transform = rotated2 ? 'rotate(90deg)' : 'rotate(0deg)';
}
function dropUtility() {
    document.getElementById("utility-dropdown").classList.toggle("show");
    const arrow3 = document.getElementById('arrow3');
    rotated3 = !rotated3;
    arrow3.style.transform = rotated3 ? 'rotate(90deg)' : 'rotate(0deg)';
}
function dropAesthetic() {
    document.getElementById("aesthetic-dropdown").classList.toggle("show");
    const arrow4 = document.getElementById('arrow4');
    rotated4 = !rotated4;
    arrow4.style.transform = rotated4 ? 'rotate(90deg)' : 'rotate(0deg)';
}
function dropWynncraft() {
    document.getElementById("wynncraft-dropdown").classList.toggle("show");
    const arrow5 = document.getElementById('arrow5');
    rotated5 = !rotated5;
    arrow5.style.transform = rotated5 ? 'rotate(90deg)' : 'rotate(0deg)';
}
function dropLibrary() {
    document.getElementById("library-dropdown").classList.toggle("show");
    const arrow6 = document.getElementById('arrow6');
    rotated6 = !rotated6;
    arrow6.style.transform = rotated6 ? 'rotate(90deg)' : 'rotate(0deg)';
}

let rotated1202 = false;
let rotated1 = false;
let rotated2 = false;
let rotated3 = false;
let rotated4 = false;
let rotated5 = false;
let rotated6 = false;