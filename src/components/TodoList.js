import React from "react";

const TodoList = props => {
  return (
    <ul className="list-group">
      {props.items.map(item => {
        console.log(item.title);
        return (
          <li className="list-group-item" key={item.id}>
            <span>{item.title}</span>
            <span
              className="float-right"
              onClick={() => props.deleteTodo(item.id)}
            >
              Delete
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
