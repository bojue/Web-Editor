import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusEventComponent } from './focus-event.component';

describe('FocusEventComponent', () => {
  let component: FocusEventComponent;
  let fixture: ComponentFixture<FocusEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
