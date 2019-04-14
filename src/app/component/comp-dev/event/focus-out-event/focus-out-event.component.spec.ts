import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusOutEventComponent } from './focus-out-event.component';

describe('FocusOutEventComponent', () => {
  let component: FocusOutEventComponent;
  let fixture: ComponentFixture<FocusOutEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusOutEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusOutEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
