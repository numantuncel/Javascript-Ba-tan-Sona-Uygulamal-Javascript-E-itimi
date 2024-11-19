const icerik = document.querySelector("p");
console.log(icerik.classList); // class larını listler

icerik.classList.add("success");
icerik.classList.remove("error");// . koymaya gerek yok


const pDegeri=document.querySelectorAll('p')

pDegeri.forEach(can => {// can her bir p ye tekabul eder
    if (can.textContent.includes('error')) {
        can.classList.add('error')
    }
    else if (can.textContent.includes('success')) {
        can.classList.add('success')
    }
    console.log(can)
});