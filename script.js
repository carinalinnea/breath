const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 10000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Andas in!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Håll andan';

    setTimeout(() => {
      text.innerText = 'Andas ut!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);