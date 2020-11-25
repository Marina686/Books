import { Component, OnInit } from '@angular/core'; 
import { ToDoService } from '../shared/todos.service';
import {delay} from 'rxjs/operators';




@Component({
  selector: 'app-to-do',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class ToDoComponent implements OnInit {
 
 loading = true;
  searchString = '';
  constructor(public todoService: ToDoService) { }

  ngOnInit(): void {
    this.todoService.fetchTodos()
    .pipe(delay(500))
    .subscribe ( () => {
       this.loading = false;
    });
  } 

  OnChange(id: number){
    //this.onToggle.emit(id);
    this.todoService.onToggle(id);
  }
  removeToDo(id: number){
    this.todoService.removeToDos(id);
  } 
}
