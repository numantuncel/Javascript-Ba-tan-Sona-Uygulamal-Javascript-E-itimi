let adSoyad="Numan Tunçel";

let son=adSoyad.lastIndexOf('n');
console.log(son);

let bastanSona=adSoyad.slice(0,5);// 0. index de başar 5 te biter
console.log(bastanSona);

let bastanSonaSustr=adSoyad.substring(0,7); // 0 dan başar 7 tane index gider 0 dahil
console.log(bastanSonaSustr);

let yerDegis=adSoyad.replace('n','a');
console.log(yerDegis);