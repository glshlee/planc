package com.planc.backend.controller

import com.planc.backend.model.Exercise
import com.planc.backend.repository.ExerciseRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/exercises")
class ExerciseController(
    private val exerciseRepository: ExerciseRepository,
) {

    @GetMapping
    fun getAllExercises(): List<Exercise> {
        return exerciseRepository.findAll()
    }
}
