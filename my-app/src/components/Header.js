import React from 'react'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Header = () => {
  return (
    <div>
      <h1>Employee Management System</h1>
      <Stack
        direction="row"
        spacing={2}
      >
        <Button
          variant="contained"
          color="success"
        >
					<PersonAddIcon />
          Add Employee
        </Button>
      </Stack>
    </div>
  );
}

export default Header