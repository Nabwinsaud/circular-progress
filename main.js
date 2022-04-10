const progressBar=document.querySelector('.circular-progress');
const circularValue=document.querySelector('.circular-value');
console.log(progressBar);

let progressValue=0;
let progressEnd=90;
let speed=40;

let progress=setInterval(()=>{
    progressValue++; 
    circularValue.textContent=`${progressValue}%`
    progressBar.style.background=`conic-gradient(royalblue ${progressValue *3.6 }deg,
    crimson ${progressValue *3.6}deg)
    `
    // console.log(progressValue);
    if (progressValue === progressEnd) clearInterval(progress);

},speed)
