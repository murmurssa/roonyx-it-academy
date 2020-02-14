import { Injectable } from '@angular/core';

import { CoupleWords } from '../interfaces';

@Injectable()
export class DictionaryService {
  private couple: CoupleWords;

  constructor() { }

  getCoupleWords(index: number): CoupleWords {
    return JSON.parse(localStorage.words)[index];
  }

  getAllCoupleWords(): CoupleWords[] {
    return localStorage.words ? JSON.parse(localStorage.words) : [];
  }

  addCoupleWords(coupleWords: CoupleWords): void {
    this.couple = coupleWords;
    const words: CoupleWords[] = this.getAllCoupleWords();
    words.push(this.couple);
    localStorage.setItem('words', JSON.stringify(words));
  }

  updateCouple(couple: CoupleWords, index: number): void {
    const words: CoupleWords[] = this.getAllCoupleWords();
    words[index] = couple;
    localStorage.setItem('words', JSON.stringify(words));
  }

  deleteCouple(index: number): void {
    const words: CoupleWords[] = this.getAllCoupleWords();
    words.splice(index, 1);
    localStorage.setItem('words', JSON.stringify(words));
  }
}
