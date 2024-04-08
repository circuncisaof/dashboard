import { Routes } from '@angular/router';
import { ListTodosComponent } from './components/Todos/list-todos/list-todos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';

export const routes: Routes = [
  {path: 'todos', component: ListTodosComponent},
  {path: 'regiter-user', component: RegisterUserComponent},
  {path:'login', component: LoginComponent}
];
