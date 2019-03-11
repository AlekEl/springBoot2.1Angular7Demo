import { Component, OnInit } from '@angular/core';

import { QuestionService} from "../shared/question/question.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Array<any>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getAll().subscribe(data => {
      this.questions = data;
    });
  }

}
