
import "./App.css";

import "./Edit";

import logo from "./images/Group 20399.svg";
import logo1 from "./images/logo.svg";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Box } from "@mui/material/Box";
import DataTable from "./DataTable";
import * as React from "react";
import Edit from "./Edit";
import { Typography } from "@mui/material";
import {
  Grid,
  CssBaseline,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

import { getData } from "../services/Data";

function App() {
  const [data, setData] = useState([]);

  const [count, setCount] = useState(0);
  useEffect(async () => {
    setData(await getData());
  }, []);

  return (
    <div>
      <DataTable />
      <div class="footer">
        <Typography style={{ color: "white" }} align="center">
          <a href="a.com">Privacy Policy </a>| © 2022 Highradius Corporation.
          All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
}
export default App;
