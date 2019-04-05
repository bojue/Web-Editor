import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCompComponent } from './settings-comp.component';

describe('SettingsCompComponent', () => {
  let component: SettingsCompComponent;
  let fixture: ComponentFixture<SettingsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
