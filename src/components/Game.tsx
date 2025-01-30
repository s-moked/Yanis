import React from "react";
import Board from "./Board";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
const Game = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = React.useState(true);
  const [winner, setWinner] = React.useState(null);
  const [isDisabled, setIsDisabled] = React.useState(true);
  React.useEffect(() => {
    let newWinner = calculateWinner(board);
    if (newWinner == "X") {
        newWinner = "Le gagnant est le joueur 1";
      setWinner(newWinner);
      setIsDisabled(false);
    }else if (newWinner == "O") {
        newWinner = "Le gagnant est le joueur 2";
      setWinner(newWinner);
      setIsDisabled(false);
    }else if (board.every((square) => square)) {
        newWinner = "Match nul";
        setWinner(newWinner);
        setIsDisabled(false)
    }
  }, [board]);


  const handleClick = (index: any) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  const handleClickRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsDisabled(true);
  }
  const calculateWinner = (squares: any) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] && squares[b] && squares[c] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  return (
    <div>
      <Typography variant="h3">Morpion</Typography>
      <Typography variant="h4">Le Joueur 1 joue les "X" et le joueur 2 joue les "O"</Typography>
      {!winner && <Typography variant="h4">C'est au joueur {isXNext ? "1" : "2"} de jouer</Typography>}
      <Board squares={board} onClick={handleClick} />
      {winner && <Typography variant="h4">{winner}</Typography>}
      <Button disabled={isDisabled} onClick={handleClickRestart}>Restart</Button>
    </div>
  );
};
export default Game;
