import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCurmbComponent } from './bread-curmb.component';

describe('BreadCurmbComponent', () => {
  let component: BreadCurmbComponent;
  let fixture: ComponentFixture<BreadCurmbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadCurmbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCurmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
