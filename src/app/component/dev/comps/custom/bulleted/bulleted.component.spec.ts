import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletedComponent } from './bulleted.component';

describe('BulletedComponent', () => {
  let component: BulletedComponent;
  let fixture: ComponentFixture<BulletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
