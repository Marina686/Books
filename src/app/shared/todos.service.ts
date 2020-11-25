import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

export interface ToDo{
    id: number
    title: string
    completed: boolean
    date?: any
  }
@Injectable({providedIn: 'root'})

export class ToDoService{ 
    public todos: ToDo[] = [] 

    constructor(private http: HttpClient){}

    fetchTodos() : Observable<ToDo[]>   {
       return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3'    ) 
       .pipe(tap(todos => this.todos = todos))
    }

      onToggle(id:number){
        const idx = this.todos.findIndex(t=> t.id === id);
        this.todos[idx].completed = !this.todos[idx].completed;
      }
      removeToDos(id:number){
          this.todos = this.todos.filter(t=> t.id != id);
      }
      addTodo(todo:ToDo){
          this.todos.push(todo)
      }
}
// export interface Books{ 
//   author: string
//   imageLink: string
//   link: string
//   catalogID: number
//   title: string
//   year?: number
// }
// @Injectable({providedIn: 'root'})

// export class ToDoService{ 
//   public books: Books[] = [] 

//   constructor(private http: HttpClient){}

//   fetchTodos() : Observable<Books[]>   {
//      return this.http.get<Books[]>('https://jsonplaceholder.typicode.com/todos?_limit=3'    ) 
//      .pipe(tap(books => this.books = books))
//   }

//     onToggle(id:number){
//       const idx = this.books.findIndex(t=> t.id === id);
//       this.books[idx].completed = !this.books[idx].completed;
//     }
//     removeToDos(id:number){
//         this.books = this.books.filter(t=> t.id != id);
//     }
//     addTodo(books:Books){
//         this.books.push(books)
//     }
// }