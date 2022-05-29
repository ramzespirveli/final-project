let buton=document.querySelector('.bari');
let heder=document.querySelector('.div-wraper');
let uli=document.querySelector('.ul-wraper');
let nav=document.querySelector('.nav-wraper');
buton.addEventListener('click',function(){
    buton.classList.toggle('active');
    heder.classList.toggle('activ-nav');
    uli.classList.toggle('columi');
    nav.classList.toggle('disp-blok');
})
