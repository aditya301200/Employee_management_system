import React, {useState} from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import '../App.css'
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { Stack } from '@mui/material';
import CancelIcon from "@mui/icons-material/Cancel";


const Add = ({employees, setEmployees, setIsAdding}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random()*10**14);
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
    }
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false)

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added`,
      timer: 1500,
     });
  }

  const handleCancel = () => {
    setIsAdding(false)
  }



  return (
    <div>
      <form onSubmit={handleAdd}>
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
            sx={{ width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
            spacing={2}
          >
            <Button
              variant="contained"
              color="success"
              style={{ marginBlock: "20px", width: '40%' }}
              type="submit"
              startIcon={<SaveIcon />}
            >
              Add Employee
            </Button>
            <Button
              variant='contained'
              color='error'
              style={{marginBlock: '20px', width: '40%'}}
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
}

export default Add