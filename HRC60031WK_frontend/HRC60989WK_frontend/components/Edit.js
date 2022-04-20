import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function Edit({
  open,
  invoice_currency,
  cust_payment_terms,
  changeHandler,
  submitHandler,
  handleClose,
}) {
  //const [open, setOpen] = React.useState(false);
  const [editpayment, seteditpayment] = useState("");
  const[invoice,seteditinvoice]=useState("");
  return (
    <div>
     
      <Dialog open={open} onClose={handleClose} sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "550px",
            bgcolor:'#283A46', 
          },
        },
      }}>
        <DialogTitle className="d">Edit</DialogTitle>
        <DialogContent>
        {

          <>
            <br/>
          <Grid container spacing={4}>
            <Grid item xs={5}>
              <TextField
                name="Invoice Currency"
                label="Invoice Currency"
                type="text"
                id="editpayment"
                onChange={(e) => seteditinvoice(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="Customer Payment Terms"
                label="Customer Payment Terms"
                type="text"
                id="editpayment"
                onChange={(e) => seteditpayment(e.target.value)}
              />
            </Grid>
          </Grid>
        </>
        
       
}
        </DialogContent>
        <DialogActions>
          <div className="button">
            <button variant="outlined" className="ebtns1" onClick={() => handleClose(true)}>
              EDIT
            </button>
          </div>
          <div className="button1">
            <button variant="outlined" className="ebtns2"  onClick={() => handleClose(false)}>
              CANCEL
            </button>
          </div>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
