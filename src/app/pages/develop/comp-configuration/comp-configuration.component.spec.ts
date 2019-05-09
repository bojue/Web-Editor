import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompConfigurationComponent } from './comp-configuration.component';

describe('CompConfigurationComponent', () => {
  let component: CompConfigurationComponent;
  let fixture: ComponentFixture<CompConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
