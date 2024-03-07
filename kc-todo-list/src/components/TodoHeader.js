import React, {useState} from 'react'

const TodoHeader = ({addTodo}) => {
    const [todoInput, setTodoInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todoInput);
        setTodoInput("")
    }

    const handleChange = (e) => {
        setTodoInput(e.target.value);
        console.log(todoInput);
    }

    return (
        <header>
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todoInput} placeholder="Add Todo" onChange={handleChange} />
                <input className="addBtn" type="submit" value="Submit" id="add_button" />
            </form>
        </header>
    )
}

export default TodoHeader