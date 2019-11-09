import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosArray;
  constructor() {
    console.log('iam a service');
   }
   
  todos(){
   this.todosArray =[
    {text: 'pick up kids from school'},
    {text: 'meeting with boss'},
    {text: 'dinner with hubby'}
  ];
  return this.todosArray;
}
}
