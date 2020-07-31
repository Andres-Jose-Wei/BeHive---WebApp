import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminskillsComponent } from './adminskills.component';

describe('AdminskillsComponent', () => {
  let component: AdminskillsComponent;
  let fixture: ComponentFixture<AdminskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
