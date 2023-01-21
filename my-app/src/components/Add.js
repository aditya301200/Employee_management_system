import React, {useState} from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import '../App.css'
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";

const Add = ({employees, setEmployees, setIsAdding}) => {

  const [value, setValue] = useState(null);

  const handleAdd = () => {
    //TODO
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
          />
          <TextField
            fullWidth
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
          />
          <TextField
            fullWidth
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
          />
          <TextField
            fullWidth
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
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
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