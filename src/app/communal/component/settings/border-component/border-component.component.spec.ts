import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderComponentComponent } from './border-component.component';

describe('BorderComponentComponent', () => {
  let component: BorderComponentComponent;
  let fixture: ComponentFixture<BorderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
