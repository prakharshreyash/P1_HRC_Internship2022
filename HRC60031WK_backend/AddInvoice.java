package com.highradius.training;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import java.sql.*;
/**
 * Servlet implementation class AddInvoice
 */
@WebServlet("/AddInvoice")
public class AddInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap<Object,Object> Response =new HashMap<Object, Object>();
		try {
			String business_code =  request.getParameter("business_code");
			String customer_number = request.getParameter("customer_number");
			String clear_date = request.getParameter("clear_date");
			String business_year = request.getParameter("buisness_year");
			String doc_id = request.getParameter("doc_id");
			String posting_date = request.getParameter("posting_date");
			String document_create_date = request.getParameter("document_create_date");
			String due_date = request.getParameter("due_date");
			String invoice_currency = request.getParameter("invoice_currency");
			String document_type = request.getParameter("document_type");
			String posting_id = request.getParameter("posting_id");
			String total_open_amount = request.getParameter("total_open_amount");
			String baseline_create_date = request.getParameter("baseline_create_date");
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			String invoice_id = request.getParameter("invoice_id");
			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root");
			String query = "INSERT INTO winter_intership (business_code,customer_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_date,invoice_currency, document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) values (?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?)";
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, business_code);
			st.setString(2, customer_number);
			st.setString(3, clear_date);
			st.setString(4, business_year);
			st.setString(5, doc_id);
			st.setString(6,  posting_date);
			st.setString(7, document_create_date);
			st.setString(8, due_date);
			st.setString(9, invoice_currency);
			st.setString(10, document_type);
			st.setString(11, posting_id);
			st.setString(12, total_open_amount);
			st.setString(13, baseline_create_date);
			st.setString(14, cust_payment_terms);
			st.setString(15, invoice_id);
			st.executeUpdate();
			if(st.executeUpdate()>0)
				Response.put("insert",true);
			else
				Response.put("insert",false);
			Gson gson=new Gson();
			String jsonResponse=gson.toJson(Response);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.getWriter().append(jsonResponse);

		}
		catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
