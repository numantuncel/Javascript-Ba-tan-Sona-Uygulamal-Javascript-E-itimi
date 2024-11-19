const currencyFirst=document.getElementById('currencyFirst')
const currencySecond=document.getElementById('currencySecond')
const count=document.getElementById('count')
const equal=document.getElementById('equal')
const exchangeRate=document.getElementById('exchangeRate')

updateRate();

function updateRate(){
  fetch(` https://v6.exchangerate-api.com/v6/cd7b612425834b793c2ca8ed/latest/${currencyFirst.value}`)
  .then((res)=>res.json())
  .then((data)=>{
    const rate=data.conversion_rates[currencySecond.value]
    equal.textContent=(count.value*rate).toFixed(2)// virgülden sonra kaç basamak görmek istersek
    exchangeRate.textContent=`1 ${currencyFirst.value} = ${rate} ${currencySecond.value} `
  })
}

// doviz cinsi değiştiğinde tekrar istek atar 
currencyFirst.addEventListener('change',()=>{
  updateRate()
})
currencySecond.addEventListener('change',()=>{
  updateRate()
})

count.addEventListener('input',updateRate);/* kısa yazım tarzı */