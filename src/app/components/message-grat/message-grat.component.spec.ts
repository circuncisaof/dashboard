import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageGratComponent } from './message-grat.component';

describe('MessageGratComponent', () => {
  let component: MessageGratComponent;
  let fixture: ComponentFixture<MessageGratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageGratComponent]
    });
    fixture = TestBed.createComponent(MessageGratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
