
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
 * @author demon
 */
public class Registro extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * request servlet request peticiones por parte del cliente
     * response servlet response son las respuestas por parte del servidor
     
     * ServletException if a servlet-specific error occurs
     * IOException if an I/O error occurs
     */
    
    /* 
        El servlet para poderse conectar con la BD es necesario inicializar sus elementos, voy
        a necesitar de 3 objetos que vienen de las clase sql:
    */
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //Vamos a crear el metodo constructor
    
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
    
    protected void processRequest(HttpServletRequest request, 
    HttpServletResponse response)
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

            //manipular los datos del formulario
            
            String nom, appat, appmat, correo, ip, iph;
            int edad, puerto, puertoh;

            ip = request.getLocalAddr();
            puerto = request.getLocalPort();

            iph = request.getRemoteAddr();
            puertoh = request.getRemotePort();



            nom = request.getParameter("nombre");
            appat = request.getParameter("appat");
            appmat = request.getParameter("appmat");
            correo = request.getParameter("email");

            edad = Integer.parseInt(request.getParameter("edad"));
            
            
            
            try{
                
                //query para poder insertar los datos en la BD
                /* 
                    Insert into nombretabla (atributo, atributo, ...)
                    values ("valor1", 'valor2', valor3, ...)
                */
                
                String q = "insert into Mregistro (nom_usu, appat_usu, apmat_usu, edad_usu, email_usu)"
                        + "values ('"+nom+"', '"+appat+"','"+appmat+"', "+edad+", '"+correo+"' )";
                
                set.executeUpdate(q);
                
                
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Registro de Usuarios</title>"
                        + "<link rel=\"stylesheet\" href=\"CSS/estilo.css\">");            
                out.println("</head>");
                out.println("<body>");
                out.println(""
                        + "<h1>Registro Exitoso</h1>"
                        + "<br>"
                        + "<br>"
                        
                        + "<div class='datos1'>"
                            + "La IP Local es: "
                            + "<br>"+ip
                            + "<br>"
                            + "<br>"
                            + "La IP del host: "
                            + "<br>"+iph
                            + "<br>"
                            + "<br>"
                            + "Puerto Local: "
                            + "<br>" + puerto
                            + "<br>"
                            + "<br>"
                            + "Puerto Host:"
                            + "<br>" + puertoh
                            + "<br>"
                            + "<br>"
                        + "</div>"
                        + "<div class='datos2'>"
                            + "Tu nombre es: "
                            + "<br>" + nom
                            +"<br>"
                            + "<br>"
                            + "Tu Apellido Paterno es:"
                            + "<br>"+appat
                            + "<br>"
                            + "<br>"
                            + "Tu Apellido Materno es:"
                            + "<br>"+appmat
                            + "<br>"
                            + "<br>"
                            + "Tu Edad es:"
                            + "<br>"+edad
                            + "<br>"
                            + "<br>"
                            + "Tu correo electronico es:"
                            + "<br>"+correo
                        + "</div>");
                
                out.println(""
                        + "<br>"
                        + "<a href='index.html' class=\"link\">Regresar al Formulario</a>"
                        + "<br>"
                        + "<br>"
                        + "<a href='Consultar' class=\"link\" >Consultar Tabla General de Usuario</a>"
                        + "<br>"
                        + "<br>"
                        + "<a href='Modificar.html' class='link'>Modificar un Usuario</a>");
                out.println("</body>");
                out.println("</html>");
                
                System.out.println("Datos registrados en la tabla");
            
            }catch(Exception e){
                System.out.println("No se registraron los datos en la tabla");
                System.out.println(e.toString());
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Registro de Usuarios</title>");            
                out.println("</head>");
                out.println("<body>"
                        + "<h1>No se pudo registrar, hubo un error</h1>"
                        + "<a href='index.html'>Regresar al Formulario</a>"
                        + "<a href='Consultar'>Consultar Tabla General de Usuario</a");
                out.println("</body>");
                out.println("</html>");
            }
        }
        
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
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