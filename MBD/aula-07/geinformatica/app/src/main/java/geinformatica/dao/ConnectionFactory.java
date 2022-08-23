package geinformatica.dao;
import java.sql.*;
public class ConnectionFactory {
    
    public static Connection createConnection(){
        Connection connection;
        String driver = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/ge_informatica";
        String user = "root";
        String password= "root";
        try{
            Class.forName(driver);
            connection = DriverManager.getConnection(url, user, password);
            return connection;
        }catch(ClassNotFoundException | SQLException e){
            System.out.println("Erro na conexão");
            return null;
        }
    }
    
    public static Boolean closeConnection(Connection connection){
        try{
            connection.close();
            return true;
        }catch(SQLException e){
            return false;
        }
        
    }
}
