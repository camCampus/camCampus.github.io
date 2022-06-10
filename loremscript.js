let black = document.querySelector('.za');
let pink = document.querySelector('.zb');
let green = document.querySelector('.zc');

let blackBox = document.querySelector('#tipblack');
let pinkBox = document.querySelector('#tippink');
let greenBox = document.querySelector('#tipgreen');
let gh2 = document.querySelector('.gh2');



black.addEventListener('click', () => {
    console.log('black ok');
    blackBox.classList.add("affiche");
    pinkBox.classList.add("cache");
    greenBox.classList.add("cache");

})
pink.addEventListener('click', () => {
    console.log('pink ok');
    pinkBox.classList.add("affiche");
    blackBox.classList.add("cache");
    greenBox.classList.add("cache");
})
green.addEventListener('click', () => {
    console.log('green ok');
    greenBox.classList.add("affiche");
    pinkBox.classList.add("cache");
    blackBox.classList.add("cache");
    gh2.classList.add("resetleft");
})