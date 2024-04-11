import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { DeleteModalComponent } from './components/modal/delete-modal/delete-modal.component';
import { SaveModalComponent } from './components/modal/save-modal/save-modal.component';
import { UpdateModalComponent } from './components/modal/update-modal/update-modal.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListTodosComponent } from './components/todos/list-todos/list-todos.component';
import { TodoDesignerComponent } from './components/todos/todo-designer/todo-designer.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { MessageGratComponent } from './components/message-grat/message-grat.component';
import { TodoDeleteComponent } from './components/todo-delete/todo-delete.component';
import { TodoUpdateComponent } from './components/todo-update/todo-update.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    ListTodosComponent,
    NavBarComponent,
    NotFoundComponent,
    FooterComponent,
    UpdateModalComponent,
    DeleteModalComponent,
    SaveModalComponent,
    TodoDesignerComponent,
    MessageGratComponent,
    TodoDeleteComponent,
    TodoUpdateComponent,
    ErrorMessageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
