import Square from "./Square";
import { Grid } from "@mui/material";
const Board = ({ squares, onClick }: any) => {
  return (
    <Grid container spacing={1} style={{ width: "300px", margin: "auto" }}>
      {squares.map((square: any, index: any) => (
        <Grid item xs={4} key={index}>
          <Square value={square} onClick={() => onClick(index)} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Board;
