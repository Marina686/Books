import { Component, OnInit } from '@angular/core';
import { ToDo, ToDoService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title = '';
  constructor(public todoService: ToDoService) { }

  ngOnInit(): void {
  }

  addTodo(){
    const todo: ToDo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }
    this.todoService.addTodo(todo)
    this.title ='';
  }
}
