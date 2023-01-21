import React from 'react'
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Header = () => {
  return (
    <div className='header'>
      <h1>Employee Management System</h1>
        <Button
          variant="contained"
          color="success"
          style={{marginBlock: '20px'}}
        >
					<PersonAddIcon />
          Add Employee
        </Button>
    </div>
  );
}

export default Header