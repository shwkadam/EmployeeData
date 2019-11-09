import { Component, OnInit } from '@angular/core';
import { TodoService} from '../todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[TodoService]
})
export class TodosComponent implements OnInit {
  todos;
  textboxvalue;
  constructor(private _todo : TodoService) {

   }

  ngOnInit() {
    this.todos = this._todo.todos(); 
  }

  addTodo() {
   // console.log(this.textboxvalue);
    this.todos.push({
     text: this.textboxvalue
    });
  }
  deleteToDo(todo){
    for(let i=0; i<=this.todos.length;i++) {
      if(this.todos.text== todo) {
        this.todos.splice(i,1);
      }
    }
  }
}
