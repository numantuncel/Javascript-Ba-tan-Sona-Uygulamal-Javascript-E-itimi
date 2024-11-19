// istenilen değerleri filtreler

const points = [70, 75, 25, 35, 10, 80, 27];

const studentsPassed = points.filter((point) => {
  return point > 50;
  // 50 nin altındakiler false gelir ve dizinden çıkarır !!!
});
console.log(studentsPassed);

const students = [
  { name: "can", passed: true },
  { name: "tuba", passed: false },
  { name: "elif", passed: false },
  { name: "osman", passed: true },
];
const passingStudent=students.filter(student=>{
    return !student.passed// geçemeyenler
})

console.log(passingStudent)