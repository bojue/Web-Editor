import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDataInfoComponent } from './equipment-data-info.component';

describe('EquipmentDataInfoComponent', () => {
  let component: EquipmentDataInfoComponent;
  let fixture: ComponentFixture<EquipmentDataInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentDataInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentDataInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
