import React from "react";
import Counter from "./features/counter/Counter";
import Counter2 from "./features/counter/Counter2";
import TodoList from "./features/Todo/TodoList";
import TodoAdd from "./features/Todo/TodoAdd";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default App;
