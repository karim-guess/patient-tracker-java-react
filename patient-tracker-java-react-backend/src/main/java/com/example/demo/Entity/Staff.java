package com.example.demo.Entity;

import java.util.List;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

public class Staff {
    
    @Id @GeneratedValue
    private Long id;

    private String name;    
    private String role;




    @OneToMany(mappedBy = "staff")
  private List<Intervention> interventions;

    public Staff(Long id, String name, String role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    public Staff() {
    }

  public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Intervention> getInterventions() {
        return interventions;
    }

    public void setInterventions(List<Intervention> interventions) {
        this.interventions = interventions;
    }

}
