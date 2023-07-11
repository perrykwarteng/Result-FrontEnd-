import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSlipComponent } from './result-slip.component';

describe('ResultSlipComponent', () => {
  let component: ResultSlipComponent;
  let fixture: ComponentFixture<ResultSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSlipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
