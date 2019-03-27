import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSettingComponent } from './img-setting.component';

describe('ImgSettingComponent', () => {
  let component: ImgSettingComponent;
  let fixture: ComponentFixture<ImgSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
