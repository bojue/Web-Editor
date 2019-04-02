import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeComponentComponent } from './size-component.component';

describe('SizeComponentComponent', () => {
  let component: SizeComponentComponent;
  let fixture: ComponentFixture<SizeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
