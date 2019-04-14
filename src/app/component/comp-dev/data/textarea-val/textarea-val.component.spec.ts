import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaValComponent } from './textarea-val.component';

describe('TextareaValComponent', () => {
  let component: TextareaValComponent;
  let fixture: ComponentFixture<TextareaValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
