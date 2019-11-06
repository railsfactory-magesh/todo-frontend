import React, { useState } from "react";

function TodoForm(props) {
  const [inputVal, setInputVal] = useState("");

  const handleChange = event => {
    setInputVal(event.target.value);
  };

  const handleClick = e => {
    props.addTodo(inputVal);
    setInputVal("");
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        aria-describedby="helpId"
        placeholder="Add todo task"
        value={inputVal}
        onChange={handleChange}
      />
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={handleClick}
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoForm;
