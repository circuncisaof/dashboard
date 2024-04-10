import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { ListTodosComponent } from './components/todos/list-todos/list-todos.component';

export const routes: Routes = [
  {path: 'todos', component: ListTodosComponent},
  {path: 'regiter-user', component: RegisterUserComponent},
  {path:'login', component: LoginComponent}
];
