import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";



const INTIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Hacer la colada',
            completed: false
        },
        {
            id: '2',
            desc: 'Hacer el amor con otra, no no no',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {

    const [todoState, dispatch] = useReducer( todoReducer, INTIAL_STATE)

    const toggleTodo = (id: string) => {
        dispatch({type: 'toggleTodo', payload: { id }})
    }

    return ( 
        <TodoContext.Provider value={{todoState, toggleTodo}}>
            { children }
        </TodoContext.Provider>
     );
}