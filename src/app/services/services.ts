import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, catchError, retry, tap, throwError } from "rxjs";
import { TodoI } from "../interface/TodoI";
import { ITodo } from "../interface/todo";

@Injectable({
  providedIn: 'root'
})

export class ApiService
{
  readonly url = 'http://localhost:3000/api/v1/todo'
  constructor(private http: HttpClient){}


  get(id:string):Observable<ITodo>{
    return this.http.get<ITodo>(`${this.url}/${id}`);
  }

  getAll():Observable<ITodo[]>{
    const allTodo = this.http.get<ITodo[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError)

    );
    return allTodo

  }

  save(data:TodoI):Observable<ITodo>{
    return this.http.post<ITodo>(this.url,data).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  update(id:string,todo: ITodo):Observable<ITodo>{
    const data = this.http.patch<ITodo>(`${this.url}/${id}`, todo).pipe(
      retry(1),
      catchError(this.handleError)
    )
    return data
  }

  delete(id:string){
    return this.http.delete(`${this.url}/${id}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
