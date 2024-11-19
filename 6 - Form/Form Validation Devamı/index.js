const form=document.querySelector('.signupForm')
const div=document.querySelector('.message')
const pattern=/^[a-z]{6,10}$/;
form.addEventListener('submit',e=>{
    e.preventDefault()
    const username=form.username.value;
    
    if (pattern.test(username)) {
        div.textContent='Başarılı'
    }
    else{
         div.textContent='Lütfen hepsini küçük harf ve 6 ile 12 karakter arasında giriniz'
    }
})


// her tıklamada çalışır 
form.username.addEventListener('keyup',e=>{
    console.log(e.target.value)
    if (pattern.test(e.target.value)) {
        div.textContent='Başarılı'
       form.username.setAttribute('class','success')
    }
    else{
       // div.textContent='Lütfen hepsini küçük harf ve 6 ile 12 karakter arasında giriniz'
       form.username.setAttribute('class','fail')
   }
})