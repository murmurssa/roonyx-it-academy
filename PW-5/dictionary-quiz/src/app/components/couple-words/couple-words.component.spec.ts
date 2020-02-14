import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleWordsComponent } from './couple-words.component';

describe('CoupleWordsComponent', () => {
  let component: CoupleWordsComponent;
  let fixture: ComponentFixture<CoupleWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupleWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupleWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
