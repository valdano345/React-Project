import React, { useEffect } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, fetchTodos}) => {
    useEffect(() => {
        fetchTodos()
    }, []);

    
    return (
    <div>
        <ul className="todo-list">
            {todos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
                )
            })}
        </ul>
    </div>
    )
}

export default TodoList