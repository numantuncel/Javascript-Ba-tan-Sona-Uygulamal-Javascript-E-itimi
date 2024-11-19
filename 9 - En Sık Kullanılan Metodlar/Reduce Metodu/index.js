// istediğim değeri çekmek istersem modifiye etmek istersem

const points = [70, 75, 25, 35, 10, 80, 27];

// const result=points.reduce((value,point)=>{
//   if (point>50) {
//     value++
//   }
// return value
// },0)// value dğeri 0 oldu

//console.log(result)// 3 adet 50 den büyük değer

const students = [
  { name: "can", point: 40 },
  { name: "tuba", point: 60 },
  { name: "elif", point: 30 },
  { name: "osman", point: 100 },
  { name: "can", point: 80 },
  { name: "tuba", point: 60 },
  { name: "elif", point: 30 },
  { name: "osman", point: 100 },
];

const canTotal = students.reduce((value, student) => {
  if ((student.name == "can")) {
    // cana iki sefer denk gelir
    value += student.point; // ilk sefer 0+40 value=40 olur ikinci canda 40+80 120 olur
  }
  return value;
},0);

console.log(canTotal);
