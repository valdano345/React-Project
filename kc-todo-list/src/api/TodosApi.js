import axios from "axios";

export const fetchTodosApi = async() => {
    const response = await axios.get('http://127.0.0.1:3005/todos');
    return response;
}
export const createTodosApi = async(todo) => {
    const response = await axios.post('http://127.0.0.1:3005/todos', todo);
    return response;
}
export const deleteTodosApi = async(id) => {
    await axios.delete(`http://127.0.0.1:3005/todos/${id}`)
}
export const editTodosApi = async(id, data) => {
    const response = await axios.put(`http://127.0.0.1:3005/todos/${id}`, data);
    return response;
}