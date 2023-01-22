import React, {useState} from 'react'
import "../App.css";
import UpdateIcon from "@mui/icons-material/Update";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { Stack } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {

  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary
    }

    for(let i = 0; i < employees.length - 1; i++){
      if(employees[i].id === id){
        employees.splice(i,1,employee)
        break;
      }
    }
    setEmployees(employees);
    setIsEditing(false)

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${firstName} ${lastName}'s data has been Updated`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Add Employees
        </h1>
        <Box
          sx={{
            maxWidth: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginInline: "auto",
          }}
        >
          <TextField
            fullWidth
            required
            label="First Name"
            className="fullWidth"
            InputLabelProps={{ className: "textField" }}
            sx={{
              input: { color: "#fff" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            fullWidth
            required
            label="Last Name"
            className="fullWidth"
            type="text"
            InputLabelProps={{ className: "textField" }}
            sx={{
              input: { color: "#fff" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            fullWidth
            required
            label="Email"
            className="fullWidth"
            type="email"
            InputLabelProps={{ className: "textField" }}
            sx={{
              input: { color: "#fff" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            required
            label="Salary"
            className="fullWidth"
            type="number"
            InputLabelProps={{ className: "textField" }}
            sx={{
              input: { color: "#fff" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              openTo='day'
              inputFormat="DD/MM/YYYY"
              views={["day", "month", "year"]}
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  // required
                  {...params}
                  InputLabelProps={{ className: "textField" }}
                  sx={{
                    svg: { color: "#fff" },
                    input: { color: "#fff" },
                    marginBottom: "20px",
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider> */}

          <Stack
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            spacing={2}
          >
            <Button
              variant="contained"
              color="success"
              style={{ marginBlock: "20px", width: "40%" }}
              type="submit"
              startIcon={<UpdateIcon />}
            >
              Update Info
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ marginBlock: "20px", width: "40%" }}
              startIcon={<CancelIcon />}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </form>
    </div>
  );
};

export default Edit