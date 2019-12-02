import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesNavComponent } from './leagues-nav.component';

describe('LeaguesNavComponent', () => {
  let component: LeaguesNavComponent;
  let fixture: ComponentFixture<LeaguesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
