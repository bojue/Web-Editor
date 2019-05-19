import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZIndexComponent } from './z-index.component';

describe('ZIndexComponent', () => {
  let component: ZIndexComponent;
  let fixture: ComponentFixture<ZIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
