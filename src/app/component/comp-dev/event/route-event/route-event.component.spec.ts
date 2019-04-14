import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteEventComponent } from './route-event.component';

describe('RouteEventComponent', () => {
  let component: RouteEventComponent;
  let fixture: ComponentFixture<RouteEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
