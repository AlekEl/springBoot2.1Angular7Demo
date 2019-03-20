package com.codecool.demo.Controller;

import com.codecool.demo.Model.Question;
import com.codecool.demo.Model.QuestionRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
public class QuestionController {

    private QuestionRepository repository;

    public QuestionController(QuestionRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/questions")
    @CrossOrigin(origins="http://localhost:4200")
    public void save(@RequestBody Question question) {
        repository.save(question);
    }

    @GetMapping("/questions")
    @CrossOrigin(origins="http://localhost:4200")
    public Collection<Question> questions() {
        return new ArrayList<>(repository.findAll());
    }
}
