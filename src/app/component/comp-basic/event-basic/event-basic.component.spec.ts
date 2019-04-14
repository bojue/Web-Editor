import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBasicComponent } from './event-basic.component';

describe('EventBasicComponent', () => {
  let component: EventBasicComponent;
  let fixture: ComponentFixture<EventBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
