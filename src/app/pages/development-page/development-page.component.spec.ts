import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentPageComponent } from './development-page.component';

describe('DevelopmentPageComponent', () => {
  let component: DevelopmentPageComponent;
  let fixture: ComponentFixture<DevelopmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
