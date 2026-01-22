import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedEventsComponent } from './shared-events.component';

describe('SharedEventsComponent', () => {
  let component: SharedEventsComponent;
  let fixture: ComponentFixture<SharedEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedEventsComponent]
    });
    fixture = TestBed.createComponent(SharedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
