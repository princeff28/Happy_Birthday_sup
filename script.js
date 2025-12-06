const colors = ["#ff3366","#ff6699","#ff99cc","#ff0066","#ff1493"];
const bgContainer = document.getElementById("bg-container");
const balloonsColors = ["#ffcc00","#00ccff","#ff66cc","#99ff33","#ff9933"];

// Heart creation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = "❤";
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = 15 + Math.random() * 30 + 'px';
  heart.style.color = colors[Math.floor(Math.random()*colors.length)];
  heart.style.top = window.innerHeight + 'px';
  bgContainer.appendChild(heart);

  // Animate upward
  let top = window.innerHeight;
  const anim = setInterval(() => {
    top -= 2;
    heart.style.top = top + "px";
    if(top < -30) {
      heart.remove();
      clearInterval(anim);
    }
  }, 20);
}

// Balloon creation
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.innerText = "🎈";
  balloon.style.left = Math.random() * window.innerWidth + 'px';
  balloon.style.fontSize = 20 + Math.random() * 30 + 'px';
  balloon.style.top = window.innerHeight + 'px';
  balloon.style.color = balloonsColors[Math.floor(Math.random()*balloonsColors.length)];
  bgContainer.appendChild(balloon);

  let top = window.innerHeight;
  const anim = setInterval(() => {
    top -= 1.5;
    balloon.style.top = top + 'px';
    if(top < -50) {
      balloon.remove();
      clearInterval(anim);
    }
  }, 20);
}

function spawnHeartsAndBalloons() {
  createHeart();
  createBalloon();
  setTimeout(spawnHeartsAndBalloons, 500);
}
spawnHeartsAndBalloons();




function createHeart() {
  let heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
