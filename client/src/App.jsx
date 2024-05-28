import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const allTodo = async () => {
      const { data } = await axios.get("http://localhost:5000/api/v1/todo");
      console.log(data.todo);
      try {
        if (data.success == true) {
          setTodos(data.todo);
        }
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
    allTodo();
  }, []);

  // console.log(todos);
  return (
    <div>
      <div>
        <input type="text" placeholder="Todo" />
        <button type="submit">Submit</button>
      </div>
      <div>
        {todos && todos.length > 0 ? (
          <>
            {todos.map((todos) => (
              <div key={todos._id}>{todos.todo}</div>
            ))}
          </>
        ) : (
          <>No todos</>
        )}
      </div>
    </div>
  );
};

export default App;
