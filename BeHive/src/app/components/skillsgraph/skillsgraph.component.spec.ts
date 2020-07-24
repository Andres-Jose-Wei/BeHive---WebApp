import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsgraphComponent } from './skillsgraph.component';

describe('SkillsgraphComponent', () => {
  let component: SkillsgraphComponent;
  let fixture: ComponentFixture<SkillsgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
