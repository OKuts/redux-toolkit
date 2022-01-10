export const TodoItem = ({id, text, completed, changeTodo, removeTodo}) => {
    return (
        <div className="todoItem">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => changeTodo(id)}/>
            <span>{text}</span>
            <button
                onClick={() => removeTodo(id)}>
                X
            </button>
        </div>
    )
}