const watchButton=document.querySelector('.watchButton');
const videoContainer=document.querySelector('.videoContainer');
const closeIcon=document.querySelector('.closeIcon');
const video=document.querySelector('video');

watchButton.addEventListener('click',()=>{
    videoContainer.classList.remove('active')
    video.play(); // Video oynatılır
})

closeIcon.addEventListener('click',()=>{
    videoContainer.classList.add('active')
    video.pause()// video durur
    video.currentTime = 0;// süre sıfırla
    
})