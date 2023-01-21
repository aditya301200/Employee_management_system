import React, {useState} from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import '../App.css'

const Add = ({employees, setEmployees, setIsAdding}) => {

  const [value, setValue] = useState(null);

  const handleAdd = () => {
    //TODO
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <h1>Add Employees</h1>
        <Box
          sx={{
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="First Name"
            className="fullWidth"
          />
          <TextField
            fullWidth
            label="Last Name"
            className="fullWidth"
            type="text"
          />
          <TextField
            fullWidth
            label="Email"
            className="fullWidth"
            type="email"
          />
          <TextField
            fullWidth
            label="Salary"
            className="fullWidth"
            type="number"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={value}
              className='fullWidth'
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText={params?.inputProps?.placeholder}
                />
              )}
            />
          </LocalizationProvider>
        </Box>
      </form>
    </div>
  );
}

export default Add