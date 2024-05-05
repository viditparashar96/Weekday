import { TextField } from "@mui/material";

const FilterInput = ({ name }) => {
  return (
    <TextField
      id="outlined-basic"
      label={name}
      variant="outlined"
      sx={{ m: 1, minWidth: 120 }}
      size="small"
    />
  );
};

export default FilterInput;
