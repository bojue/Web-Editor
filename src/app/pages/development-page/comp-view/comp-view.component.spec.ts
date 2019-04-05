import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompViewComponent } from './comp-view.component';

describe('CompViewComponent', () => {
  let component: CompViewComponent;
  let fixture: ComponentFixture<CompViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
