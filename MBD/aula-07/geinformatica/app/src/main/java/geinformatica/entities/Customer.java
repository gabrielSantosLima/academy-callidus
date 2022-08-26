package geinformatica.entities;

public class Customer {
    private Integer id;
    private String name;
    private String cpf;
    private String address;
    private String city;
    private String phone;
    private String email;

    public Customer(Integer id, String name, String cpf, String address, String city, String phone, String email) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.address = address;
        this.city = city;
        this.phone = phone;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
}
