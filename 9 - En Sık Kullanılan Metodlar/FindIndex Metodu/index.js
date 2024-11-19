// istenilen sayı indexini değerinden bulur ve elemanı günceller 

const points = [70, 75, 25, 35, 10, 80, 27];

const arrayIndex = points.findIndex((point) => point == 35);
points[arrayIndex]=45;
console.log(points)


const students = [
  { name: "can", point: 40 },
  { name: "tuba", point: 60 },
  { name: "elif", point: 30 },
  { name: "osman", point: 100 },
];


const objectIndex=students.findIndex(student=> student.name=="elif")

students[objectIndex].point=50

console.log (students)