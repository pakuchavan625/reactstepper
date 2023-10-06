import React from  "react";
import { Modal, Button } from "@mui/material";
import { useStepContext } from "../StepContext";

const PreviewModel = ({ open, onClose, onConfirm, edit }) => {
  const { formdata, formadata2 } = useStepContext();


  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ width: "500px", padding: "16px", background: "white" , textAlign:'center', position:'relative', left:'30%', top:'20%'}}>
        <h2>Review Your Data</h2>
        <p>First Name: {formdata.firstname}</p>
        <p>Last Name: {formdata.lastName}</p>
        <p>Email: {formdata.email}</p>
        <p>Address:{formadata2.addrees}</p>
        <p>city:{formadata2.city}</p>
        <p>Pin:{formadata2.pin}</p>
        <p>Gender:{formadata2.gender}</p>
        <p>PhoneNumber:{formadata2.phoneNumber}</p>
        {/* Add more fields as needed */}
        <Button variant="contained" color="primary" onClick={onConfirm} style={{marginRight:'5px'}}>
          Confirm
        </Button>
        <Button variant="contained" color="primary" onClick={edit}>
          Edit
        </Button>
      </div>
    </Modal>
  );
};

export default PreviewModel;
