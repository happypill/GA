    window.onload=start;
    var boxes =document.getElementsByTagName("td");
    var boxes = document.getElementsByTagName("td");
    var turnText = document.querySelector(".playerTurn");
    var counter = 1;
    var winCounter = 0;
    var xMoves = [];
    var oMoves=[];
    var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
                              [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    event.style.borderRadius = '20px';
    event.className = 'animated bounceIn'
    //function start using listener
    function start(){
      addXandOListener();
      addResetListener();
    }
    function addXandOListener(){
       console.log('a');
       for(var i=boxes.length-1;i>=0;i--){
          boxes[i].addEventListener("click",addXorO);
       }
    }

    function addXorO(event){
       if (event.target.innerHTML.length === 0){
            if (counter % 2 === 0) {
                oMoves.push(parseInt(event.target.getAttribute("data-num")));
                event.target.innerHTML = "O";
                event.target.setAttribute("class","O");
                turnText.innerHTML = "It is X's turn";
                counter++;
                checkForWin(oMoves, "O");
            }
       else {
             xMoves.push(parseInt(event.target.getAttribute("data-num")));
             event.target.innerHTML = "X";
             event.target.setAttribute("class","X");
             turnText.innerHTML = "It is O's turn";
             counter++;
             checkForWin(xMoves, "X");
            }
        // if the counter is greater than or equal to 10, the game is a draw!
        if (counter >= 10){
            turnText.innerHTML = "Game Over!";
             var conf = confirm("It's a draw, do you want to play again?");
             if(conf){
                resetBoard();
             }
        }
       }
    }

    function checkForWin(moveArray,name){
        for(i=0;i<winningCombinations.length;i++){
            //reset WinCounter Each time
          winCounter=0;
          for(var j=0;i<winningCombinations.length;i++){
         //if number in winning combination array is === a numberin moves array,add to win Counter
          if(moveArray.indexOf(winningCombinations[i][j])!==-1){
                 winCounter++;
          } 
           if(winCounter===3){
             alert("GameOver, " + name + " wins!");
             resetBoard();
              }
            }
        }
    }
    //reset Listener
    function addResetListener(){
      console.log('reset');
      var resetButton=document.getElementById("reset")
      resetButton.addEventListener("click",resetBoard);
     }

    function resetBoard(){
       for(var i=boxes.length - 1;i>=0; i--){
       	boxes[i].innerHTML="";
       	boxes[i].setAttribute("class","clear");
       }
        oMoves=[];
        xMoves=[];
        winCounter=0;
        counter=1;
        turnText.innerHTML="It is X TURN";
    }
 




