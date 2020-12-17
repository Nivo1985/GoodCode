// Google
// Staying on a Chess Board

//A chess board is an 8x8 grid. Given a knight at any position (x, y) and a number of moves k, we want to figure out after k random moves by a knight,
//the probability that the knight will still be on the chessboard. Once the knight leaves the board it cannot move again and will be considered off the board.

function ChanceToStayOnBoard(start_x, start_y, attempts) {
  let on = 0,
    off = 0;

  CountChance(start_x, start_y, attempts);

  function CountChance(curr_x, curr_y, n) {
    if (n === 0) {
      on++;
      return;
    }

    for (let x of [-1, 1]) {
      for (let y of [-2, 2]) {
        if (OnBoard(curr_x + x) && OnBoard(curr_y + y))
          CountChance(curr_x + x, curr_y + y, n - 1);
        else off++;

        if (OnBoard(curr_x + y) && OnBoard(curr_y + x))
          CountChance(curr_x + y, curr_y + x, n - 1);
        else off++;
      }
    }
  }

  function OnBoard(value) {
    return value >= 1 && value <= 8;
  }

  return { on: on, off: off };
}

let result = ChanceToStayOnBoard(2, 2, 2);
console.log(result);
