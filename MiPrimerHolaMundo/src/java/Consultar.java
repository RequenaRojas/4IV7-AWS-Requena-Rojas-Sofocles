/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//Encargada de poder realizar la conexión con la BD
import java.sql.Connection;
import java.sql.DriverManager;
//Encargada de poder reaalizar las sentencias sql, creat, insert, delete, drop, update
import java.sql.Statement;
//Encrgada de poder realizar las consultas a la BD
import java.sql.ResultSet;
import javax.servlet.ServletConfig;

public class Consultar extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    public void init(ServletConfig cfg) throws ServletException{
        String url = "jdbc:mysql://localhost/registro4iv7";
                    //driver:gestorBD:puerto//DirecciónIP/nombredelaBD
                    //jdbc:postgresql://THE_HOST/THE_DATABASE
        
        String userName = "root";
        String password = "gallinaAtomica";
        
        try{
           
            Class.forName("com.mysql.jdbc.Driver");
            
            /* 
                A veces el Driver ya maneja por defecto el puerto de comunicación, es por ello que puede
                mandar un error, en ese caso
                
                url = "jdbc:mysql://localhost/registro4iv7";
            */
            
            con = DriverManager.getConnection(url, userName, password);
            set = con.createStatement();
            
            System.out.println("Se ha conectado a la BD");
            
        }catch(Exception e){
            System.out.println("No se ha conectado a la BD");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        }
    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Consultar</title>"
                    + "<link rel=\"stylesheet\" href=\"CSS/estilo.css\">");            
            out.println("</head>");
            out.println("<body>");
            out.println(""
                    + " <h1 class='consulta'>Tabla General de Usuarios</h1>"
                    + "<br>"
                    + "<div class='tablaConsulta'>"
                        + "<table border='2'>"
                            + "<thead>"
                                + "<tr>"
                                    + "<th>ID</th>"
                                    + "<th>Nombre Completo</th>"
                                    + "<th>Edad</th>"
                                    + "<th>Correo</th>"
                                + "</tr>"
                            + "</thead>"
                            + "<tbody>");
            try{
                
                String nom, appat, appmat, correo,q;
                int edad,id;
                
                q = "select * from mregistro";
                
                set = con.createStatement();
                rs = set.executeQuery(q);
                
                while(rs.next()){
                    id = rs.getInt("id_usu");
                    nom = rs.getString("nom_usu");
                    appat = rs.getString("appat_usu");
                    appmat = rs.getString("apmat_usu");
                    edad= rs.getInt("edad_usu");
                    correo = rs.getString("email_usu");
                    out.println("<tr>"
                            + "<td>"+id+"</td>"
                            + "<td>"+nom+" "+appat+" "+appmat+"</td>"
                            + "<td>"+edad+"</td>"
                            + "<td>"+correo+"</td>"
                            + "</tr>");
                }
                
                System.out.println("Consulta exitosa");
                rs.close();//Cierro la consulta
                set.close(); //Cierro la sentencia
                
                
            }catch(Exception e){
                System.out.println("Error al consultar la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.toString());
                
            }
            
            out.println(""
                            + "</tbody>"
                        + "</table>"
                    + "</div>"
                    + "<br>"
                    + "<br>"
                    + "<a href='index.html' class=\"link\">Regresar al Formulario</a>"
                    +"</body>");
                out.println("</html>");
        }
        
        
        
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }
    
    //Método destructor
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
