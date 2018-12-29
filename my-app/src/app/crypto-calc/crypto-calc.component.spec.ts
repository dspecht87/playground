import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCalcComponent } from './crypto-calc.component';

describe('CryptoCalcComponent', () => {
  let component: CryptoCalcComponent;
  let fixture: ComponentFixture<CryptoCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
