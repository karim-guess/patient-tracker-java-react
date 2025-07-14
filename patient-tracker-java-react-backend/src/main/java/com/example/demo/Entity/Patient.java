package com.example.demo.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class Patient {
    
    @Id @GeneratedValue
    private Long id;

    private final String prenom;
    private String nom;
    private int age;
    private int numero;


    public Patient(Long id, String prenom, String nom, int age, int numero) {
        this.id = id;
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.numero = numero;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String name) {
        this.nom = name;
    }

public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;

}
}
