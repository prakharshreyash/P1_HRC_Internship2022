import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from "react";
import { Data, getData, editInvoice, predict,addInvoice, deleteInvoice} from "../services/Data";

export default function Delete() {
  const [openDelete, setOpenDelete] =React.useState(false);

  const deleteHandler = async() => {
    setOpenDelete(true);
  };

  const handleCloseDelete = async() => {
    setOpenDelete(false);
    let response=await deleteInvoice(p.sl_no);
  };
  const [data, setData] = useState([]);
  useEffect(async function () {
    setData(await getData());
  }, []);
  const [p, setTable] = useState({
    sl_no:"",

  });

  return (
    <div>
      <Button className="txt" variant="outlined" onClick={deleteHandler}>
            <a className="btn">DELETE</a>
          </Button>
          
        <Dialog open={openDelete} onClose={handleCloseDelete} sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "400px",
            bgcolor:'#283A46', 
          },
        },
      }}>
        
        <DialogTitle className="d" >
          Delete Records?
        </DialogTitle>
        
        
        <DialogContent>
          <DialogContentText >
          Are you sure you want to delete these record[s]?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <button className='dbtns1' variant="outlined" onClick={() => handleCloseDelete(false)}>CANCEL</button>
          <button className='dbtns2' variant="outlined" onClick={() => handleCloseDelete(true)}>
            DELETE
          </button>
        
        </DialogActions>
      </Dialog>
    </div>
  );
}
