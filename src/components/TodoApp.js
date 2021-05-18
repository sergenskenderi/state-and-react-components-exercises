import React , {useEffect ,useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

export default function TodoApp(){
    const [todos , setTodos] = useState([]);

    function addTodo(todo){
        setTodos([todo,...todos]);
    }
    
    function toggleComplete(id){
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    return{
                        ...todo,
                        completed : !todo.completed
                    };
                }
                return todo;
            })
        );
    }

    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="TodoApp">
                <Typography style={{padding:16}} variant="h4">
                    React Todo
                </Typography>
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos}  toggleComplete={toggleComplete} removeTodo={removeTodo}/>
        </div>
    );
}