import * as React from "react";
import {
  Grid,
  Box,
  CssBaseline,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useState, useEffect } from "react";
import { getData } from "../services/Data";
// import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
// import TableCell from '@mui/material/TableCell';
// import Checkbox from '@mui/material/Checkbox';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper";
import Pagination from "./Pagination";
import Edit from "./Edit";
import logo from "./images/Group 20399.svg";
import logo1 from "./images/logo.svg";
import Button from "@mui/material/Button";

function MyGrid() {
  const [data, setData] = useState([]);
  const [p, setTable] = useState({
    invoice_currency: "",
    cust_payment_terms: "",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount] = useState(0);
  useEffect(async () => {
    setData(await getData());
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const checkHandler = (e, invoice_currency) => {
    let edit = data.filter((p) => p.invoice_currency == invoice_currency)[0];
    setTable(edit);
  };

  //        const handleClickOpen = () => {
  //    setOpen(true);
  //  };
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  } 
  
  const editHandler = () => {
    setOpen(true);
    
  };
  const handleClose = () => {
    setOpen(false);
  };
  /* useEffect(async function(){
          let data = await getData(page,rowsPerPage);
          setData(data['data']);
          setCount(data['count']);
        },[rowsPerPage,page]);*/
  return (
    <>
      <div class="logo-flex">
        <div class="logo-item">
          <img src={logo} />
        </div>
        <div class="logo-item1">
          <img src={logo1} />
        </div>
      </div>
      <div class="wrapper">
        <div class="button-container">
          <div class="search-box">
            <input
              class="search-txt"
              type="text"
              name=""
              id="search-inv"
              placeholder="Search Customer Id"
            />
            <a class="search-btn" href="#"></a>
          </div>
          <Button className="txt" variant="outlined">
            <a className="btn">ADD</a>
          </Button>
          <Button className="txt" variant="outlined" onClick={editHandler} disabled={!agree}>
            <a className="btn">EDIT</a>
          </Button>
          <Button className="txt" variant="outlined">
            <a className="btn">DELETE</a>
          </Button>
        </div>

        <Edit handleClose={handleClose} open={open} />
        <div>
          <TableContainer className="table" component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>sl_no</TableCell>
                  <TableCell align="right">business_code</TableCell>
                  <TableCell align="right">cust_number</TableCell>
                  <TableCell align="right">clear_date</TableCell>
                  <TableCell align="right">buisness_year</TableCell>
                  <TableCell align="right">doc_id</TableCell>
                  <TableCell align="right">posting_date</TableCell>
                  <TableCell align="right">document_create_date</TableCell>
                  <TableCell align="right">document_create_date1</TableCell>
                  <TableCell align="right">due_in_date</TableCell>
                  <TableCell align="right">invoice_currency</TableCell>
                  <TableCell align="right">document_type</TableCell>
                  <TableCell align="right">posting_id</TableCell>
                  <TableCell align="right">area_business</TableCell>
                  <TableCell align="right">total_open_amount</TableCell>
                  <TableCell align="right">baseline_create_date</TableCell>
                  <TableCell align="right">cust_payment_terms</TableCell>
                  <TableCell align="right">invoice_id</TableCell>
                  <TableCell align="right">isOpen</TableCell>
                  <TableCell align="right">aging_bucket</TableCell>
                  <TableCell align="right">is_deleted</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((p) => (
                  <TableRow
                    key={p.sl_no}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="winter_internship">
                      <Checkbox
                        onClick={(e) => checkHandler(e, p.invoice_currency)}
                        id="agree" onChange={checkboxHandler}
                      />
                    </TableCell>
                    <TableCell component="th" scope="winter_internship">
                      {p.sl_no}
                    </TableCell>

                    <TableCell>{p.business_code}</TableCell>
                    <TableCell>{p.cust_number}</TableCell>
                    <TableCell>{p.clear_date}</TableCell>
                    <TableCell>{p.buisness_year}</TableCell>
                    <TableCell>{p.doc_id}</TableCell>
                    <TableCell>{p.posting_date}</TableCell>
                    <TableCell>{p.document_create_date}</TableCell>
                    <TableCell>{p.document_create_date1}</TableCell>
                    <TableCell>{p.due_in_date}</TableCell>
                    <TableCell>{p.invoice_currency}</TableCell>
                    <TableCell>{p.document_type}</TableCell>
                    <TableCell>{p.posting_id}</TableCell>
                    <TableCell>{p.area_business}</TableCell>
                    <TableCell>{p.total_open_amount}</TableCell>
                    <TableCell>{p.baseline_create_date}</TableCell>
                    <TableCell>{p.cust_payment_terms}</TableCell>
                    <TableCell>{p.invoice_id}</TableCell>
                    <TableCell>{p.isOpen}</TableCell>
                    <TableCell>{p.aging_bucket}</TableCell>
                    <TableCell>{p.is_deleted}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Pagination
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </>
  );
}
export default MyGrid;
