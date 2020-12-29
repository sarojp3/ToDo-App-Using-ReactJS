import React from 'react';
import Card from '@material-ui/core/Card';
import TodoItem from './TodoItems';

export default function TodoList({todos, deleteTodo, handleCheck }){
    return (
        <div>
            <Card variant="outlined" style={{width:500, margin:'20px 500px', padding:'30px 10px', background:'#DFF0F2', boxShadow:'2px 2px lightgray', borderRadius:'10px'}}>
                {todos.length > 0 && (
                    <h3 style={{ color: "green" }}>
                    You have {todos.length} task remaining
                    </h3>
                )}
                {todos.length > 0 ? (
                    todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        deleteTodo={deleteTodo}
                        handleCheck={handleCheck}
                    />
                    ))
                ) : (
                    <h2 style={{ color: "#D78921" }}>You have No Tasks Left</h2>
                )}                
            </Card>
        </div>
    )
}