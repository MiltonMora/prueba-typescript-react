import { TodoList } from "./todo/components/TodoList";
import { TodoProvider } from "./todo/context/TodoProvider";

export const Todo = () => {
    return ( 
        <TodoProvider>
            <h1>TODO</h1>
            <TodoList/>
        </TodoProvider>
    );
}