import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DictionaryService } from '../../services';
import { CoupleWords } from '../../interfaces';

@Component({
  selector: 'app-couple-words',
  templateUrl: './couple-words.component.html',
  styleUrls: ['./couple-words.component.scss']
})
export class CoupleWordsComponent implements OnInit {
  @Input() inputWord: string;
  @Input() outputWord: string;
  @Input() index: number;
  @Output() onChanged = new EventEmitter<boolean>();

  button = false;
  coupleWordsForm: FormGroup = new FormGroup({
    inputWord: new FormControl([this.inputWord], [Validators.required]),
    outputWord: new FormControl([this.outputWord], [Validators.required])
  });

  constructor(private fb: FormBuilder, private dictionaryService: DictionaryService) {}

  ngOnInit() {
    this.initForm();
  }

  private change(increased: boolean): void {
    this.onChanged.emit(increased);
  }

  updateCouple(couple: CoupleWords): void {
    this.dictionaryService.updateCouple(couple, this.index);
    this.button = !this.button;
    this.change(true);
  };

  onSubmit(): void {
    if (this.coupleWordsForm.invalid) {
      return;
    }
    const couple: CoupleWords = this.coupleWordsForm.value;
    this.updateCouple(couple);
  }

  initForm(): void {
    this.coupleWordsForm = this.fb.group({
      inputWord: [this.inputWord, [
        Validators.required,
        Validators.pattern(/[a-zA-Z]/)
      ]
      ],
      outputWord: [this.outputWord, [
        Validators.required,
        Validators.pattern(/[а-яА-Я]/)
      ]
      ]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.coupleWordsForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  deleteCouple(): void {
    this.dictionaryService.deleteCouple(this.index);
    this.change(true);
  }

  changeState(): void {
    this.button = !this.button;
  }
}
