gsap.registerPlugin(ScrollTrigger);


var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px; top: " + e.clientY + "px;";

})
/*
const tl = gsap.timeline({duration:3});
tl.from(".two", {xPercent:-100})
.from(".trois", {xPercent:-100})
.from(".quatre", {xPercent:-100});

ScrollTrigger.creat({
    animation:tl,
    trigger:'.first',
    start: "top top",
    end:"+=4000",
    scrub:true,
    pin:true,
    anticipatePin:1
});
*/

let path = document.querySelector('path');
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;
})