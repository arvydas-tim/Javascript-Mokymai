function restart() {
    setTimeout(function () {
      document.location.href = '';
    }, 3000);
  }
  
  function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
      const squere1 = squares[winningArrays[y][0]];
      const squere2 = squares[winningArrays[y][1]];
      const squere3 = squares[winningArrays[y][2]];
      const squere4 = squares[winningArrays[y][3]];
  
      if (squere1.classList.contains('player-one') && squere2.classList.contains('player-one') && squere3.classList.contains('player-one') && squere4.classList.contains('player-one')) {
        result.innerHTML = 'Player one wins!';
        restart();
      }
  
      if (squere1.classList.contains('player-two') && squere2.classList.contains('player-two') && squere3.classList.contains('player-two') && squere4.classList.contains('player-two')) {
        result.innerHTML = 'Player two wins!';
        restart();
      }
    }
  }
  
  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      if (squares[i + 7].classList.contains('taken') && !squares[i].classList.contains('taken')) {
        if (currentPlayer == 1) {
          squares[i].classList.add('taken');
          squares[i].classList.add('player-one');
          currentPlayer = 2;
          displayCurrentPlayer.innerHTML = currentPlayer;
        } else if (currentPlayer == 2) {
          squares[i].classList.add('taken');
          squares[i].classList.add('player-two');
          currentPlayer = 1;
          displayCurrentPlayer.innerHTML = currentPlayer;
        }
      } else {
        alert(`Can't go here!`);
      }
      checkBoard();
    };
  }