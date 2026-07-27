package com.vpo.busca_veiculos.service;
import java.util.List;
import com.vpo.busca_veiculos.entity.Car;
import com.vpo.busca_veiculos.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepository repository;

    public List<Car> findAll() {

        return repository.findAll();
    }

    public Car save(Car car) {
        return repository.save(car);
    }
}
