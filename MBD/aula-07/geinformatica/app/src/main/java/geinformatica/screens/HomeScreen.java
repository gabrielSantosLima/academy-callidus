package geinformatica.screens;

import geinformatica.entities.User;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;
import javax.swing.JOptionPane;

public class HomeScreen extends javax.swing.JFrame {

    public HomeScreen(User user) {
        initComponents();
        verifyIfIsAdmin(user);
        updateDate();
        updateUserGreetings(user);
        setVisible(true);
    }
    
    void verifyIfIsAdmin(User user){
        if(user.getRole().equals("admin")){
            reportMenu.setEnabled(true);
            usersMenuItem.setEnabled(true);
        }
    }
    
    private void updateUserGreetings(User user){
        userGreetingsLabel.setText("<html><body>Olá, " + user.getName() + ".<br>Seja bem-vindo!</body></html>");
    }
    
    private void updateDate(){
        Locale locale = new Locale("pt", "BR");
        DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.DEFAULT, locale);
        String dateText = dateFormat.format(new Date());
        dateLabel.setText("Hoje é " + dateText);
    }
    
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        desktopPanel = new javax.swing.JDesktopPane();
        mainPanel = new javax.swing.JPanel();
        userGreetingsLabel = new javax.swing.JLabel();
        dateLabel = new javax.swing.JLabel();
        menuBar = new javax.swing.JMenuBar();
        saveMenu = new javax.swing.JMenu();
        customersMenuItem = new javax.swing.JMenuItem();
        serviceOrderMenuItem = new javax.swing.JMenuItem();
        usersMenuItem = new javax.swing.JMenuItem();
        reportMenu = new javax.swing.JMenu();
        servicesMenuItem = new javax.swing.JMenuItem();
        helpMenu = new javax.swing.JMenu();
        aboutMenuItem = new javax.swing.JMenuItem();
        settingMenu = new javax.swing.JMenu();
        exitMenuItem = new javax.swing.JMenuItem();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("GeInformática");

        mainPanel.setMaximumSize(new java.awt.Dimension(215, 425));
        mainPanel.setMinimumSize(new java.awt.Dimension(215, 425));

        userGreetingsLabel.setFont(new java.awt.Font("Segoe UI", 1, 24)); // NOI18N
        userGreetingsLabel.setText("<html>\n<body>\nOLÁ BEM-VINDO, <br>\n</body>\n</html>\n");
        userGreetingsLabel.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        userGreetingsLabel.setMaximumSize(new java.awt.Dimension(200, 100));
        userGreetingsLabel.setMinimumSize(new java.awt.Dimension(200, 32));

        dateLabel.setFont(new java.awt.Font("Segoe UI", 0, 14)); // NOI18N
        dateLabel.setText("HOJE É DIA");

        javax.swing.GroupLayout mainPanelLayout = new javax.swing.GroupLayout(mainPanel);
        mainPanel.setLayout(mainPanelLayout);
        mainPanelLayout.setHorizontalGroup(
            mainPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(mainPanelLayout.createSequentialGroup()
                .addContainerGap()
                .addGroup(mainPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(mainPanelLayout.createSequentialGroup()
                        .addComponent(userGreetingsLabel, javax.swing.GroupLayout.PREFERRED_SIZE, 203, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addComponent(dateLabel, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
        );
        mainPanelLayout.setVerticalGroup(
            mainPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(mainPanelLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(userGreetingsLabel, javax.swing.GroupLayout.PREFERRED_SIZE, 99, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(dateLabel)
                .addContainerGap(294, Short.MAX_VALUE))
        );

        desktopPanel.setLayer(mainPanel, javax.swing.JLayeredPane.DEFAULT_LAYER);

        javax.swing.GroupLayout desktopPanelLayout = new javax.swing.GroupLayout(desktopPanel);
        desktopPanel.setLayout(desktopPanelLayout);
        desktopPanelLayout.setHorizontalGroup(
            desktopPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, desktopPanelLayout.createSequentialGroup()
                .addGap(0, 432, Short.MAX_VALUE)
                .addComponent(mainPanel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
        );
        desktopPanelLayout.setVerticalGroup(
            desktopPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(mainPanel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        saveMenu.setText("Cadastro");

        customersMenuItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_1, java.awt.event.InputEvent.CTRL_DOWN_MASK));
        customersMenuItem.setText("Clientes");
        customersMenuItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                customersMenuItemActionPerformed(evt);
            }
        });
        saveMenu.add(customersMenuItem);

        serviceOrderMenuItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_O, java.awt.event.InputEvent.CTRL_DOWN_MASK));
        serviceOrderMenuItem.setText("Ordens de Serviço");
        serviceOrderMenuItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                serviceOrderMenuItemActionPerformed(evt);
            }
        });
        saveMenu.add(serviceOrderMenuItem);

        usersMenuItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_U, java.awt.event.InputEvent.CTRL_DOWN_MASK));
        usersMenuItem.setText("Usuários");
        usersMenuItem.setEnabled(false);
        usersMenuItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                usersMenuItemActionPerformed(evt);
            }
        });
        saveMenu.add(usersMenuItem);

        menuBar.add(saveMenu);

        reportMenu.setText("Relatório");
        reportMenu.setEnabled(false);

        servicesMenuItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_S, java.awt.event.InputEvent.CTRL_DOWN_MASK));
        servicesMenuItem.setText("Serviços");
        reportMenu.add(servicesMenuItem);

        menuBar.add(reportMenu);

        helpMenu.setText("Ajuda");

        aboutMenuItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_H, java.awt.event.InputEvent.CTRL_DOWN_MASK));
        aboutMenuItem.setText("Sobre");
        aboutMenuItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                aboutMenuItemActionPerformed(evt);
            }
        });
        helpMenu.add(aboutMenuItem);

        menuBar.add(helpMenu);

        settingMenu.setText("Opções");

        exitMenuItem.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_F4, java.awt.event.InputEvent.ALT_DOWN_MASK));
        exitMenuItem.setText("Sair");
        exitMenuItem.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                exitMenuItemActionPerformed(evt);
            }
        });
        settingMenu.add(exitMenuItem);

        menuBar.add(settingMenu);

        setJMenuBar(menuBar);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(desktopPanel)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(desktopPanel)
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void customersMenuItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_customersMenuItemActionPerformed
    }//GEN-LAST:event_customersMenuItemActionPerformed

    private void exitMenuItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_exitMenuItemActionPerformed
        int option = JOptionPane.showConfirmDialog(this, "Você realmente deseja sair?", "Deseja sair?", JOptionPane.YES_NO_OPTION);
        if(option == JOptionPane.YES_OPTION){
            System.exit(0);
        }
    }//GEN-LAST:event_exitMenuItemActionPerformed

    private void serviceOrderMenuItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_serviceOrderMenuItemActionPerformed
    }//GEN-LAST:event_serviceOrderMenuItemActionPerformed

    private void aboutMenuItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_aboutMenuItemActionPerformed
        new AboutScreen();
    }//GEN-LAST:event_aboutMenuItemActionPerformed

    private void usersMenuItemActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_usersMenuItemActionPerformed
        this.add(new UserScreen());
    }//GEN-LAST:event_usersMenuItemActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JMenuItem aboutMenuItem;
    private javax.swing.JMenuItem customersMenuItem;
    private javax.swing.JLabel dateLabel;
    private javax.swing.JDesktopPane desktopPanel;
    private javax.swing.JMenuItem exitMenuItem;
    private javax.swing.JMenu helpMenu;
    private javax.swing.JPanel mainPanel;
    private javax.swing.JMenuBar menuBar;
    private javax.swing.JMenu reportMenu;
    private javax.swing.JMenu saveMenu;
    private javax.swing.JMenuItem serviceOrderMenuItem;
    private javax.swing.JMenuItem servicesMenuItem;
    private javax.swing.JMenu settingMenu;
    private javax.swing.JLabel userGreetingsLabel;
    private javax.swing.JMenuItem usersMenuItem;
    // End of variables declaration//GEN-END:variables
}
