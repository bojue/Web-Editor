import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteComponent } from './page-delete.component';

describe('PageDeleteComponent', () => {
  let component: PageDeleteComponent;
  let fixture: ComponentFixture<PageDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
