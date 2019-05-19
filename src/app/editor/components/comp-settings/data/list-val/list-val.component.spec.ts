import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListValComponent } from './list-val.component';

describe('ListValComponent', () => {
  let component: ListValComponent;
  let fixture: ComponentFixture<ListValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
