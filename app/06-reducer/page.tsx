"use client";
import { useState } from "react";
import { useImmerReducer } from "use-immer";
import { current } from "immer";

interface TodoItem {
  id: number;
  text: string
  completed: boolean;
}

type TodoAction =
  | { type: "added"; text: string }
  | { type: "toggled"; id: number }
  | { type: "deleted"; id: number };

function todosReducer(draft: TodoItem[], action: TodoAction) {
  switch (action.type) {
    case "added":
      draft.push({ id: Date.now(), text: action.text, completed: false });
      console.log(current(draft));
      break;
    case "toggled": {
      const todo = draft.find((t) => t.id === action.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      break;
    }
    case "deleted":
      return draft.filter((todo) => todo.id !== action.id);
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useImmerReducer<TodoItem[], TodoAction>(
    todosReducer,
    [],
  );
  const [text, setText] = useState("");

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    dispatch({ type: "added", text: trimmed });
    setText("");
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "toggled", id });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "deleted", id });
  };

  return (
    <>
      <h2>Todo App</h2>
      <input
        type="text"
        value={text}
        placeholder="Add a new todo"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggle(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
