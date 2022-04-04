import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempBasicComponent } from './temp-basic.component';

describe('TempBasicComponent', () => {
  let component: TempBasicComponent;
  let fixture: ComponentFixture<TempBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
