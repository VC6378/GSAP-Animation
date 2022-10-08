 
const playButton = document.getElementById("play");

let tween = gsap.to(".box",{
    duration:6,
    x:500,
    rotate:720,
});

tween.pause();

//play button
playButton.addEventListener("click",function(){
    tween.play();
});

//pause button
const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click",function(){
    tween.pause();
})

//resume button
const resumeButton = document.getElementById("resume");
resumeButton.addEventListener("click",function(){
    tween.resume();
})

//reverse button
const reverseButton = document.getElementById("reverse");
reverseButton.addEventListener("click",function(){
    tween.reverse();
})

