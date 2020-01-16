import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
  }

  private change(increased: boolean): void {
    this.onChanged.emit(increased);
  }
}
