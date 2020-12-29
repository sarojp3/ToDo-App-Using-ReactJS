import React, {useState} from "react";
import TodoList from "./TodoList";
import uniquid from 'uniquid';
import TodoForm from './TodoForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import {getTodoItemsFromLocalStorage,saveTodosInLocalStorage} from "./localStorage";

export default function App() {
  const [todos, setTodos] = useState(getTodoItemsFromLocalStorage("todo") || []);

  const addTodo = ({ text, date }) => {
    const newTodo = {
      id: uniquid(),
      title: text,
      isCompleted: false,
      date: date
    };
    setTodos([...todos, newTodo]);
    saveTodosInLocalStorage("todo", [...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodosInLocalStorage("todo", updatedTodos);
  };

  const handleCheck = (id) => {
    const checkedOne = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(checkedOne);
    saveTodosInLocalStorage("todo", checkedOne);
  };
  return (
    <div className="App">
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                TODO App
            </Typography>
            </Toolbar>
        </AppBar>
        <Card variant="outlined" style={{width:500, margin:'20px 500px', background:'#DFF0F2', boxShadow:'2px 2px lightgray', borderRadius:'10px'}}>
            <h1 style={{textAlign:'center', fontStyle:'italic',color:'#5A42CE'}} >Set your Plans</h1>
            <TodoForm addTodo={addTodo}/>
        </Card>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        handleCheck={handleCheck}
      />
    </div>
  );
}
