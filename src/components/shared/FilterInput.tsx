import { TextField } from "@mui/material";

const FilterInput = ({ name }) => {
  return <TextField id="outlined-basic" label={name} variant="outlined" />;
};

export default FilterInput;
