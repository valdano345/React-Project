import { Connect } from "react-redux";
import TodoHeader from '../components/TodoHeader'
import {addTodo} from '../actions'

export default Connect(null, {addTodo})(TodoHeader)