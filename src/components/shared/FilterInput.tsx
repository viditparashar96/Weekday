import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterInput = ({ name }) => {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (e: any) => {
    if (e.target.value === "") {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.delete(name);
      setSearchParams(updatedSearchParams.toString());
    }
    setValue(e.target.value);
  };

  // Debounceing

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("value===>", value);
      if (value === "") return;
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.set(name, value);
      setSearchParams(updatedSearchParams.toString());
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <TextField
      id="outlined-basic"
      label={name}
      variant="outlined"
      sx={{ m: 1, minWidth: 120 }}
      size="small"
      onChange={handleChange}
    />
  );
};

export default FilterInput;
