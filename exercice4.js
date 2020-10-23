// Exercice 4
/**
Créer un timer.
Toute les secondes, incrémenter un chiffre pour le faire afficher dans le span#timer/
Un bouton doit permettre de recommencer et un autre bouton pour faire pause/play
*/

console.log('exercice 4')

const timerElm = document.getElementById('timer')
const replayElm = document.getElementById('replay')
const pauseElm = document.getElementById('toggle-timer')

let status = 'IS_PLAYING'
let currentInterval = null
let currentTime = null
let number = 0

function playTimer() {
  currentInterval = setInterval(() => {
    if(number === 5) {
        stopAndReset()
    }else {
        number = number + 1
        timerElm.textContent = number
    }


  }, 1000)
  pauseElm.textContent = 'Pause'
  status = 'IS_PLAYING'
}

function clearTimer() {
  clearInterval(currentInterval)
  currentInterval = null
  pauseElm.textContent = 'Play'
  status = 'IS_PAUSED'
}

function stopAndReset() {
    number = 0
    timerElm.textContent = number
    clearTimer()
}

playTimer(number)

pauseElm.addEventListener('click', function() {
  if (status === 'IS_PLAYING') {
    clearTimer()
  } else {
    playTimer()
  }
})

replayElm.addEventListener('click', function(){
    stopAndReset()
    playTimer()
})


