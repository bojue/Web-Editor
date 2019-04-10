import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBasicComponent } from './custom-basic.component';

describe('CustomBasicComponent', () => {
  let component: CustomBasicComponent;
  let fixture: ComponentFixture<CustomBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
