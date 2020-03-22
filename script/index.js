let screen = {
    gameScreen: document.getElementById('gameScreen'),
    gameRows: document.getElementById('gameRows'),
    players: document.getElementsByClassName('player')
}

gameRows.style.maxWidth = `${floorHundred(screen.gameScreen.clientWidth * 0.9)}px`

setWidth(screen.players, floorTen(screen.gameRows.clientWidth * 0.05))

function setWidth (array, amount) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.maxWidth = `${amount}px`
    }
}

function floorHundred (number) {
    return number = Math.floor(number * 0.01) * 100
}

function floorTen (number) {
    return number = Math.floor(number * 0.1) * 10
}

let players = {
    playerOne: document.getElementById('playerOne'),
    playerTwo: document.getElementById('playerTwo'),
    playerThree: document.getElementById('playerThree'),
    playerFour: document.getElementById('playerFour')
}

let buttons = {
    startGameBtn: document.getElementById('startGame'),
    restartGameBtn: document.getElementById('restartGame')
}

let settings = {
    finish: screen.gameRows.clientWidth - 20,
    maxSpeed: screen.gameRows.clientWidth * 0.04,
    minSpeed: screen.gameRows.clientWidth * 0.01
}

let speed = {
    speedOne: Math.floor(Math.random() * settings.maxSpeed) + settings.minSpeed,
    speedTwo: Math.floor(Math.random() * settings.maxSpeed) + settings.minSpeed,
    speedThree: Math.floor(Math.random() * settings.maxSpeed) + settings.minSpeed,
    speedFour: Math.floor(Math.random() * settings.maxSpeed) + settings.minSpeed
}


players.playerOne.innerText = speed.speedOne
players.playerTwo.innerText = speed.speedTwo
players.playerThree.innerText = speed.speedThree
players.playerFour.innerText = speed.speedFour

let playerOnePosition = 0, playerTwoPosition = 0, playerThreePosition = 0, playerFourPosition = 0

// let positions = {
//     playerOnePosition = 0,
//     playerTwoPosition = 0,
//     playerThreePosition = 0,
//     playerFourPosition = 0
// }

let maxResult = 0
let winner = ""

buttons.startGameBtn.onclick = function startGame () {
        buttons.startGameBtn.style.display = 'none'
        buttons.restartGameBtn.style.display = 'block'
        
        setTimeout(function() {
            playerOnePosition += speed.speedOne
            playerTwoPosition += speed.speedTwo
            playerThreePosition += speed.speedThree
            playerFourPosition += speed.speedFour
    
            players.playerOne.style.marginLeft = `${playerOnePosition}px`
            players.playerTwo.style.marginLeft = `${playerTwoPosition}px`
            players.playerThree.style.marginLeft = `${playerThreePosition}px`
            players.playerFour.style.marginLeft = `${playerFourPosition}px`
    
            maxResult = Math.max(playerOnePosition, playerTwoPosition, playerThreePosition, playerFourPosition)
    
            if(maxResult < settings.finish - (screen.gameRows.clientWidth * 0.1)){
                startGame()
            } else if (maxResult >= settings.finish - (screen.gameRows.clientWidth * 0.1)) {
                switch (maxResult) {
                    case playerOnePosition:
                        winner = "Number 1"
                        break
                    case playerTwoPosition:
                        winner = "Number 2"
                        break
                    case playerThreePosition:
                        winner = "Number 3"
                        break
                    case playerFourPosition:
                        winner = "Number 4"
                        break
                }
    
                alert(`The winner is line ${winner}`)
            }
        }, 50)
    }

    buttons.restartGameBtn.onclick = function restartGame () {
    location.reload()
}