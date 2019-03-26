import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthComponent } from './width.component';

describe('WidthComponent', () => {
  let component: WidthComponent;
  let fixture: ComponentFixture<WidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
