import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTempComponent } from './comp-temp.component';

describe('CompTempComponent', () => {
  let component: CompTempComponent;
  let fixture: ComponentFixture<CompTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
