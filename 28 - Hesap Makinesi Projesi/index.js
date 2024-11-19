const calculatorTitle=document.querySelector('h1')

const butons=document.querySelectorAll('button')

const resetButon=document.getElementById('resetBottom')

let initialValue=0;
let operatörValue='';

let isWaiting=false;


function sendNumberValue(number) {
    //calculatorTitle.textContent=number
    if (isWaiting=true) {
        calculatorTitle.textContent=number
        isWaiting=false
    }
    else{
        
    const displayValue=calculatorTitle.textContent;
    calculatorTitle.textContent=displayValue==='0' ? number:displayValue+number
    }

 //string değer ler yan naya birleşebilir
    // display value değeri eğer 0 is numberi calculator title ye ver değilse değer + değer
}

function addDecimal() {
    if (!calculatorTitle.textContent.includes('.')) {// hiçnokta içermiyorsa
        calculatorTitle.textContent=`${calculatorTitle.textContent}.`
    }
}
function useOperatör(operatör) {
    
    const currentValue=Number(calculatorTitle.textContent)
    
    if (operatörValue && isWaiting) {
        operatörValue=operatör
        return;
    }

    if (!initialValue) {
        initialValue=currentValue;
    }
    else{
        const calculation=calc[operatörValue](initialValue,currentValue)
        calculatorTitle.textContent=calculation;
        initialValue=calculation
    }
    isWaiting=true
    operatörValue=operatör
}

const calc={
    '/':(firstNumber,secondNumber)=>firstNumber/secondNumber,
    '*':(firstNumber,secondNumber)=>firstNumber*secondNumber,
    '+':(firstNumber,secondNumber)=>firstNumber+secondNumber,
    '-':(firstNumber,secondNumber)=>firstNumber-secondNumber,
    '=':(firstNumber,secondNumber)=>secondNumber,
}



butons.forEach(buton => {
    if (buton.classList.length===0) {
        buton.addEventListener('click',()=>sendNumberValue(buton.value))
    }
    else if(buton.classList.contains('operatör')){
        buton.addEventListener('click',()=>useOperatör(buton.value))

    }
    else if(buton.classList.contains('decimal')){
        buton.addEventListener('click',()=>addDecimal())

    }
});


// sıfırlama işlemi
function resetAll() {
    calculatorTitle.textContent='0'
    initialValue=0;
    operatörValue=''
    isWaiting=false
}


resetButon.addEventListener('click',resetAll)