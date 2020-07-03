package com.yogo.royalguard.repo;

import com.yogo.royalguard.domain.Guard;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

/**
 * GuardRepo
 */
public interface GuardRepo extends ReactiveMongoRepository<Guard, String> {

}