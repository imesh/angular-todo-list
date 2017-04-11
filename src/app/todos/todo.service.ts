'use strict'
import { Injectable } from '@angular/core';
import { Init } from './init.todos'

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log('TodoService initialized');
    this.load();
  }

  getTodos() {
    return JSON.parse(localStorage.getItem('todos'));
  }

  addTodo(todo) {
    var todos = this.getTodos();
    // add new todo
    todos.push(todo);
    // update local storage
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('New todo added: ' + todo.text);
  }

  deleteTodo(todoText: string) {
    var todos = this.getTodos();
    for(var i = 0; i < todos.length; i++) {
      if(todos[i].text == todoText) {
        // remove todo
        todos.splice(i, 1);

        // update local storage
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('Todo deleted: ' + todoText);
        return;
      }
    }
  }

  updateTodo(oldText: string, newText: string) {
    var todos = this.getTodos();
    for(var i = 0; i < todos.length; i++) {
      if(todos[i].text == oldText) {
        todos[i].text = newText;

        // update local storage
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('Todo updated from ' + oldText + ' to ' + newText);
        return;
      }
    }
  }
}
