import {Component, OnDestroy, OnInit} from '@angular/core';

import { QuestionService} from "../shared/question/question.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit, OnDestroy {
  question: any = {};

  sub: Subscription;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.questionService.get(id).subscribe((question: any) => {
          if (question) {
            this.question = question;
            this.question.href = question._links.self.href;
          } else {
            console.log(`Question with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private gotoList() {
    this.router.navigate(['/question-list']);
  }

  save(form: NgForm) {
    this.questionService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href: string) {
    this.questionService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
