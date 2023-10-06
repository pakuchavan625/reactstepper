import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "../styles/firststyle.css";
import { useStepContext } from "../StepContext";

const SecondStep = () => {
  const { formadata2, setFormData2 } = useStepContext();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData2({ ...formadata2, [name]: value });
  };

  const handleGenderChange = (e) => {
    setFormData2({ ...formadata2, gender: e.target.value });
  };

  return (
    <>
      <h2></h2>
      <div className="formcontainer">
        {/* <TextField required id="outlined-required" type='date' name='dob'  value={formdata2}  style={{marginBottom:'15px'}} onChange={handlechange}/> */}
        <TextField
          required
          id="outlined-required"
          type="text"
          name="addrees"
          label="address"
          value={formadata2.addrees}
          style={{ marginBottom: "15px" }}
          onChange={handlechange}
        />
        <TextField
          required
          id="outlined-required"
          type="text"
          name="city"
          label="city"
          value={formadata2.city}
          style={{ marginBottom: "15px" }}
          onChange={handlechange}
        />
        <TextField
          required
          id="outlined-required"
          type="text"
          name="pin"
          label="pin"
          value={formadata2.pin}
          style={{ marginBottom: "15px" }}
          onChange={handlechange}
        />
        {/* <TextField required id="outlined-required" type='text' name="gender" label="gender"  value={formadata2.gender} style={{marginBottom:'15px'}}  onChange={handlechange}/> */}
        <TextField
          required
          id="outlined-required"
          type="text"
          name="phoneNumber"
          label="ContactNo"
          value={formadata2.phoneNumber}
          style={{ marginBottom: "15px" }}
          onChange={handlechange}
        />
        <Box sx={{ minWidth: 200, marginBottom: "10px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formadata2.gender}
              label="Gnder"
              onChange={handleGenderChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Transgender">Transgender</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* <Button variant="outlined" className="nextButon">Next</Button>  */}
      </div>
    </>
  );
};

export default SecondStep;
