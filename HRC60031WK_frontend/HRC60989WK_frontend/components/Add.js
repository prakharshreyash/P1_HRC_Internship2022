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
import { red } from "@mui/material/colors";
import { color } from "@mui/system";

import { Data, getData, editInvoice, predict,addInvoice } from "../services/Data";

export default function Add() {
  const [business_code, setbusiness_code] = React.useState("");
  const [cust_number, setcust_number] = React.useState("");
  const [clear_date, setclear_date] = React.useState("");
  const [buisness_year, setbuisness_year] = React.useState("");
  const [doc_id, setdoc_id] = React.useState("");
  const [posting_date, setposting_date] = React.useState("");
  const [document_create_date, setdocument_create_date] = React.useState("");
  const [due_in_date, setdue_in_date] = React.useState("");
  const [invoice_currency, setinvoice_currency] = React.useState("");
  const [document_type, setdocument_type] = React.useState("");
  const [posting_id, setposting_id] = React.useState("");
  const [total_open_amount, settotal_open_amount] = React.useState("");
  const [baseline_create_date, setbaseline_create_date] = React.useState("");
  const [cust_payment_terms, setcust_payment_terms] = React.useState("");
  const [invoice_id, setinvoice_id] = React.useState("");

  const [openAdd, setOpenAdd] = React.useState(false);
  const addHandler = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  const submitHandler=async(e)=>{
    e.preventDefault();
    let response = await addInvoice(p);
    if(response)
    {
      setTable({
        invoice_currency: "",
        cust_payment_terms: "",
        business_code: "",
        clear_date: "",
        posting_date: "",
        document_create_date: "",
        due_in_date: "",
        doc_id:"",
        document_type: "",
        posting_id: "",
        total_open_amount: "",
        baseline_create_date: "",
        invoice_id:"",
        cust_number:"",
        buisness_year:"",
    
      });
    }
    
  }
  const [data, setData] = useState([]);
  useEffect(async function () {
    setData(await getData());
  }, []);
  const [p, setTable] = useState({
    invoice_currency: "",
    cust_payment_terms: "",
    business_code: "",
    clear_date: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    doc_id:"",
    document_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: "",
    invoice_id:"",
    cust_number:"",
    buisness_year:"",

  });

  

  return (
    <div>
      <Button className="txt" variant="outlined"  onClick={setOpenAdd} >
        <a className="btn">ADD</a>
      </Button>
     
      <Dialog open={openAdd} onClose={handleCloseAdd} sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "1300px",
            bgcolor:'#283A46', 
          },
        },
      }}>
      
        <DialogTitle  className="d">ADD</DialogTitle>
        
        <DialogContent>
          {
            <>
            <br/>
              <div>
                <Grid container spacing={2} >
                  <Grid item xs={3} >
                    <TextField 
                      autoFocus
                      label="Business Code"
                      value={business_code}
                      onChange={(e) => setbusiness_code(e.target.value)}
                      fullWidth
                      placeholder="business_code"
                      
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="cust_number"
                      value={cust_number}
                      onChange={(e) => setcust_number(e.target.value)}
                      fullWidth
                      placeholder="cust_number"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="clear_date"
                      value={clear_date}
                      onChange={(e) => setclear_date(e.target.value)}
                      fullWidth
                      placeholder="clear_date"
                      type="text"

                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="buisness_year"
                      value={buisness_year}
                      onChange={(e) => setbuisness_year(e.target.value)}
                      fullWidth
                      placeholder="buisness_year"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </div>
              <br />
              <div>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="doc_id"
                      value={doc_id}
                      onChange={(e) => setdoc_id(e.target.value)}
                      fullWidth
                      placeholder="doc_id"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="posting_date"
                      value={posting_date}
                      onChange={(e) => setposting_date(e.target.value)}
                      fullWidth
                      placeholder="posting_date"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="document_create_date"
                      value={document_create_date}
                      onChange={(e) => setdocument_create_date(e.target.value)}
                      fullWidth
                      placeholder="document_create_date"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="due_in_date"
                      value={due_in_date}
                      onChange={(e) => setdue_in_date(e.target.value)}
                      fullWidth
                      placeholder="due_in_date"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </div>
              <br />
              <div>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="invoice_currency"
                      value={invoice_currency}
                      onChange={(e) => setinvoice_currency(e.target.value)}
                      fullWidth
                      placeholder="invoice_currency"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="document_type"
                      value={document_type}
                      onChange={(e) => setdocument_type(e.target.value)}
                      fullWidth
                      placeholder="document_type"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="posting_id"
                      value={posting_id}
                      onChange={(e) => setposting_id(e.target.value)}
                      fullWidth
                      placeholder="posting_id"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="total_open_amount"
                      value={total_open_amount}
                      onChange={(e) => settotal_open_amount(e.target.value)}
                      fullWidth
                      placeholder="total_open_amount"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </div>
              <br />
              <div>
                <Grid container spacing={2}>

                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="baseline_create_date"
                      value={baseline_create_date}
                      onChange={(e) => setbaseline_create_date(e.target.value)}
                      fullWidth
                      placeholder="baseline_create_date"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="cust_payment_terms"
                      value={cust_payment_terms}
                      onChange={(e) => setcust_payment_terms(e.target.value)}
                      fullWidth
                      placeholder="cust_payment_terms"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      autoFocus
                      label="invoice_id"
                      value={invoice_id}
                      onChange={(e) => setinvoice_id(e.target.value)}
                      fullWidth
                      placeholder="invoice_id"
                      type="text"
                    />
                  </Grid>

                </Grid>
              </div>
            </>
          }
        </DialogContent>
      
        <DialogActions>
          <button className="abtns1" align="right" onClick={submitHandler}>
            ADD
          </button>
          <button className="abtns2" onClick={handleCloseAdd}>CANCEL</button>

        </DialogActions>
      </Dialog>
    </div >
    

  );
}