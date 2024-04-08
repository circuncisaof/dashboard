import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCheckedComponent } from './todo-checked.component';

describe('TodoCheckedComponent', () => {
  let component: TodoCheckedComponent;
  let fixture: ComponentFixture<TodoCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCheckedComponent]
    });
    fixture = TestBed.createComponent(TodoCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
