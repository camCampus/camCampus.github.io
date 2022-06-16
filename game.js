var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
var life = document.querySelector('.life');
var btnStart = document.querySelector('.start-btn');
var win = document.querySelector('.main-container');
var gameOver = document.querySelector('.gameover');
var audio = new Audio("./son/Lapin_Crétin_Bwaaaa.mp3");


	document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px; top: " + e.clientY + "px;";
})

    btnStart.addEventListener('click', () => {
        btnStart.classList.add('off');
        life.classList.remove('off');
        console.log(audio);


        setInterval(generateMonster, 1000);
	
	    function generateMonster(){
		    var gameContainer = document.querySelector(".game-container");
		    var img = document.createElement('img');
		    img.src = "./img/monstrevolant.png";
		    img.style.height = Math.random() * 100 + 100 + 'px';
		    img.style.width = Math.random() * 100 + 100 + 'px';
		    img.style.animationDuration = Math.random() * 10 + 2 + 's';
		    img.style.top = (Math.random() * 6 )* 100 + 'px';
		    img.classList.add('flymonster');
		    gameContainer.appendChild(img);
            audio.play() ;
            audio.loop = true;
            
		    img.addEventListener('mouseenter', () => {
			    img.remove();
		    })
		
		    img.addEventListener('animationend', () => {

			   if (life.hasChildNodes()) {
                    console.log(life.children);
                    if (life.children.length != 0){
                        life.removeChild(life.children[0]);
                    }
                    if (life.children.length == 0){
                        gameContainer.classList.add('off');
                        gameOver.classList.remove('off');
                        audio.muted = true;

                    }
				    
			   }
	        })
			
			
		setTimeout(()=> {
			img.remove();
		}, 9000)
	}
})
	
	