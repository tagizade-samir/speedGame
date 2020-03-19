let rowOne = document.getElementById('rowOne')
let rowTwo = document.getElementById('rowTwo')
let rowThree = document.getElementById('rowThree')
let rowFour = document.getElementById('rowFour')

let lineOne = document.getElementById('lineOne')
let lineTwo = document.getElementById('lineTwo')
let lineThree = document.getElementById('lineThree')
let lineFour = document.getElementById('lineFour')

let startGameBtn = document.getElementById('startGame')
let restartGameBtn = document.getElementById('restartGame')

let finish = 480
let speedOne = Math.floor(Math.random() * 21) + 1
let speedTwo = Math.floor(Math.random() * 21) + 1
let speedThree = Math.floor(Math.random() * 21) + 1
let speedFour = Math.floor(Math.random() * 21) + 1

lineOne.innerText = speedOne
lineTwo.innerText = speedTwo
lineThree.innerText = speedThree
lineFour.innerText = speedFour

let lineOnePosition = lineOne.clientWidth
let lineTwoPosition = lineTwo.clientWidth
let lineThreePosition = lineThree.clientWidth
let lineFourPosition = lineFour.clientWidth

let maxResult = 25

let winner = ""

startGame.onclick = function startGame () {
    startGameBtn.style.display = 'none'
    restartGameBtn.style.display = 'block'
    
    setTimeout(function() {
        lineOnePosition += speedOne
        lineTwoPosition += speedTwo
        lineThreePosition += speedThree
        lineFourPosition += speedFour

        lineOne.style.width = `${lineOnePosition}px`
        lineTwo.style.width = `${lineTwoPosition}px`
        lineThree.style.width = `${lineThreePosition}px`
        lineFour.style.width = `${lineFourPosition}px`

        maxResult = Math.max(lineOnePosition, lineTwoPosition, lineThreePosition, lineFourPosition)

        if(maxResult < finish){
            startGame()
        } else if (maxResult >= finish) {
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

            console.log(`Thee winner is line ${winner}`)
        }
    }, 500)
}

restartGameBtn.onclick = function restartGame () {
    location.reload()
}
