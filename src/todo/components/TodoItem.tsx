import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces"

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

    const { toggleTodo } = useContext(TodoContext);

    const handleClick = (id:string) => {
        toggleTodo(id)
    }

    return (
        <li 
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
            onClick={() =>handleClick(todo.id)}
        >
            {todo.desc}
        </li>
    )
}