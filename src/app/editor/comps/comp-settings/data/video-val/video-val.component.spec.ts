import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoValComponent } from './video-val.component';

describe('VideoValComponent', () => {
  let component: VideoValComponent;
  let fixture: ComponentFixture<VideoValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
