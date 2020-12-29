import React from "react";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import IconButton from '@material-ui/core/Container';
// import CheckBox from '@material-ui/icons/CheckBox';

import {Card, CardContent, Typography, Container, IconButton} from "@material-ui/core";
import { Check, Delete } from "@material-ui/icons";

export default function TodoItem({ todo, deleteTodo, handleCheck }) {
  const todoStyle = todo.isCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" };
  return (
    <Container>
      <Card
        variant="outlined"
        style={{marginTop: "20px", background: todo.isCompleted ? "#98DC53 " : "#DCC753"}}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            style={todoStyle}
            align="left"
          >
              {!todo.isCompleted && (
                <IconButton
                  style={{ float: "left" }}
                  onClick={() => handleCheck(todo.id)}
                >
                  <Check style={{ color: "green" }} />
                </IconButton>
              )}

              {todo.title}

              <IconButton
                style={{ float: "right" }}
                onClick={() => deleteTodo(todo.id)}
              >
                <Delete style={{ color: "red" }} />
              </IconButton>
            
          </Typography>
          <Typography
            variant="caption"
            component="p"
            style={{
              textAlign: "left",
              color: todo.isCompleted ? "green" : "white"
            }}
          >
            {todo.date}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}