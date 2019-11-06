import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [state, setState] = useState({
    todos: []
  });

  useEffect(() => {
    //ajax call to get the todos data from node
    axios.get("http://localhost:4000").then(response => {
      console.log(response.data);
      setState({ todos: response.data });
    });
    //update state
  }, []);

  const addTodo = value => {
    axios
      .post("http://localhost:4000/todos", { title: value, priority: "2" })
      .then(response => {
        console.log(response.data[0]);
        setState({ todos: [...state.todos, response.data[0]] });
      });
    // setState({ todos: state.todos.concat(value) });
    // setState({ todos: [...state.todos, value] });
  };

  const deleteTodo = value => {
    setState({
      todos: state.todos.filter(i => i !== value)
    });
  };

  return (
    <div>
      <Navbar />
      <TodoForm addTodo={addTodo} />
      <TodoList items={state.todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
