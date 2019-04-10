import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingBasicComponent } from './setting-basic.component';

describe('SettingBasicComponent', () => {
  let component: SettingBasicComponent;
  let fixture: ComponentFixture<SettingBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
