import { Injectable } from '@angular/core';

import { DictionaryService } from './dictionary.service';
import { CoupleWords, Answer } from '../interfaces';

@Injectable()
export class QuizService {
  variantsInLine: CoupleWords[] = this.dictionaryService.getAllCoupleWords();
  answerList: Answer[] = [];

  constructor(private dictionaryService: DictionaryService) { }

  reset(): void {
    this.variantsInLine = this.dictionaryService.getAllCoupleWords();
    this.answerList = [];
  }

  getRandomNumber(max = 4): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  addRightWord(index = this.getRandomNumber(this.variantsInLine.length)): CoupleWords {
    const rightWord = this.variantsInLine[index];
    this.variantsInLine.splice(index, 1);
    return rightWord;
  }

  addAnswerVariants(rightWord): string[] {
    const arrIndex: number[] = Array.from(this.dictionaryService.getAllCoupleWords().keys());
    const answerVariants: string[] = [];
    if (arrIndex.length < 5) {
      return;
    }
    while (answerVariants.length < 4) {
      const index = this.getRandomNumber(arrIndex.length);
      if (rightWord.inputWord !== this.dictionaryService.getCoupleWords(arrIndex[index]).inputWord) {
        answerVariants.push(this.dictionaryService.getCoupleWords(arrIndex[index]).outputWord);
        arrIndex.splice(index, 1);
      }
    }
    answerVariants[this.getRandomNumber()] = rightWord.outputWord;
    return answerVariants;
  }

  writeDownAnswer(outputWord: string, answerIsRight: boolean, rightWord: CoupleWords): void {
    this.answerList.push({
      answerIsRight: answerIsRight,
      answerSubmit: outputWord,
      rightWord
    });
  }

  getAnswerList(): Answer[] {
    return this.answerList;
  }
}
