import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeacityComponent } from './opeacity.component';

describe('OpeacityComponent', () => {
  let component: OpeacityComponent;
  let fixture: ComponentFixture<OpeacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
