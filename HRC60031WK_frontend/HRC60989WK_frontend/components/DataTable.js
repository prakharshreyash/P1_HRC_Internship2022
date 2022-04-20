import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Data, getData, editInvoice, predict,addInvoice } from "../services/Data";
import IconButton from "@mui/material/IconButton";
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
  ButtonGroup,
} from "@mui/material";
import "./Edit";
import MyGrid from "./MyGrid";
import logo from "./images/Group 20399.svg";
import logo1 from "./images/logo.svg";
import Button from "@mui/material/Button";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import Edit from "./Edit";
import Delete from "./Delete";
import Add from "./Add";
import Search from "./Search";
import "./Search";
import Analytical from "./Analytical";
function DataTable(props) {
  const [data, setData] = useState([]);
  const columns = [
    { field: "sl_no", headerName: "sl_no" },
    { field: "business_code", headerName: "business_code", width: 200 },
    { field: "cust_number", headerName: "cust_number", width: 200 },
    { field: "clear_date", headerName: "clear_date", width: 200 },
    { field: "buisness_year", headerName: "business_year", width: 200 },
    { field: "doc_id", headerName: "doc_id", width: 200 },
    { field: "posting_date", headerName: "posting_date", width: 200 },
    {
      field: "document_create_date",
      headerName: "document_create_date",
      width: 200,
    },
    {
      field: "document_create_date1",
      headerName: "document_create_date1",
      width: 200,
    },
    { field: "invoice_currency", headerName: "invoice_currency", width: 200 },
    { field: "due_in_date", headerName: "due_in_date", width: 200 },
    { field: "document_type", headerName: "document_type", width: 200 },
    { field: "posting_id", headerName: "posting_id", width: 200 },
    { field: "area_business", headerName: "area_business", width: 200 },
    { field: "total_open_amount", headerName: "total_open_amount", width: 200 },
    {
      field: "baseline_create_date",
      headerName: "baseline_create_date",
      width: 200,
    },
    {
      field: "cust_payment_terms",
      headerName: "cust_payment_terms",
      width: 200,
    },
    { field: "invoice_id", headerName: "invoice_id", width: 200 },
    { field: "isOpen", headerName: "isOpen", width: 200 },
    { field: "aging_bucket", headerName: "aging_bucket", width: 200 },
    { field: "is_deleted", headerName: "is_deleted", width: 200 },
  ];
  const rows = data.map((row) => ({
    sl_no: row.sl_no,
    business_code: row.business_code,
    cust_number: row.cust_number,
    clear_date: row.clear_date,
    buisness_year: row.buisness_year,
    doc_id: row.doc_id,
    posting_date: row.posting_date,
    document_create_date: row.document_create_date,
    due_in_date: row.due_in_date,
    invoice_currency: row.invoice_currency,
    document_type: row.document_type,
    posting_id: row.posting_id,
    total_open_amount: row.total_open_amount,
    baseline_create_date: row.baseline_create_date,
    cust_payment_terms: row.cust_payment_terms,
    invoice_id: row.invoice_id,
    isOpen: row.isOpen,
    aging_bucket: row.aging_bucket,
    is_deleted: row.is_deleted,
  }));

  useEffect(async function () {
    setData(await getData());
  }, []);
  const checkHandler = (e, invoice_currency) => {
    if (e.target.checked) {
      let edit = data.filter((p) => p.invoice_currency == invoice_currency)[0];
      setTable(edit);
    }
  };

  const editHandler = () => {
    setOpen(true);
  };
  const handleClose = async (update) => {
    if (update) {
      let response = await editInvoice(p);
    }
    setOpen(false);
  };
  useEffect(async function () {
    setData(await predict());
  }, []);
 
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
  useEffect(async function () {
    setData(await getData());
  }, []);
  // const [openDelete, setOpenDelete] = useState(false);

  // const deleteHandler = () => {
  //   setOpenDelete(true);
  // };

  // const handleCloseDelete = () => {
  //   setOpenDelete(false);
  // };
  const [open, setOpen] = useState(false);

  const [selectBox, setselectBox] = useState([]);

  const [pageSize, setPageSize] = useState(5);

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

  const {
    invoice_currency,
    cust_payment_terms,
    business_code,
    doc_id,
    clear_date,
    posting_date,
    document_create_date,
    due_in_date,
    document_type,
    posting_id,
    total_open_amount,
    baseline_create_date,
    invoice_id,
    cust_number,
    buisness_year,
  } = p;
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
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
          <ButtonGroup>
            <Button className="txt1" variant="contained">
              <a className="btn1">PREDICT</a>
            </Button>

            <Search
              doc_id={doc_id}
              invoice_id={invoice_id}
              cust_number={cust_number}
              buisness_year={buisness_year}
            />

            <Button className="txt1" variant="outlined">
              <a className="btn1">ANALYTIC VIEW</a>
            </Button>
          </ButtonGroup>
          <IconButton
            aria-label="refresh"
            className="txt1"
            variant="outlined"
            onClick={refreshPage}
          >
            <RefreshRoundedIcon />
          </IconButton>
          <div class="search-box">
            <input
              className="search-txt"
              type="text"
              //name=""
              id="search-inv"
              placeholder="Search Customer Id"
            />
            <a class="search-btn" href="#"></a>
          </div>
        
          <ButtonGroup>
            <Add
              business_code={business_code}
              cust_number={cust_number}
              clear_date={clear_date}
              buisness_year={buisness_year}
              doc_id={doc_id}
              posting_date={posting_date}
              document_create_date={document_create_date}
              due_in_date={due_in_date}
              invoice_currency={invoice_currency}
              document_type={document_type}
              posting_id={posting_id}
              total_open_amount={total_open_amount}
              baseline_create_date={baseline_create_date}
              cust_payment_terms={cust_payment_terms}
              invoice_id={invoice_id}
            />
            <Button
              className="txt"
              variant="outlined"
              onClick={editHandler}
              disabled={!selectBox.length > 0}
            >
              <a className="btn">EDIT</a>
            </Button>

            <Delete />
            
          </ButtonGroup>
        </div>
        <Edit
          invoice_currency={invoice_currency}
          cust_payment_terms={cust_payment_terms}
          handleClose={handleClose}
          open={open}
        />

        <div style={{ height: 520, width: "100vw" }}>
          <DataGrid
            sx={{
              border: 0,
              "& .MuiDatGrid-cellCheckbox": {
                color: "white",
              },
              "& .MuiDataGrid-cellCheckboxInput": {
                color: "white",
              },
              "&.MuiDataGrid-columnHeaderTitle": {
                whiteSpace: "break-spaces",
                lineHeight: 1,
              },
              "& .MuiTablePagination-root": {
                color: "white",
              },
              "& . MuiDataGrid-iconSeparator": {
                color: "#2D4250",
              },

              "& .MuiButtonBase-root-MuiIconButton-root": {
                color: "white",
              },
              maxWidth: "1550px",
              color: "white",
            }}
            rows={rows}
            getRowId={(row) => row.sl_no}
            columns={columns}
            checkboxSelection
            onSelectionModalChange={(e) => checkHandler(e, p.invoice_currency)}
            //onSelectionModalChange={ (checkboxHandler)}
            onSelectionModelChange={(itm) => setselectBox(Object.values(itm))}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            pagination
          />
        </div>
      </div>
    </div>
  );
}

export default DataTable;
