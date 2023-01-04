const DateTime = luxon.DateTime;

console.log(DateTime.local().toFormat("dd/MM/yyyy HH:mm:ss"));
const now = DateTime.now();
console.log(now.weekday);
