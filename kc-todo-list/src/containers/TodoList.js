import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { fetchTodos } from "../actions";

const mapStatetoPtops = state => ({
    todos: state.todos
})

export default connect(mapStatetoPtops, {fetchTodos})(TodoList);