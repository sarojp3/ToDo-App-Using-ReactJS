import React, { useState } from "react";
import { Container, FormControl, TextField, Button } from "@material-ui/core";

export default function InputField({ addTodo }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    addTodo({ text, date });
    setText("");
    setDate("");
  };

  return (
    <Container>
      <form
        style={{margin:'10px', padding:'10px', textAlign:'center'}}
        onSubmit={handleSubmit}
      >
        <FormControl>
          <TextField
            label="Add your ToDo"
            required={true}
            value={text}
            variant='outlined'
            onChange={(event) => setText(event.target.value)}
          />
        </FormControl>
       <div style={{margin:'15px'}}>
        <FormControl>
          <TextField
            id="date"
            label="Select Date"
            value={date}
            required={true}
            type="date"
            onChange={(event) => setDate(event.target.value)}
            InputLabelProps={{
              shrink: true
            }}
          />
        </FormControl>
        </div>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px", marginLeft: "5px" }}
            type="submit"
          >
            Add Task
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
