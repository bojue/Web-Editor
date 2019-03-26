import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontColorComponent } from './font-color.component';

describe('FontColorComponent', () => {
  let component: FontColorComponent;
  let fixture: ComponentFixture<FontColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
