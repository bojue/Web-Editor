import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPolylineComponent } from './chart-polyline.component';

describe('ChartPolylineComponent', () => {
  let component: ChartPolylineComponent;
  let fixture: ComponentFixture<ChartPolylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPolylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPolylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
