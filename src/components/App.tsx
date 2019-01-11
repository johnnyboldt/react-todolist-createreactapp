// tslint:disable:no-console

import _ from 'lodash-es';
import React, { Component} from "react";
import "./App.css";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoItemObject } from "../objects/TodoItemObject";

interface IMyState {
  todoItems: TodoItemObject[]
}

class App extends Component<{}, IMyState>{
  constructor(props: any){
    super(props);

    this.state = {
        todoItems: []
    };
  }

  public render(){
    return(
      <div className="App container">
        <div>
          <h1 className="display-2 text-success">
            <b>Todo List</b>
            <span className="glyphicon glyphicon-check" />
          </h1>
        </div>
        <TodoInput
          addTodoItem={this.addTodoItem}
        />
        <TodoList 
          todoItems={this.state.todoItems} 
          removeTodoItem={this.removeTodoItem}
          toggleTodoItemChecked={this.toggleTodoItemChecked}
        />
      </div>
    );
  }

  public addTodoItem = (todoItemObject: TodoItemObject) => {
    this.setState({
      todoItems: [...this.state.todoItems, todoItemObject]
    });
  }

  private removeTodoItem = (todoItemObject: TodoItemObject) => {
    this.setState({
      todoItems: _.pull(this.state.todoItems, todoItemObject)
    });
  }

  private toggleTodoItemChecked = (todoItemObject: TodoItemObject) => {
    const index = this.state.todoItems.indexOf(todoItemObject);
    const newToDoItems = this.state.todoItems.slice();
    newToDoItems[index].completed = !newToDoItems[index].completed;
    this.setState({
      todoItems: newToDoItems
    });
  }

}

export default App;