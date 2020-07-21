package com.yogo.royalguard.controler;

import java.util.List;

import com.yogo.royalguard.domain.Education;
import com.yogo.royalguard.domain.Guard;
import com.yogo.royalguard.domain.Shift;
import com.yogo.royalguard.repo.GuardRepo;

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
 * GuardControler
 */
@RestController
@RequestMapping("api/guard")
public class GuardControler {

    @Autowired
    private GuardRepo guardRepo;

    @GetMapping
    public Flux<Guard> getAllGuards() {
        return guardRepo.findAll();

    }

    @GetMapping("/{id}")
    public Mono<Guard> getGuardById(@PathVariable("id") String id) {
        return guardRepo.findById(id);
    }

    @GetMapping("/edu/{id}")
    public Mono<List<Education>> getEducationById(@PathVariable("id") String id) {
        return guardRepo.findById(id).map(Guard::getEducations);
    }

    @GetMapping("/shift/{id}")
    public Mono<List<Shift>> getShift(@PathVariable("id") String id) {
        return guardRepo.findById(id).map(Guard::getShifts);
    }

    @PostMapping
    public void addGuard(@RequestBody Guard guard) {
        guardRepo.save(guard);

    }

    @PostMapping("/{id}")
    public void addShift(@RequestBody Shift shift, @PathVariable("id") String id) {
        guardRepo.findById(id).map(g -> {
            g.getShifts().add(shift);
            return g;
        }).subscribe(guardRepo::save);
    }

}