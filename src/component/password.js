import React, { useState } from "react";
import {
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordInput = ({value, onChange}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <FormControl
      fullWidth
      margin="normal"
      variant="outlined"
      
      sx={{
        width: "400px", // Adjust width
        "& .MuiOutlinedInput-root": {
          fontSize: "18px",
          paddingRight: "14px", // Ensure padding inside
        },
      }}
    >
      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        id="password"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              edge="end"
              sx={{ padding: "5px" }} // Reduce padding for better alignment
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        sx={{
          paddingRight: "40px", // Ensures enough space for the icon inside
          fontSize: "18px",
        }}
      />
    </FormControl>
  );
};

export default PasswordInput;
