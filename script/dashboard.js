var socket = new WebSocket('ws://localhost:1880/ws');

socket.onmessage = function(event) {
var data = JSON.parse(event.data);

if (data.temperature !== undefined)
    document.getElementById('tempDisplay').innerText = data.temperature.toFixed(2) + " °C";

if (data.humidity !== undefined)
    document.getElementById('humDisplay').innerText = data.humidity.toFixed(2) + " %";

if (data.pressure !== undefined)
    document.getElementById('presDisplay').innerText = data.pressure.toFixed(2) + " hPa";

if (data.altitude !== undefined)
    document.getElementById('altDisplay').innerText = data.altitude.toFixed(2) + " m";

if (data.particulas03 !== undefined)
    document.getElementById('par03Display').innerText = data.particulas03.toFixed(2) + " um";

if (data.particulas05 !== undefined)
    document.getElementById('par05Display').innerText = data.particulas05.toFixed(2) + " um";

if (data.particulas10 !== undefined)
    document.getElementById('par10Display').innerText = data.particulas10.toFixed(2) + " um";

if (data.eCO2 !== undefined)
    document.getElementById('co2Display').innerText = data.eCO2.toFixed(2) + " um"; //nose que medida va sorry, le deje la particula

if(data.tTVOC !== undefined)
    document.getElementById('tvocDisplay').innerText = data.tTVOC.toFixed(2) + " um"; //nose que medida va sorry, le deje la particula
};

function sendSetpoint(key, value) {
    if (value === "" || isNaN(value)) {
        alert("Introduce un valor válido");
        return;
    }

    var msg = {};
    msg[key] = parseFloat(value);

    socket.send(JSON.stringify(msg));
    console.log("Enviado:", msg);

    const btn = buttonEl || event.target;
    btn.disabled = true;
    btn.classList.add("is-sent");
    btn.innerText = "✓ Enviado";
    setTimeout(() => {
        btn.classList.remove("is-sent");
        btn.innerText = "Enviar";
        btn.disabled = false;
    }, 1500);
}

function setStatusDot(id, level) {
    const dot = document.getElementById(id);
    if (!dot) return;
    dot.classList.remove("status-ok", "status-warn", "status-alert");
    if (level === "ok") {
        dot.classList.add("status-ok");
    } else if (level === "warn") {
        dot.classList.add("status-warn");
    } else if (level === "alert") {
        dot.classList.add("status-alert");
    }
}

function updateTemperature(temp) {
    const el = document.getElementById("tempDisplay");
    if (!el) return;
    el.textContent = temp.toFixed(1) + " °C";
    if (temp >= 18 && temp <= 24) {
        setStatusDot("tempStatus", "ok");
    } else if ((temp >= 15 && temp < 18) || (temp > 24 && temp <= 27)) {
        setStatusDot("tempStatus", "warn");
    } else {
        setStatusDot("tempStatus", "alert");
    }
}

function updateHumidity(hum) {
    const el = document.getElementById("humDisplay");
    if (!el) return;
    el.textContent = hum.toFixed(1) + " %";
    if (hum >= 40 && hum <= 60) {
        setStatusDot("humStatus", "ok");
    } else if ((hum >= 30 && hum < 40) || (hum > 60 && hum <= 70)) {
        setStatusDot("humStatus", "warn");
    } else {
        setStatusDot("humStatus", "alert");
    }
}
function updatePressure(pres) {
    const el = document.getElementById("presDisplay");
    if (!el) return;
    el.textContent = pres.toFixed(1) + " hPa";
    if (pres >= 990 && pres <= 1030) {
        setStatusDot("presStatus", "ok");
    } else if ((pres >= 970 && pres < 990) || (pres > 1030 && pres <= 1050)) {
        setStatusDot("presStatus", "warn");
    } else {
        setStatusDot("presStatus", "alert");
    }
}

function updateAltitude(alt) {
    const el = document.getElementById("altDisplay");
    if (!el) return;
    el.textContent = alt.toFixed(1) + " m";
    if (alt >= 0 && alt <= 3000) {
        setStatusDot("altStatus", "ok");
    } else if ((alt > 3000 && alt <= 4000)) {
        setStatusDot("altStatus", "warn");
    } else {
        setStatusDot("altStatus", "alert");
    }
}

function updatePar03(val) {
    const el = document.getElementById("par03Display");
    if (!el) return;
    el.textContent = val.toFixed(1) + " µm";
    if (val <= 1000) {
        setStatusDot("p3Status", "ok");
    } else if (val <= 5000) {
        setStatusDot("p3Status", "warn");
    } else {
        setStatusDot("p3Status", "alert");
    }
}

function updatePar05(val) {
    const el = document.getElementById("par05Display");
    if (!el) return;
    el.textContent = val.toFixed(1) + " µm";
    if (val <= 500) {
        setStatusDot("p5Status", "ok");
    } else if (val <= 2000) {
        setStatusDot("p5Status", "warn");
    } else {
        setStatusDot("p5Status", "alert");
    }
}

function updatePar10(val) {
    const el = document.getElementById("par10Display");
    if (!el) return;
    el.textContent = val.toFixed(1) + " µm";
    if (val <= 100) {
        setStatusDot("p1Status", "ok");
    } else if (val <= 500) {
        setStatusDot("p1Status", "warn");
    } else {
        setStatusDot("p1Status", "alert");
    }
}

function updateCO2(val) {
    const el = document.getElementById("co2Display");
    if (!el) return;
    el.textContent = val.toFixed(0) + " ppm";
    if (val <= 1000) {
        setStatusDot("coStatus", "ok");
    } else if (val <= 1500) {
        setStatusDot("coStatus", "warn");
    } else {
        setStatusDot("coStatus", "alert");
    }
}

function updateTVOC(val) {
    const el = document.getElementById("tvocDisplay");
    if (!el) return;
    el.textContent = val.toFixed(0) + " ppb";
    if (val <= 200) {
        setStatusDot("tvocStatus", "ok");
    } else if (val <= 600) {
        setStatusDot("tvocStatus", "warn");
    } else {
        setStatusDot("tvocStatus", "alert");
    }
}