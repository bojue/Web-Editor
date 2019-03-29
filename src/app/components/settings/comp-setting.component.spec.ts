import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSettingComponent } from './comp-setting.component';

describe('ImgSettingComponent', () => {
  let component: CompSettingComponent;
  let fixture: ComponentFixture<CompSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
