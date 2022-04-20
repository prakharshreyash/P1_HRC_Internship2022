
import axios from "axios"

export const getData=async ()=>
{
    let response=await axios.get("http://localhost:8080/backend/DataLoading");
    let data=response.data.tables;
    //console.log(response.data.tables);
   data.map((p,index)=>({...p,"sl_no":index}));
  return data;
}
export const addInvoice = async ({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id}) => {
  let str="business_code" + business_code + "cust_number" + cust_number + "clear_date" + clear_date + "buisness_year" + buisness_year + "doc_id" + doc_id + "posting_date" + posting_date + "document_create_date" + document_create_date + "due_in_date" + due_in_date + "invoice_currency" + invoice_currency + "document_type" + document_type + "posting_id" + posting_id + "total_open_amount" + total_open_amount + "baseline_create_date" + baseline_create_date + "cust_payment_terms" + cust_payment_terms + "invoice_id" + invoice_id;
  let response = await axios.get("http://localhost:8080/backend/AddInvoice" + str);
  return response.data;
}

export const editInvoice = async ({invoice_currency,cust_payment_terms}) => {
  let str="invoice_currency=" + invoice_currency + "&cust_payment_terms" + cust_payment_terms;
  let response = await axios.get("http://localhost:8080/backend/EditInvoice" + str);
  return response.data;
}

export const deleteInvoice = async (sl_no) => {
  let str="sl_no=" + sl_no;
  let response = await axios.get("http://localhost:8080/backend/DeleteInvoice" + str);
  return response.data;
}
export const predict = async () => {
  
  let response = await axios.get("http://127.0.0.1:5000/predict");
  console.log(response.data);
}




