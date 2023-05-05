import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTempalateComponent } from './admin-tempalate.component';

describe('AdminTempalateComponent', () => {
  let component: AdminTempalateComponent;
  let fixture: ComponentFixture<AdminTempalateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTempalateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTempalateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
