import * as React from 'react';
import Button from '@mui/material/Button';
import koins from '../image/koins.png';
import InputAdornment from '@mui/material/InputAdornment';
import PasswordInput from './password';
import EmailInput from './email';
import BasicButtons from './button';
import { useState } from 'react';


function Form(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  
    return(
      
        <form>
          <div className="right-section">
            <img src={koins} alt="KO innovation Logo" className="koins" />
          
            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />

          
          
          <BasicButtons onClick={handleSubmit}/>

          
        </div>
        </form>
    )
}
export default Form;