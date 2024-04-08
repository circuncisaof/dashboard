import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { ListTodosComponent } from './components/todos/list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoCheckedComponent } from './components/todos/todo-checked/todo-checked.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    ListTodosComponent,
    NavBarComponent,
    NotFoundComponent,
    FooterComponent,
    TodoCheckedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
