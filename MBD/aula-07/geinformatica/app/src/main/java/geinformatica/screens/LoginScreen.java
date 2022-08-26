package geinformatica.screens;

import geinformatica.dao.ConnectionFactory;
import geinformatica.entities.User;
import java.awt.Color;
import java.sql.*;

public class LoginScreen extends javax.swing.JFrame {

    public LoginScreen() {
        initComponents();
        setVisible(true);
    }
    
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        loginLabel = new javax.swing.JLabel();
        loginField = new javax.swing.JTextField();
        passwordLabel = new javax.swing.JLabel();
        passwordField = new javax.swing.JTextField();
        submitButton = new javax.swing.JButton();
        statusLabel = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("Tela de Login");
        setMaximumSize(new java.awt.Dimension(720, 110));
        setMinimumSize(new java.awt.Dimension(720, 110));
        setPreferredSize(new java.awt.Dimension(720, 110));
        getContentPane().setLayout(new java.awt.FlowLayout());

        loginLabel.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        loginLabel.setText("Login");
        getContentPane().add(loginLabel);

        loginField.setMinimumSize(new java.awt.Dimension(200, 32));
        loginField.setPreferredSize(new java.awt.Dimension(200, 32));
        loginField.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                loginFieldActionPerformed(evt);
            }
        });
        getContentPane().add(loginField);

        passwordLabel.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        passwordLabel.setText("Senha");
        getContentPane().add(passwordLabel);

        passwordField.setToolTipText("");
        passwordField.setMinimumSize(new java.awt.Dimension(200, 32));
        passwordField.setPreferredSize(new java.awt.Dimension(200, 32));
        passwordField.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                passwordFieldActionPerformed(evt);
            }
        });
        getContentPane().add(passwordField);

        submitButton.setText("Enviar");
        submitButton.setMinimumSize(new java.awt.Dimension(200, 32));
        submitButton.setPreferredSize(new java.awt.Dimension(200, 32));
        submitButton.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                submitButtonMouseClicked(evt);
            }
        });
        submitButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                submitButtonActionPerformed(evt);
            }
        });
        getContentPane().add(submitButton);

        statusLabel.setText("Status: Desconectado ");
        getContentPane().add(statusLabel);

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void loginFieldActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_loginFieldActionPerformed
    }//GEN-LAST:event_loginFieldActionPerformed

    private void passwordFieldActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_passwordFieldActionPerformed
    }//GEN-LAST:event_passwordFieldActionPerformed

    private void submitButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_submitButtonActionPerformed
        onSubmit();
    }//GEN-LAST:event_submitButtonActionPerformed

    private void submitButtonMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_submitButtonMouseClicked
    }//GEN-LAST:event_submitButtonMouseClicked

    private void onSubmit(){
        Connection connection = ConnectionFactory.createConnection();
        String userLogin = loginField.getText();
        String userPassword = passwordField.getText();
        
        String query = "SELECT * FROM USUARIOS WHERE LOGIN LIKE ? AND SENHA LIKE ?";
        PreparedStatement ps;
        try {
            ps = connection.prepareStatement(query);
            ps.setString(1, userLogin);
            ps.setString(2, userPassword);
            ps.execute();
            ResultSet result = ps.executeQuery();
            if(result.next()){
                
                Integer id = result.getInt("ID");
                String name = result.getString("NOME");
                String login = result.getString("LOGIN");
                String password = result.getString("SENHA");
                String phone = result.getString("TELEFONE");
                statusLabel.setText("Status: "+name+" conectado.");
                statusLabel.setForeground(new Color(44, 156, 73));
                
                User user = new User(id, name, login, password, phone);
                this.dispose();
                new HomeScreen(user);
            }else{
                statusLabel.setText("Status: Usuário não Existe");
                statusLabel.setForeground(Color.RED);
            }
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
            System.out.println("Não foi possível realizar a query");
        }
    }
    
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTextField loginField;
    private javax.swing.JLabel loginLabel;
    private javax.swing.JTextField passwordField;
    private javax.swing.JLabel passwordLabel;
    private javax.swing.JLabel statusLabel;
    private javax.swing.JButton submitButton;
    // End of variables declaration//GEN-END:variables
}
