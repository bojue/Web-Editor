import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPageComponent } from './comp-page.component';

describe('CompPageComponent', () => {
  let component: CompPageComponent;
  let fixture: ComponentFixture<CompPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
