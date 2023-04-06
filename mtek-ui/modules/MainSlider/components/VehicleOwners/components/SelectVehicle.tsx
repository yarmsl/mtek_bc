"use client";

import React from "react";

import MenuItem from "@/ui-kit/atoms/MenuItem";
import Select from "@/ui-kit/molecules/Select";

const options = [
  "10 т тент",
  "20 т тент",
  "10 т рефрижератор",
  "20 т рефрижератор",
];

const SelectVehicle: React.FC = () => {
  const [value, setValue] = React.useState("");
  return (
    <Select value={value} placeholder="Выбрать транспорт">
      {options.map((opt, i) => (
        <MenuItem key={i} value={opt} onClick={setValue}>
          {opt}
        </MenuItem>
      ))}
    </Select>
  );
};

export default React.memo(SelectVehicle);
