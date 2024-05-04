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
  console.log(selectedValues);

  if (!isMultiSelect) {
    return (
      <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 400 }}>
        <InputLabel>{name}</InputLabel>
        <Select
          sx={{ minHeight: 50 }}
          value={selectedValues}
          onChange={(e: any) => setselectedValues(e.target.value)}
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
      <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 400 }}>
        <InputLabel>{name}</InputLabel>
        <Select
          sx={{ minHeight: 50 }}
          multiple
          value={selectedValues}
          onChange={(e: any) => setselectedValues(e.target.value)}
          input={<OutlinedInput label="Multiple Select" />}
          renderValue={(selected) => (
            <Stack gap={1} direction="row" flexWrap="wrap">
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onDelete={() =>
                    setselectedValues(
                      selectedValues.filter((item) => item !== value)
                    )
                  }
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
