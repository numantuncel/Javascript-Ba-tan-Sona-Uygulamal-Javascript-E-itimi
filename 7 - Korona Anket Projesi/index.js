const correctAnswers = ["E", "E", "E", "E"];

const form = document.querySelector(".question-form");
const result = document.querySelector(".result");


form.addEventListener("submit", e => {
    e.preventDefault() // sayfa sürekli yenilenmez.
  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  result.classList.remove('d-none')// display none kalkar
  let puan=0;
  const bastir=setInterval(() => {
     result.querySelector('span').textContent=`%${puan}`
    if (puan==score) {
        clearInterval(bastir)
    }
    else{
        puan++;
    }
  }, 10);
 

});


// setTimeout(()=>{// bir kere çalışır
//     console.log('can')
// },2000);// kaç saniye sonra 

// // sürekli 1 saniye bi çalışır
// setInterval(() => {
//     console.log('numan')
// }, 1000);



// let i=0;
// const bastir=setInterval(() => {
//     console.log('can')
//     i++;
//     if (i==4) {
//         clearInterval(bastir)
//     }
// }, 1000);