import { Injectable } from '@angular/core';

import { CoupleWords } from '../interfaces';

@Injectable()
export class DictionaryService {
  private couple: CoupleWords;

  constructor() { }

  getAllCoupleWords(): CoupleWords[] {
    return localStorage.words ? JSON.parse(localStorage.words) : [];
  }

  addCoupleWords(coupleWords: CoupleWords): void {
    this.couple = coupleWords;
    const words: CoupleWords[] = this.getAllCoupleWords();
    words.push(this.couple);
    localStorage.setItem('words', JSON.stringify(words));
  }
}
