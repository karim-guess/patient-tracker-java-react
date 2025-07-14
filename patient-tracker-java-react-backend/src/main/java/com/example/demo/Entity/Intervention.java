package com.example.demo.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

public class Intervention {
    
    @Id @GeneratedValue
    private Long id;

    private String description;
    private String date;

    @ManyToOne
    private Patient patient;
    
    @ManyToOne
    private Staff staff;

    @ManyToOne
    private Vehicule vehicule;

    public Intervention(Long id, String description, String date, Patient patient, Staff staff, Vehicule vehicule) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.patient = patient;
        this.staff = staff;
        this.vehicule = vehicule;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Staff getStaff() {
        return staff;
    }

    public void setStaff(Staff staff) {
        this.staff = staff;
    }

    public Vehicule getVehicule() {
        return vehicule;
    }

    public void setVehicule(Vehicule vehicule) {
        this.vehicule = vehicule;
    }
}
