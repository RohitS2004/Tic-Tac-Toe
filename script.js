// Declaring Variables
let startButton = document.getElementById("startButton")
let gameButton = document.querySelectorAll(".gameButton")
let turn = "X"
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let footerDisplay = document.querySelector(".display")
let defaultStr = "'s turn"
let gameStart= new Audio("music.mp3")
let buttonClick = new Audio("click3.mp3")
let gameWinSound = new Audio("winning.mp3")
let gameDraw = new Audio("draw.mp3")
let playerName = ""
let isgameover = false

// Function for changing the turn 
const changeTurn = () => {
    return turn === "X"? "O" : "X";
}

// Game winning Logic and Game Draw Logic
const gameWin = () =>{
    let boxText = document.querySelectorAll(".gameButton")
    wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    // console.log(boxText)
    wins.forEach(e =>{
        if (boxText[e[0]].innerHTML === boxText[e[1]].innerHTML && boxText[e[2]].innerHTML === boxText[e[1]].innerHTML && boxText[e[0]].innerHTML !== ""){
            footerDisplay.innerHTML = playerName + " has won the game..."
            console.log(playerName)
            isgameover = true
            gameStart.pause()
            gameWinSound.play()
        }
    })
}


// Function to change the dislay text on the footer display
const nameChangeOnFooterDisplay = () =>{
    return playerName === player1.value ? player2.value : player1.value;
}


// Game Logic 
startButton.addEventListener("click", function(){
    if(startButton.innerHTML == "Start"){
        startButton.innerHTML = "Reset"
        // startButton.style.background = "lavender";
        gameStart.play()
        buttonClick.play()
        playerName = player1.value 
        footerDisplay.innerHTML = playerName + defaultStr
        let bucket = 1
        Array.from(gameButton).forEach(element => {
            element.addEventListener("click", function(){
                buttonClick.play()
                element.innerHTML = turn
                gameWin()
                if (bucket == 9){
                    footerDisplay.innerHTML = "Game Draw..."
                    gameStart.pause()
                    gameDraw.play()
                    return
                }
                if (!isgameover){
                    turn = changeTurn()
                    playerName = nameChangeOnFooterDisplay()
                    footerDisplay.innerHTML = playerName + defaultStr
                }
                console.log(bucket)
                bucket = bucket + 1
            })
        })
    }else{
        startButton.innerHTML = "Start";
        window.location.reload(); // To reload the whole game
        
    }
})
