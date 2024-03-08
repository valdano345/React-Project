import React, { useState, useEffect } from 'react'
import TodoList from '../components/TodoList'
import TodoHeader from '../components/TodoHeader'
import { fetchTodosApi, createTodosApi, deleteTodosApi, editTodosApi } from '../api/TodosApi'


const TodoPages = () => {
    return (
    <div>
        <TodoHeader />
        <TodoList />
    </div>
    )
}

export default TodoPages