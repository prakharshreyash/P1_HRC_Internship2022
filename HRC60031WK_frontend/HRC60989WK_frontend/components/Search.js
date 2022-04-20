import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./App.css";

export default function Search() {
    //const [open, setOpen] = React.useState(false);
    const [searchDocid, setsearchDocid] = React.useState("");
    const [searchInvoiceid, setsearchInvoiceid] = React.useState("");
    const [searchCustid, setsearchCustid] = React.useState("");
    const [searchBusinessyr, setsearchBusinessyr] = React.useState("");


    const [openSearch, setOpenSearch] = React.useState(false);
    const handleCloseSearch = () => {
        setOpenSearch(false);
    };
    const searchHandler = () => {
        setOpenSearch(true);
    };
    return (
        <div>
            <Button
                className="txt1"
                variant="outlined"
                onClick={searchHandler}
                size="large"

            >
                <a className="btn1">ADVANCE SEARCH</a>

            </Button>

            <Dialog open={openSearch} onClose={handleCloseSearch} sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "600px",
                        bgcolor:'#283A46',
                    },
                },
            }}>
                <DialogTitle  className="d">Advance Search</DialogTitle>
                <DialogContent >
                    {
                        <>
                            <br />
                            <div>
                                <Grid container spacing={2} >
                                    <Grid item xs={6}>
                                        <TextField
                                            autoFocus
                                            label="doc_id"
                                            value={searchDocid}
                                            onChange={(e) => setsearchDocid(e.target.value)}
                                            fullWidth
                                            placeholder="doc_id"
                                            type="text"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            autoFocus
                                            label="invoice_id"
                                            value={searchInvoiceid}
                                            onChange={(e) => setsearchInvoiceid(e.target.value)}
                                            fullWidth
                                            placeholder="invoice_id"
                                            type="text"
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br />
                            <div>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            autoFocus
                                            label="cust_number"
                                            value={searchCustid}
                                            onChange={(e) => setsearchCustid(e.target.value)}
                                            fullWidth
                                            placeholder="cust_number"
                                            type="text"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            autoFocus
                                            label="buisness_year"
                                            value={searchBusinessyr}
                                            onChange={(e) => setsearchBusinessyr(e.target.value)}
                                            fullWidth
                                            placeholder="buisness_year"
                                            type="text"
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <br />
                        </>
                    }
                </DialogContent>
                <DialogActions color="white">
                    <button className="sbtns1" align="left" width="50%" onClick={searchHandler}>
                        SEARCH
                    </button>
                    <button className="sbtns2" align="right" width="50%" onClick={handleCloseSearch}>CANCEL</button>

                </DialogActions>
            </Dialog>
        </div >

    );
}