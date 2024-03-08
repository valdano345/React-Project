import * as types from '../constants/ActionTypes';
import { createTodosApi, fetchTodosApi, deleteTodosApi, editTodosApi } from '../api/TodosApi';

// Create data
export const addTodo = text => async(dispatch) => {
    try{
        const todo = {text: text, completed: false}
        const res = await createTodosApi(todo)
        dispatch({type: types.ADD_TODOS, payload: res.data})
    }catch(error){
        console.log(error)
    }
}
// Edit Data
export const editTodo = data => async(dispatch) => {
    try {
        const editedTodo = {...data, completed: !data.completed};
        const res = await editTodosApi(data.id, editedTodo);
        dispatch({type: types.EDIT_TODOS, payload: res.data})
    } catch (error) {
        console.log(error)
    }
}
// Delete Data
export const deleteTodo = (id) => async(dispatch) => {
    try {
        await deleteTodosApi(id)
        dispatch({type: types.DELETE_TODOS, payload: id})
    } catch (error) {
        console.log(error)
    }
}
// Fetching atau menangkap data
export const fetchTodos = () => async(dispatch) => {
    try {
        const res = await fetchTodosApi();
        dispatch({type: types.GET_TODOS, payload: res.data})
    } catch (error) {
        console.log(error)
    }
}