import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionListComponent} from "./question-list/question-list.component";
import { QuestionEditComponent} from "./question-edit/question-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/question-list', pathMatch: 'full' },
  { path: 'question-list', component: QuestionListComponent },
  { path: 'question-add', component: QuestionEditComponent },
  { path: 'question-edit/:id', component: QuestionEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
