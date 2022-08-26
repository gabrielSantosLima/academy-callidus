package geinformatica.entities;

public class User {
    private Integer id;
    private String name;
    private String login;
    private String password;
    private String phone;

    public User(Integer id, String name, String login, String password, String phone) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
        this.phone = phone;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getId() {
        return id;
    }

    public String getLogin() {
        return login;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public String getPhone() {
        return phone;
    }
}
