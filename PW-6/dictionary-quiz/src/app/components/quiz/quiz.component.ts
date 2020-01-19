import { Component, OnInit } from '@angular/core';

import { QuizService, DictionaryService } from '../../services';
import { CoupleWords } from '../../interfaces';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  answerIsGiven: boolean = false;
  answerVariants: string[] = [];
  rightWord: CoupleWords;
  coupleCount: number;
  answerListCount: number;
  endWords: boolean = false;
  limit: number = 10;

  constructor(private dictionaryService: DictionaryService, private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.reset();
    this.quizService.answerList = [];
    this.coupleCount = this.dictionaryService.getAllCoupleWords().length;
    this.answerListCount = this.quizService.answerList.length;
    this.update();
  }

  update(): void {
    if (this.quizService.variantsInLine.length !== 0) {
      this.answerIsGiven = false;
      this.answerVariants = [];
      this.rightWord = this.quizService.addRightWord();
      this.answerVariants = this.quizService.addAnswerVariants(this.rightWord);
    }
  }

  checkAnswer(outputWord: string): boolean {
    return this.rightWord.outputWord === outputWord;
  }

  nextVariants(): void {
    setTimeout(() => {
      this.update();
    }, 2000);
  }

  limiterCoupleCount(): void {
    this.answerListCount = this.quizService.answerList.length;
    this.coupleCount = this.dictionaryService.getAllCoupleWords().length;
    this.answerListCount !== this.coupleCount ? this.nextVariants() : this.endWords = true;
  }

  limiteranswerList(): void {
    this.answerListCount = this.quizService.answerList.length;
    this.answerListCount !== this.limit ? this.nextVariants() : this.endWords = true;
  }

  submit(outputWord: string): void {
    this.answerIsGiven = true;
    this.quizService.writeDownAnswer(outputWord, this.checkAnswer(outputWord), this.rightWord);
    this.coupleCount = this.dictionaryService.getAllCoupleWords().length;
    this.coupleCount < this.limit ? this.limiterCoupleCount() : this.limiteranswerList();
    console.log(this.quizService.answerList);
  }

  addClass(answer: string): string {
    return this.answerIsGiven ? this.checkAnswer(answer) ? 'answer-true' : 'answer-false' : '';
  }
}
