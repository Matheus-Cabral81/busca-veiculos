package com.vpo.busca_veiculos.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "cars")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Car {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String platform;

        private String title;

        private String brand;

        private String model;

        private Integer year;

        private BigDecimal price;

        private String city;

        private String state;

        private String url;

        private String image;
}
