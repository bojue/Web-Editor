import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonValComponent } from './button-val.component';

describe('ButtonValComponent', () => {
  let component: ButtonValComponent;
  let fixture: ComponentFixture<ButtonValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
