package com.vpo.busca_veiculos.controller;
import java.util.List;
import com.vpo.busca_veiculos.entity.Car;
import com.vpo.busca_veiculos.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cars")
@RequiredArgsConstructor
public class CarController {

    private final CarService service;

    @GetMapping
    public List<Car> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Car save(@RequestBody Car car) {
        return service.save(car);
    }
}