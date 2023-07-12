import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothTeachersComponent } from './both-teachers.component';

describe('BothTeachersComponent', () => {
  let component: BothTeachersComponent;
  let fixture: ComponentFixture<BothTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BothTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BothTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
