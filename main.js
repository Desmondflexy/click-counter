main();

function main() {
  const button = document.querySelector('#app>button');
  const textArea = document.querySelector("#textarea");
  const timerP = document.getElementById('timer');
  const maxTime = 5;
  let intervalID, timer, clickCounter;

  initGame();

  button.addEventListener("click", () => {
    timer = maxTime;
    timerP.innerHTML = `Time left to click: ${timer}s`;
    clearInterval(intervalID);
    intervalID = setInterval(() => {
      timer--;
      timerP.innerHTML = `Time left to click: ${timer}s`;
      if (timer === 0) {
        clearInterval(intervalID);
        textArea.innerHTML = '🤪Game Over🤪';
        setTimeout(() => {
          textArea.innerHTML = '😎😎';
        }, 2000);
        initGame();
      }
    }, 400);
    textArea.innerHTML = `Click ${++clickCounter}`;
  })

  function initGame() {
    clickCounter = 0;
    timerP.innerHTML = `Click button to start game`;
  }
}