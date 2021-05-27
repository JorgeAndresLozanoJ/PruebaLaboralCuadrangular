import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFormRegComponent } from './team-form-reg.component';

describe('TeamFormRegComponent', () => {
  let component: TeamFormRegComponent;
  let fixture: ComponentFixture<TeamFormRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamFormRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFormRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
