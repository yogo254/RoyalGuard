package com.yogo.royalguard.repo;

import com.yogo.royalguard.domain.Shift;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

/**
 * ShiftRepo
 */
public interface ShiftRepo extends ReactiveMongoRepository<Shift, String> {

}