import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldclockComponent } from './worldclock.component';

describe('WorldclockComponent', () => {
  let component: WorldclockComponent;
  let fixture: ComponentFixture<WorldclockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldclockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
