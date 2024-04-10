import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveModalComponent } from './save-modal.component';

describe('SaveModalComponent', () => {
  let component: SaveModalComponent;
  let fixture: ComponentFixture<SaveModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveModalComponent]
    });
    fixture = TestBed.createComponent(SaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
