const form=document.querySelector('.signupForm')
const username=document.querySelector('#username')/// ilk yöntem



form.addEventListener('submit',e=>{// form submit aldığında
  e.preventDefault()// sayfa yenilenmesini engeller
  //console.log('form gönderildi')
  //console.log(username.value) ilk yöntem
  console.log(form.username.value)


})