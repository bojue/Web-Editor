import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseEnterEventComponent } from './mouse-enter-event.component';

describe('MouseEnterEventComponent', () => {
  let component: MouseEnterEventComponent;
  let fixture: ComponentFixture<MouseEnterEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseEnterEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseEnterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
