const startDate = new Date("2024/09/01 9:45:00");
const now = new Date();

console.log(startDate);

const diff = now.getTime() - startDate.getTime();
console.log(diff);

const minute = Math.round(diff / 1000 / 60); // dk farkı
const hours = Math.round(minute / 60);
const gün = Math.round(hours / 24);

console.log(minute);

console.log("saat", hours);

console.log("gün: ", gün);

const TamTarih=2070613284*1000;

console.log(new Date(TamTarih))
