'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectById(selector, parent = document) {
    return parent.getElementById(selector);
}

function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

function create(element, parent = document) {
    return parent.createElement(element);
}

// Function to print  
function print(...args) {
    console.log(args.join(', '));
}

//Language 
const systemLe = select('.system-language');
function laguage() {
    let lang = navigator.language;
    systemLe.innerText = `Language: ${lang}`
}

//Operator Systems
const systemOs = select('.system-os');
function getos() {
    let uAgent = navigator.userAgent;
    let io = 'Not found it';
    if (uAgent.includes("Windows")) {
        io = "Windows";
    }
    if (uAgent.includes("Mac OS")) {
        io = "Mac/iOS";
    }
    systemOs.innerText = `OS: ${io}`
}

// Browser
const brow = select('.current-browser');
function getBrowser() {
    let uAgent = navigator.userAgent.trim();
    let browserName = '';
    if (uAgent.includes('Edg')) {
        browserName = 'Edge';
    } else if (uAgent.includes('Chrome')) {
        browserName = 'Chrome';
    } else if (uAgent.includes('Safari')) {
        browserName = 'Safari';
    }
    brow.innerText = `Browser: ${browserName}`
}

//Conect HTML with BOM - Section Window
const sectionWindow = select('.box-headers');
const pageW = select(".page-w");
const pageH = select(".page-h");

//Witdh and Height 
function getWindowsDimensions() {
    pageW.innerText = `Width: ${window.innerWidth} px`;
    pageH.innerText = `Higth: ${window.innerHeight} px`;
}

//Get orientation
const pageO = select(".page-orientation");
function getorientation() {

    /*
    let portrait = window.matchMedia("(orientation: portrait)");
    let orientation = '';

    if (window.innerHeight > window.innerWidth) {
        orientation = 'Portrait';
    } else {
        orientation = 'Landscape:';
    }

    portrait.addEventListener("change", function (e) {
        if (e.matches) {
            orientation = 'Landscape:';
        }
    });
    pageO.innerText = `Orientation: ${orientation}`
    */
}

//Batery Level 
const bateryLevel = select(".battery-level");
function getBaterryLevel() {
    navigator.getBattery().then(function (battery) {

        var level = battery.level;
        bateryLevel.innerText = `Level: ${level * 100}\%`;
    });
}

//Conect HTML with BOM - Section Window
const baterryStatus = select('.battery-status .statuchar');
baterryStatus.innerText = `Not Available`;
function getBaterryStatus() {
    let batteryIsCharging = false;

    navigator.getBattery().then((battery) => {
        batteryIsCharging = battery.charging;

        battery.addEventListener("chargingchange", () => {
            if (batteryIsCharging = battery.charging) {
                baterryStatus.innerText = `Charging`
            } else {
                baterryStatus.innerText = `Not charging`
            }
        });
    });
}

const btn = select('.button .statusint');
const btn2 = select('.button');
btn.innerText = `Not Available`;
function connectionStatus() {
    let status = navigator.onLine;;

    if (!status) {
        btn.innerText = `OFFLINE`;
        btn2.style.backgroundColor = `#c8221f`;
    } else {
        btn.innerText = `ONLINE`;
    }

    onEvent("online", window, function () {
        btn.innerText = `OFFLINE`;
    });

    onEvent("offline", window, function () {
        btn.innerText = `OFFLINE`;
        btn2.style.backgroundColor = `#c8221f`;
    });
}

//Function Using the 'load' events
onEvent('load', window, function () {
    getWindowsDimensions();
    getBrowser();
    getos();
    laguage();
    getorientation();
    getBaterryLevel();
    getBaterryStatus()
    connectionStatus();
});

//Function Using the 'resize' events
onEvent('resize', window, function () {
    getWindowsDimensions();
    getBaterryLevel();
    getorientation();
    connectionStatus();
});