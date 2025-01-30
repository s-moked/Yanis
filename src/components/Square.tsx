import { Button } from "@mui/material";
const Square = ({ value, onClick }: any) => {
  return (
    <Button
      variant="outlined"
      style={{ width: "100%", height: "100px" }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};
export default Square;
