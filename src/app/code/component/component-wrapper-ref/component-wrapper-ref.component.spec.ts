import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWrapperRefComponent } from './component-wrapper-ref.component';

describe('ComponentWrapperRefComponent', () => {
  let component: ComponentWrapperRefComponent;
  let fixture: ComponentFixture<ComponentWrapperRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentWrapperRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWrapperRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
