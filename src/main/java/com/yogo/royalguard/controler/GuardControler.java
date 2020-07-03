package com.yogo.royalguard.controler;

import java.util.List;

import com.yogo.royalguard.domain.Education;
import com.yogo.royalguard.domain.Guard;
import com.yogo.royalguard.repo.GuardRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

}