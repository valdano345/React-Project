import React, { useState, useEffect } from 'react'
import TodoList from '../containers/TodoList'
import TodoHeader from '../containers/TodoHeader'
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