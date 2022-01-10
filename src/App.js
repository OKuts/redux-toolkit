import './App.scss';
import {useState} from "react";
import {TodoList} from "./components/TodoList";

function App() {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: inputValue.trim(),
                    completed: false
                }
            ])
            setInputValue('')
        }
    }

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const changeTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    return (
        <div className="app">
            <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                type="text"/>
            <button onClick={addTodo}>Send</button>
            <TodoList
                list={todos}
                changeTodo = {changeTodo}
                removeTodo = {removeTodo} />
        </div>
    );
}

export default App;
