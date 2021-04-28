

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Array;
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


public class Modificar extends HttpServlet {
    
    
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

    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
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
        
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            
            /* TODO output your page here. You may use following sample code. */
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Modificar</title>"
                    + "<link rel=\"stylesheet\" href=\"CSS/estilo.css\">");     
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Modificar Datos</h1>");
            
            
            int id, edad;
            String nombre, appat, apmat, correo; 
            
            
            //Filtro los datos en blanco
            
            try{
                
                id = Integer.parseInt(request.getParameter("id"));
                edad = Integer.parseInt(request.getParameter("edad")); 
                nombre = request.getParameter("nombre");
                appat = request.getParameter("appat");
                apmat = request.getParameter("appmat");
                correo = request.getParameter("email"); 
            /*
                Para poder Modificar es:
                update tabla set columnaAModificar = variable1 where columnaKey = variable2
            
                UPDATE mregistro SET appat_usu = variable1 where id_usu = variable2
            */
            
                //Aqui editare la base de datos 
                
            String q = "update mregistro set nom_usu='"+nombre+"',appat_usu='"+appat+"',apmat_usu='"+apmat+"'"
                        + ",edad_usu='"+edad+"', email_usu='"+correo+"'  where id_usu='"+id+"'    ";
            
            
            set.executeUpdate(q);
                
            
            
            System.out.println("Datos modificados con exito");
            out.println("<h1>Se ha modificado correctamente al Usuario</h1>");
            
                
                
            }catch(Exception e){
                System.out.println("Error al modificar la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.toString());
                
                
                out.println(""
                        + "<br>"
                        + "<h1>Hubo un Error, Asegurese de llenar bien los datos </h1>");
            }
            
            out.println(""
                    + "<br>"
                    + " <a href='Modificar.html' class=\"link\">Intertarlo Otra vez</a> "
                    + "<br>" 
                    + "<a href='index.html' class=\"link\">Registrar Nuevo Usuario</a>\n" 
                    + "<br>" 
                    + "<a href='Consultar' class=\"link\">Consultar Tabla General de Usuario</a>");
                    
            out.println("</body>");
            out.println("</html>");
            
            
        }
        
        
        
        
        
        
         
    }

   //Método destructor
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
