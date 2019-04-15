import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgValComponent } from './img-val.component';

describe('ImgValComponent', () => {
  let component: ImgValComponent;
  let fixture: ComponentFixture<ImgValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
