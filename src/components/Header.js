import React from 'react'
import Button from "@mui/material/Button";
import { Stack } from '@mui/material';
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Header = ({setIsAdding}) => {
  return (
    <div className="header">
      <h1>Employee Management System</h1>
      <Stack
        direction="row"
        spacing={2}
      >
        <Button
          variant="contained"
          color="success"
          style={{ marginBlock: "20px" }}
          onClick={() => setIsAdding(true)}
          startIcon={<PersonAddIcon />}
        >
          New Employee
        </Button>
      </Stack>
    </div>
  );
}

export default Header