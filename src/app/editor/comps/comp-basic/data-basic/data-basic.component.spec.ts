import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBasicComponent } from './data-basic.component';

describe('DataBasicComponent', () => {
  let component: DataBasicComponent;
  let fixture: ComponentFixture<DataBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
