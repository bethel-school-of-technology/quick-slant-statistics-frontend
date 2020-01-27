import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteamsComponent } from './viewteams.component';

describe('ViewteamsComponent', () => {
  let component: ViewteamsComponent;
  let fixture: ComponentFixture<ViewteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
