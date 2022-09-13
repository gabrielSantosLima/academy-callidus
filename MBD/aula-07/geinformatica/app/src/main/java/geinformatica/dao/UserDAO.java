
package geinformatica.dao;

import geinformatica.entities.User;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UserDAO {    
    public void create(User user, Connection connection){
        try {
            String query = "INSERT INTO USUARIOS(NOME, LOGIN, SENHA, TELEFONE, PERFIL) VALUE(?,?,?,?,?)";
            PreparedStatement ps = connection.prepareStatement(query);
            ps.setString(0, user.getName());
            ps.setString(1, user.getLogin());
            ps.setString(2, user.getPassword());
            ps.setString(3, user.getPhone());
            ps.setString(4, user.getRole());
            ps.execute();
        } catch (SQLException ex) {
            System.out.println("Não foi possível completar a operação.");
            System.out.println(ex.getSQLState());
        }
    }
}
