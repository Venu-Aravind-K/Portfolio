var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active"); 
})
let index = 0;
const sentences = [
    'Full-Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Lifelong Learner'
];
const changeSentence = document.getElementById('changing-text');
var isdeleteing = false;
let charIndex = 0;
function typeEffect(){
    if(!isdeleteing){
        changeSentence.innerText = sentences[index].substring(0,charIndex);
        if(charIndex === sentences[index].length){
            setTimeout(() => {isdeleteing = true;}, 2000);
        }
        else{
            charIndex = charIndex + 1;
        }
    }   else{
        changeSentence.innerText = sentences[index].substring(0,charIndex);
        if(charIndex === 0){
            isdeleteing = false;
            index = (index + 1) % sentences.length;
        }
        else{
            charIndex = charIndex - 1;
        }
    }
    setTimeout(typeEffect, isdeleteing ? 50 : 100);
}
typeEffect();



