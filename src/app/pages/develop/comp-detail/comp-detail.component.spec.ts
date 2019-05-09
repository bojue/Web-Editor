import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDetailComponent } from './comp-detail.component';

describe('CompDetailComponent', () => {
  let component: CompDetailComponent;
  let fixture: ComponentFixture<CompDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
