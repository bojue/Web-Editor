import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontComponentComponent } from './font-component.component';

describe('FontComponentComponent', () => {
  let component: FontComponentComponent;
  let fixture: ComponentFixture<FontComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
