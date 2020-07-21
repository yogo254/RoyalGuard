package com.yogo.royalguard.controler;

import java.util.List;

import com.yogo.royalguard.domain.Guard;
import com.yogo.royalguard.domain.Shift;

import com.yogo.royalguard.repo.ShiftRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * ShiftControler
 */
@RestController
@RequestMapping("/api/shift")
public class ShiftControler {
    @Autowired
    private ShiftRepo shiftRepo;

    @GetMapping

    public Flux<Shift> getAllShifts() {
        return shiftRepo.findAll();

    }

    @GetMapping("/{id}")
    public Mono<Shift> getShiftById(@PathVariable("id") String id) {
        return shiftRepo.findById(id);
    }

    @GetMapping("/guards/{id}")
    public Mono<List<Guard>> getShiftGuards(@PathVariable("id") String id) {
        return shiftRepo.findById(id).map(Shift::getAssignedGuards);

    }

    @PostMapping

    public void addShift(@RequestBody Shift shift) {
        shiftRepo.save(shift);

    }

}