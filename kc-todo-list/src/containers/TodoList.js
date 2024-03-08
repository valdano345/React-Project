import { Connect } from "react-redux";
import TodoList from "../components/TodoList";
import { fetchTodos } from "../actions";

const mapStatetoPtops = state => ({
    todos: state.todos
})

export default Connect(mapStatetoPtops, {fetchTodos})(TodoList);