import React, { useState, useEffect } from 'react'
import TodoList from '../components/TodoList'
import TodoHeader from '../components/TodoHeader'
import { fetchTodosApi, createTodosApi, deleteTodosApi, editTodosApi } from '../api/TodosApi'


const TodoPages = () => {
    const [todos, setTodos] = useState([]);
    // Menerima semua data dari API or database
    const fetchTodos = async() => {
        const response = await fetchTodosApi();
        setTodos(response.data)
        
    }
    // Create atau menambahkan data
    const createTodo = async(text) => {
        const todo = {text: text, completed: false}
        const response = await createTodosApi(todo);
        setTodos([...todos, response.data])
    }
    // Edit atau mengubah data
    const editTodo = async(data) => {
        const editedTodo = {...data, completed: !data.completed};
        console.log(data);
        const response = await editTodosApi(data.id, editedTodo);
        const updatedTodos = todos.map(todo => {
            if(todo.id === data.id){
                return {...todo, ...response.data}
            }
            return todo
        })
        setTodos(updatedTodos);
    }
    // Delete atau menghapus data
    const deleteTodo = async(id) => {
        await deleteTodosApi(id)
		const updatedTodos = todos.filter((todo) => {
	        return todo.id !== id;
		});
		setTodos(updatedTodos);
    }

    
    useEffect(() => {
        fetchTodos();
    }, [])
    return (
    <div>
        <TodoHeader addTodo={createTodo} />
        <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo}/>
    </div>
    )
}

export default TodoPages