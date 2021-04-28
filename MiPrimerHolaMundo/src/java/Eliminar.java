
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

/**
 *
 * @author sofo9
 */
public class Eliminar extends HttpServlet {
    
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

   //ProcessRequest
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    //DoGet
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    //DoPost
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet eliminar</title>"
                    + "<link rel=\"stylesheet\" href=\"CSS/estilo.css\">");            
            out.println("</head>");
            out.println("<body>");
            
            int id;
            id = Integer.parseInt(request.getParameter("ideliminar"));
            
            /*
                Para poder Eliminar es:
                delete from nombretabla where atributo (condicion) valor
            */
            String q = "delete from mregistro where id_usu = "+id;
            
            try{
                
                set.executeUpdate(q);
                System.out.println("Registro eliminado con exito");
                out.println("<h1>Registro Eliminado</h1>");
            }catch(Exception e){
                System.out.println("Error al eliminar el registro");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<h1>Registro No Eliminado, Sucedio un Error</h1>");
            }
                    
            
            out.println("<br>"
                    + "<br>"
                    + "<a href='index.html' class=\"link\">Registrar Nuevo Usuario</a>"
                    + "<br>"
                    + "<br>"
                    + "<a href='Consultar'>Consultar Tabla General de Usuario</a");
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
