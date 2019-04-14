import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValComponent } from './input-val.component';

describe('InputValComponent', () => {
  let component: InputValComponent;
  let fixture: ComponentFixture<InputValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
