import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbclickEventComponent } from './dbclick-event.component';

describe('DbclickEventComponent', () => {
  let component: DbclickEventComponent;
  let fixture: ComponentFixture<DbclickEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbclickEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbclickEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
