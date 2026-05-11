const display = document.getElementById("display");
const sci = document.querySelector(".scientific");

let themes = ["pink","blue","purple","dark"];
let themeIndex = 0;

/* SOUND EFFECT */
function clickSound(){
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.frequency.value = 600;
    osc.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
}

/* BASIC FUNCTIONS */
function add(val){
    clickSound();
    display.value += val;
}

function clearDisplay(){
    clickSound();
    display.value = "";
}

function del(){
    clickSound();
    display.value = display.value.slice(0,-1);
}

function calc(){
    clickSound();
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* SCIENTIFIC FUNCTIONS (FIXED) */
function func(type){
    clickSound();

    if(display.value === ""){
        display.value = "0";
    }

    let v = eval(display.value);

    if(type=="sin") display.value = Math.sin(v * Math.PI / 180);
    if(type=="cos") display.value = Math.cos(v * Math.PI / 180);
    if(type=="tan") display.value = Math.tan(v * Math.PI / 180);

    if(type=="log") display.value = Math.log10(v);
    if(type=="sqrt") display.value = Math.sqrt(v);
    if(type=="square") display.value = v * v;
}

/* TOGGLES */
function toggleScientific(){
    clickSound();
    sci.style.display = sci.style.display === "grid" ? "none" : "grid";
}

function toggleTheme(){
    clickSound();
    themeIndex = (themeIndex + 1) % themes.length;
    document.body.className = themes[themeIndex];
}