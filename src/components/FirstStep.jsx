import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/firststyle.css";
import { useStepContext } from "../StepContext";

export default function FirstStep({ errorMessage }) {
  const { formdata, setFormdata } = useStepContext();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  return (
    <>
      <div className="formcontainer">
        <TextField
          required
          id="outlined-required"
          name="firstname"
          label="Firstname"
          value={formdata.firstname}
          style={{ marginBottom: "15px" }}
          onChange={handleOnchange}
        />
        <TextField
          required
          id="outlined-required"
          name="lastName"
          label="Lastname"
          value={formdata.lastName}
          style={{ marginBottom: "15px" }}
          onChange={handleOnchange}
        />
        <TextField
          required
          id="outlined-required"
          name="email"
          label="email"
          value={formdata.email}
          style={{ marginBottom: "15px" }}
          onChange={handleOnchange}
        />
        {/* <Button variant="outlined" className="nextButon">Next</Button>  */}
      </div>
    </>
  );
}
