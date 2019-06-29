$(document).ready(function() {

    let wins = 0;
    let losses = 0;
    let currentscore = 0;
    let jewel1 = {}
    let jewel2 = {}
    let jewel3 = {}
    let jewel4 = {}
    let random = {}

    let randomizer = function(){
        jewel1.number = Math.floor(Math.random() * 3) + 1 
        jewel2.number = Math.floor(Math.random() * 10) + 1 
        jewel3.number = Math.floor(Math.random() * 20) + 1 
        jewel4.number = Math.floor(Math.random() * 30) + 1 
    }
 
    randomizer()

    let startGame = function() {
        random.number = Math.floor(Math.random() * 99) + 1  
        $("#randomnumber").text(random.number)
        $("#winslosses1").text("You have " + wins + " wins!")
        $("#winslosses2").text("You have " + losses + " losses!")
        $("#currentscore").text(currentscore)
    }

    startGame()

    let winGame = function() {
        wins++
        currentscore = 0
        startGame()
        randomizer()
       
    }

    let loseGame = function() {
        losses++
        currentscore = 0
        startGame()
        randomizer()
       
    }


   

    $(".jewel1").on("click", function() {
        console.log(jewel1.number)
        currentscore = currentscore + jewel1.number
        if (currentscore === random.number) {
            winGame()
        }
        if (currentscore > random.number) {
            loseGame()
        }
        $("#currentscore").text(currentscore)
    });


    $(".jewel2").on("click", function() {
        console.log(jewel2.number)
        currentscore = currentscore + jewel2.number
        if (currentscore === random.number) {
            winGame()
        }
        if (currentscore > random.number) {
            loseGame()
        }
        $("#currentscore").text(currentscore)
    });


    $(".jewel3").on("click", function() {
        console.log(jewel3.number)
        currentscore = currentscore + jewel3.number
        if (currentscore === random.number) {
            winGame()
        }
        if (currentscore > random.number) {
            loseGame()
        }
        $("#currentscore").text(currentscore)
    });


    $(".jewel4").on("click", function() {
        console.log(jewel4.number)
        currentscore = currentscore + jewel4.number
        if (currentscore === random.number) {
            winGame()
        }
        if (currentscore > random.number) {
            loseGame()
        }
        $("#currentscore").text(currentscore)
    });

});
