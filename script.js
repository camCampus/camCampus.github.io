const body = document.body;
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px; top: " + e.clientY + "px;";
    console.log("ok");
})
setInterval(rainFall, 10);

function rainFall(){
    const waterDrop = document.createElement('i');

    waterDrop.classList.add("fa-solid");
    waterDrop.classList.add("fa-droplet");
    waterDrop.style.fontSize = Math.random() * 7 + 'px';
    waterDrop.style.animationDuration = Math.random() * 2 + 's';
    waterDrop.style.opacity = Math.random() + 0.5;
    waterDrop.style.left = Math.random() * window.innerWidth + 'px';
    
    body.appendChild(waterDrop);

    setTimeout(() => {
        waterDrop.remove()
    }, 6000)
}
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
