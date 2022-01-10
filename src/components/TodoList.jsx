import {TodoItem} from "./TodoItem";

export const TodoList = ({list, changeTodo, removeTodo}) => {
    return (
        <>
            {list.map(todo =>
                <TodoItem
                    key={todo.id}
                    {...todo}
                    changeTodo = {changeTodo}
                    removeTodo = {removeTodo}
                />)}
        </>
    )
}