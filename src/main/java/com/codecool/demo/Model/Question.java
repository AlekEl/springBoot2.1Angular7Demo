package com.codecool.demo.Model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Question {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String content;
    private @NonNull String shortDescription;
    private @NonNull String author;
}
