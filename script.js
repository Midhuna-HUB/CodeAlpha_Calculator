<<<<<<< HEAD
const display = document.getElementById("display");
const sci = document.querySelector(".scientific");

let themes = ["pink","blue","purple","dark"];
let themeIndex = 0;

/* SOUND */
function clickSound(){
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    osc.frequency.value = 600;
    osc.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
}

/* BASIC */
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

/* SCIENTIFIC */
function func(type){
    clickSound();
    let v = eval(display.value);
    if(type=="sin") display.value = Math.sin(v);
    if(type=="cos") display.value = Math.cos(v);
    if(type=="tan") display.value = Math.tan(v);
    if(type=="log") display.value = Math.log10(v);
    if(type=="sqrt") display.value = Math.sqrt(v);
    if(type=="square") display.value = v*v;
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
=======
const display = document.getElementById("display");
const sci = document.querySelector(".scientific");

let themes = ["pink","blue","purple","dark"];
let themeIndex = 0;

/* SOUND */
function clickSound(){
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    osc.frequency.value = 600;
    osc.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
}

/* BASIC */
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

/* SCIENTIFIC */
function func(type){
    clickSound();
    let v = eval(display.value);
    if(type=="sin") display.value = Math.sin(v);
    if(type=="cos") display.value = Math.cos(v);
    if(type=="tan") display.value = Math.tan(v);
    if(type=="log") display.value = Math.log10(v);
    if(type=="sqrt") display.value = Math.sqrt(v);
    if(type=="square") display.value = v*v;
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
>>>>>>> fde432f72bd9369774734543d86d9b7643d1a9e9
}