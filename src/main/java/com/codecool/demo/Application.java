package com.codecool.demo;

import com.codecool.demo.Model.Question;
import com.codecool.demo.Model.QuestionRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.*;
import java.util.stream.Stream;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    ApplicationRunner init(QuestionRepository repository) {
        return args -> {
            List<String> authors = Arrays.asList("Szczepan", "Szymon", "Stefan", "Eustachy");
            List<String> content = Arrays.asList("How do I even Java?", "What is Love?", "Lorem ipsum?", "Who is John Galt?");
            List<String> shortDescription = Arrays.asList("Java question", "Baby dont Hurt me", "dolor", "Capitalism?");
            for(int i = 0; i < authors.size(); i++) {
                Question question = new Question();
                question.setAuthor(authors.get(i));
                question.setContent(content.get(i));
                question.setShortDescription(shortDescription.get(i));
                repository.save(question);
            }

            repository.findAll().forEach(System.out::println);
        };
    }

}
