import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGuageComponent } from './chart-guage.component';

describe('ChartGuageComponent', () => {
  let component: ChartGuageComponent;
  let fixture: ComponentFixture<ChartGuageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartGuageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
