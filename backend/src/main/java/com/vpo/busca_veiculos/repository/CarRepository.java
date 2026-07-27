package com.vpo.busca_veiculos.repository;

import com.vpo.busca_veiculos.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}
