let rowOne = document.getElementById('rowOne'), rowTwo = document.getElementById('rowTwo'), rowThree = document.getElementById('rowThree'), 
rowFour = document.getElementById('rowFour')

let lineOne = document.getElementById('lineOne'), lineTwo = document.getElementById('lineTwo'), lineThree = document.getElementById('lineThree'), 
lineFour = document.getElementById('lineFour')

let gameRows = document.getElementById('gameRows')
gameRows.style.display = 'none'

let startGameBtn = document.getElementById('startGame'), restartGameBtn = document.getElementById('restartGame'), goGameBtn = document.getElementById('goGame')

let finish = 480
let speedOne = Math.floor(Math.random() * 21) + 1, speedTwo = Math.floor(Math.random() * 21) + 1, speedThree = Math.floor(Math.random() * 21) + 1, 
speedFour = Math.floor(Math.random() * 21) + 1

lineOne.innerText = speedOne
lineTwo.innerText = speedTwo
lineThree.innerText = speedThree
lineFour.innerText = speedFour

let lineOnePosition = 0, lineTwoPosition = 0, lineThreePosition = 0, lineFourPosition = 0

let maxResult = 0

let winner = ""



startGame.onclick = function startGame () {
    startGameBtn.style.display = 'none'
    restartGameBtn.style.display = 'block'
    
    setTimeout(function() {
        lineOnePosition += speedOne
        lineTwoPosition += speedTwo
        lineThreePosition += speedThree
        lineFourPosition += speedFour

        lineOne.style.marginLeft = `${lineOnePosition}px`
        lineTwo.style.marginLeft = `${lineTwoPosition}px`
        lineThree.style.marginLeft = `${lineThreePosition}px`
        lineFour.style.marginLeft = `${lineFourPosition}px`

        maxResult = Math.max(lineOnePosition, lineTwoPosition, lineThreePosition, lineFourPosition)

        if((maxResult + 25) < finish){
            startGame()
        } else if ((maxResult + 25) >= finish) {
            switch (maxResult) {
                case lineOnePosition:
                    winner = "Number 1"
                    break
                case lineTwoPosition:
                    winner = "Number 2"
                    break
                case lineThreePosition:
                    winner = "Number 3"
                    break
                case lineFourPosition:
                    winner = "Number 4"
                    break
            }

            console.log(`The winner is line ${winner}`)
        }
    }, 100)
}

restartGameBtn.onclick = function restartGame () {
    location.reload()
}
