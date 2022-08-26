package geinformatica.entities;

import java.sql.Timestamp;

public class ServiceOrder {
    private Integer id;
    private Timestamp date;
    private String defect;
    private String technician;
    private Float price;
    private Integer customer_id;

    public ServiceOrder(Integer id, Timestamp date, String defect, String technician, Float price, Integer customer_id) {
        this.id = id;
        this.date = date;
        this.defect = defect;
        this.technician = technician;
        this.price = price;
        this.customer_id = customer_id;
    }
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public String getDefect() {
        return defect;
    }

    public void setDefect(String defect) {
        this.defect = defect;
    }

    public String getTechnician() {
        return technician;
    }

    public void setTechnician(String technician) {
        this.technician = technician;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(Integer customer_id) {
        this.customer_id = customer_id;
    }
    
}
