var socket = new WebSocket('ws://localhost:8080/html/dashboard.html');

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
}