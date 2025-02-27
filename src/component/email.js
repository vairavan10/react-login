import React from "react";
import { TextField } from "@mui/material";

const EmailInput = ({value,onChange}) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      label="Email"
      type="email"
      variant="outlined"
      value={value}
      onChange={onChange}
      sx={{
        width: "400px", // Set custom width
        fontSize: "18px", // Increase text size
        input: { padding: "14px", fontSize: "18px" }, // Adjust padding
      }}
    />
  );
};

export default EmailInput;
