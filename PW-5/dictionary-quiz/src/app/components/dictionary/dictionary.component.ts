import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { DictionaryService } from '../../services';
import { CoupleWords } from '../../interfaces';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  addWordForm: FormGroup;
  allCouples: CoupleWords[] = [];

  constructor(private fb: FormBuilder, private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.update();
  }

  onChanged(_: boolean) {
    this.update();
  }

  update(): void {
    this.allCouples = this.dictionaryService.getAllCoupleWords();
    this.initForm();
  }

  initForm(): void {
    this.addWordForm = this.fb.group({
      inputWord: ['', [
        Validators.required,
        Validators.pattern(/[a-zA-Z]/)
      ]
      ],
      outputWord: ['', [
        Validators.required,
        Validators.pattern(/[а-яА-Я]/)
      ]
      ]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.addWordForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit(): void {
    if (this.addWordForm.invalid) {
      return;
    }
    console.log(this.addWordForm.value);
    const couple: CoupleWords = this.addWordForm.value;
    this.dictionaryService.addCoupleWords(couple);
    this.update();
  }
}
