import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioValComponent } from './audio-val.component';

describe('AudioValComponent', () => {
  let component: AudioValComponent;
  let fixture: ComponentFixture<AudioValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
