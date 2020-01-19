import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services';
import { Answer } from '../../interfaces';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  answerList: Answer[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.answerList = this.quizService.getAnswerList();
  }
}
