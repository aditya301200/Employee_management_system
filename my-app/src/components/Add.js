import React, {useState, useRef, useEffect} from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import '../App.css'
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

const Add = ({employees, setEmployees, setIsAdding}) => {


  const textInput = useRef(null);

  useEffect(()=> {
    textInput.current.focus();
  },[])

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
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
            ref={textInput}
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                  required
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
          </LocalizationProvider>

          <Button
            variant="contained"
            color="success"
            style={{ marginBlock: "20px" }}
            type="submit"
          >
            <SaveIcon />
            Add Employee
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Add