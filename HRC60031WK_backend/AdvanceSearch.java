package com.highradius.training;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import java.sql.*;
/**
 * Servlet implementation class AdvanceSearch
 */
@WebServlet("/AdvanceSearch")
public class AdvanceSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvanceSearch() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap<Object,Object> Response =new HashMap<Object, Object>();
		ArrayList<pojo> Tables=new ArrayList<pojo>();
		try {
			String doc_id = request.getParameter("doc_id");
			String invoice_id = request.getParameter("invoice_id");
			String cust_number = request.getParameter("cust_number");
			String buisness_year = request.getParameter("buisness_year");
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root");
			String query = "select * from winter_internship where doc_id=?,invoice_id=?,cust_number=?,buisness_year=?";
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, doc_id);
			st.setString(2, invoice_id);
			st.setString(3, cust_number);
			st.setString(4, buisness_year);
			ResultSet rs = st.executeQuery();
			while(rs.next())
			{
				pojo p= new pojo(rs.getInt("sl_no"),rs.getString("business_code"),rs.getInt("cust_number"), rs.getString("clear_date"), rs.getString("buisness_year"), rs.getString("doc_id"), rs.getString("posting_date"), rs.getString("document_create_date"), rs.getString("document_create_date1"), rs.getString("due_in_date"), rs.getString("invoice_currency"), rs.getString("document_type"), rs.getInt("posting_id"), rs.getDouble("area_business"), rs.getDouble("total_open_amount"), rs.getString("baseline_create_date"), rs.getString("cust_payment_terms"), rs.getInt("invoice_id"), rs.getByte("isOpen"), rs.getString("aging_bucket"), rs.getByte("is_deleted"));
				Tables.add(p);
			}
			Response.put("tables",Tables);
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
