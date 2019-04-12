import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurEventComponent } from './blur-event.component';

describe('BlurEventComponent', () => {
  let component: BlurEventComponent;
  let fixture: ComponentFixture<BlurEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
