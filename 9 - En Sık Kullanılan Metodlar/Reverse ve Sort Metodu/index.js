// sort metodu alfabeti sıralamada ,puan sıralamasında // sıralmada kullanılır
// reverse de tam tersi sıralar
const names = ["can", "tuba", "elif", "hakan", "osman", "numan"];
names.sort();
names.reverse();
console.log(names);

const points = [70, 75, 25, 35, 10, 80, 27, 3];
// yanlış kullanım

// uzun yazım doğru kullanım
points.sort((a, b) => {
  if (a.point > b.point) {
    return -1;
  } else if (b.point > a.point) {
    return 1;
  } else {
    return 0;
  }
});
console.log(points)
points.sort((a, b) => b-a); // ikinci sayı birinci sayıyı çıkarabilirse demek ki büyüktür true döner yani 1 döner b ile a yer değiştirir // büyükten küçüğe sıralar çünkü b a yı çıkartırsa büyüktür
// tam tersinde ise a - b de a b yi çıkartırsa demek ki a  büyük yer değiştirir   ve küçükden sıralar


// kısa yazım

const students = [
  { name: "can", point: 40 },
  { name: "tuba", point: 60 },
  { name: "elif", point: 30 },
  { name: "osman", point: 100 },
];

students.sort((a, b) => {
  if (a.point > b.point) {
    return -1;
  } else if (b.point > a.point) {
    return 1;
  } else {
    return 0;
  }
});

console.log(students)
