package com.codecool.demo;

import com.codecool.demo.Model.Question;
import com.codecool.demo.Model.QuestionRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    ApplicationRunner init(QuestionRepository repository) {
        return args -> {
                Question question = new Question();
                question.setAuthor("Szymon");
                question.setContent("How do I even Java?");
                question.setShortDescription("Java Problem");
                repository.save(question);
            repository.findAll().forEach(System.out::println);
        };
    }

}
