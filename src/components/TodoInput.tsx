import React, { Component } from 'react'
import { TodoItemObject } from '../objects/TodoItemObject'

interface IMyProps {
    addTodoItem: (todoItemObject: TodoItemObject) => void;
}

interface IMyState {
    todoItem: string;
  }

export class TodoInput extends Component<IMyProps, IMyState> {
    constructor(props: IMyProps){
        super(props);
        this.state = { todoItem: '' };
    }

    public render(){
        return (
            <form onSubmit={(e) => this.onFormSubmit(e)} className="input-group">
                <input 
                    placeholder="Enter a todo list item"
                    onChange={(e) => this.onInputChange(e)}
                    value ={ this.state.todoItem}
                    className="form-control"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">
                        Add
                        <span className="glyphicon glyphicon-plus" />
                    </button>
                </span>
            </form>
        );
    }

    private onInputChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ todoItem: event.currentTarget.value})
    }

    private onFormSubmit(event: React.FormEvent) {
        event.preventDefault();
        if(this.state.todoItem)
        {
            const newItem = new TodoItemObject(this.state.todoItem, false);
            // Will add id when we hook up to back end.
            this.props.addTodoItem(newItem);
            this.setState({ todoItem: ''})
        }
    }
}