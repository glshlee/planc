package com.planc.backend.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.planc.backend.model.Exercise
import com.planc.backend.repository.ExerciseRepository
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mockito.`when`
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.MediaType
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.setup.MockMvcBuilders

@ExtendWith(SpringExtension::class)
@WebMvcTest(ExerciseController::class)
class ExerciseControllerTest {

    @Autowired
    private lateinit var mockMvc: MockMvc

    @Autowired
    private lateinit var objectMapper: ObjectMapper

    @MockBean
    private lateinit var exerciseRepository: ExerciseRepository

    @BeforeEach
    fun setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(ExerciseController(exerciseRepository)).build()
    }

    @Test
    fun `when getAllExercises called then return exercise list`() {
        // Given
        val exercises = listOf(
            Exercise(id = 1, name = "Push-up"),
            Exercise(id = 2, name = "Sit-up"),
        )
        `when`(exerciseRepository.findAll()).thenReturn(exercises)

        // When-Then
        mockMvc.perform(get("/exercises"))
            .andExpect(status().isOk)
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(content().json(objectMapper.writeValueAsString(exercises)))
    }
}
