import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPageCompsListComponent } from './comp-page-comps-list.component';

describe('CompPageCompsListComponent', () => {
  let component: CompPageCompsListComponent;
  let fixture: ComponentFixture<CompPageCompsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPageCompsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPageCompsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
