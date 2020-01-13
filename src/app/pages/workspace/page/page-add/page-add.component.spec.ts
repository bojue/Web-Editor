import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddComponent } from './page-add.component';

describe('PageAddComponent', () => {
  let component: PageAddComponent;
  let fixture: ComponentFixture<PageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
