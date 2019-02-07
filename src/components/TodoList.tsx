import React, { Component }  from 'react';
import { TodoItemObject } from '../objects/TodoItemObject';
import { TodoItem } from './TodoItem';

export interface IItemProps {
    todoItems: TodoItemObject[];
    removeTodoItem: (todoItemObject: TodoItemObject) => void;
    toggleTodoItemChecked: (todoItemObject: TodoItemObject) => void;
}

export const TodoList = (props : IItemProps) => {
    const todoItems = props.todoItems.map((todoItem) => {
        return (
            <TodoItem
                todoItem={todoItem}
                removeTodoItem={props.removeTodoItem}
                toggleTodoItemChecked={props.toggleTodoItemChecked}
                key={todoItem.id}
            />
        );
    });

    return (
        <ul className="list-group TodoList">
            {todoItems}
        </ul>
    );

}
