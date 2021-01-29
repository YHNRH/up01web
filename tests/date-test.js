
var today = Date.now();

var todayISO = new Date(today);

var todayISOStr = todayISO.toISOString();

var tokenTTL = 2; // minutes

var expired = today + tokenTTL * 60 * 1000;

console.log('today timestamp', today);
console.log('expire timestamp', expired);
