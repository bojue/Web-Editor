import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseOverEventComponent } from './mouse-over-event.component';

describe('MouseOverEventComponent', () => {
  let component: MouseOverEventComponent;
  let fixture: ComponentFixture<MouseOverEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseOverEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseOverEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
