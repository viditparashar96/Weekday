import CancelIcon from "@mui/icons-material/Cancel";
import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

interface MultiSelectProps {
  name: string;
  items: {
    label: string;
    value: string | number;
  }[];
  isMultiSelect?: boolean;
}
export default function MultiSelect({
  name,
  items,
  isMultiSelect,
}: MultiSelectProps) {
  const [selectedValues, setselectedValues] = useState([]);
  const [multiSelectedValues, setMultiSelectedValues] = useState<
    null | string[]
  >(null);
  console.log(selectedValues);
  console.log(multiSelectedValues);

  const [searchParams, setSearchParams] = useSearchParams();
  const handleSingleSelect = (e: any) => {
    const newValue = e.target.value;
    console.log("new value===<", name, newValue);
    if (name === "Min Exp" && newValue === "None") {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.delete(name);
      setSearchParams(updatedSearchParams.toString());
      return;
    }
    if (name === "Location" && newValue === "None") {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.delete(name);
      setSearchParams(updatedSearchParams.toString());
      return;
    }
    if (name === "Base pay" && newValue === "None") {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.delete(name);
      setSearchParams(updatedSearchParams.toString());
      return;
    }
    setselectedValues(newValue);
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set(name, newValue);
    setSearchParams(updatedSearchParams.toString());
  };

  const handleMultiSelect = (e: any) => {
    const newValue = e.target.value;
    setMultiSelectedValues(newValue);
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set(name, newValue.join(","));
    setSearchParams(updatedSearchParams.toString());
  };

  const handleOnDelete = (value: string) => {
    const updatedValues = multiSelectedValues?.filter((item) => item !== value);
    setMultiSelectedValues(updatedValues);
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set(name, updatedValues?.join(","));
    setSearchParams(updatedSearchParams.toString());
  };

  if (!isMultiSelect) {
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>{name}</InputLabel>
        <Select
          variant="standard"
          className="MuiSelect-standard"
          value={searchParams.get(name) || ""}
          onChange={(e: any) => handleSingleSelect(e)}
          input={<OutlinedInput label="Single Select" />}
        >
          {items.map((name) => (
            <MenuItem key={name.value} value={name.value}>
              {name.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  } else {
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>{name}</InputLabel>
        <Select
          variant="standard"
          className="MuiSelect-standard"
          multiple
          value={(searchParams.get(name) || "").split(",")}
          onChange={(e: any) => handleMultiSelect(e)}
          input={<OutlinedInput label="Multiple Select" />}
          renderValue={(selected) => (
            <Stack gap={1} direction="row" flexWrap="wrap">
              {selected?.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onDelete={() => handleOnDelete(value)}
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                />
              ))}
            </Stack>
          )}
        >
          {items.map((name) => (
            <MenuItem key={name.value} value={name.value}>
              {name.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}
