import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleCopyComponent } from './style-copy.component';

describe('StyleCopyComponent', () => {
  let component: StyleCopyComponent;
  let fixture: ComponentFixture<StyleCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
