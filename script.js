$(function() {

    let gameStarted = false;

    $("#maze").mouseleave(gameOver);
    $(".boundary").mouseover(gameOver);
    $("#start").click(function() {          //when game started again!
        gameStarted = true;
        $(".boundary").removeClass("youlose");
        $("#status").text("Game started!")
    });
    $("#end").mouseenter(gameWin);

    function gameWin() {
        if (gameStarted) {
            $("#status").text("You win! :)");
            gameStarted = false;
        }
    }

    function gameOver() {
        if (gameStarted) {
            $(".boundary").addClass("youlose");
            $("#status").text("You Lost :(");
            gameStarted = false;
        }
    }
});