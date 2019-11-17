import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextValComponent } from './text-val.component';

describe('TextValComponent', () => {
  let component: TextValComponent;
  let fixture: ComponentFixture<TextValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
