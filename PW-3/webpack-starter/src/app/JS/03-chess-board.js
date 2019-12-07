/* eslint-disable prefer-const */
function chessBoard(size) {
  let board = '';
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      board += (x + y) % 2 ? '#' : ' ';
    }
    board += '\n';
  }
  console.log(board);
}
chessBoard(8);
