import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionComponentComponent } from './position-component.component';

describe('PositionComponentComponent', () => {
  let component: PositionComponentComponent;
  let fixture: ComponentFixture<PositionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
