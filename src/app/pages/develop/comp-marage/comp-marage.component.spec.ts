import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMarageComponent } from './comp-marage.component';

describe('CompMarageComponent', () => {
  let component: CompMarageComponent;
  let fixture: ComponentFixture<CompMarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompMarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
