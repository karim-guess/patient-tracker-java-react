package com.example.demo.Entity;

import java.util.List;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

public class Vehicule {

    @Id @GeneratedValue
    private int id;
    private String model;
  


  @OneToMany(mappedBy = "vehicule")
  private List<Intervention> interventions;


    public Vehicule(int id, String model) {
        this.id = id;
        this.model = model;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
   

    public List<Intervention> getInterventions() {
        return interventions;
    }

    public void setInterventions(List<Intervention> interventions) {
        this.interventions = interventions;
}}