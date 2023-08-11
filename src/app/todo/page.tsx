"use client";
import React, { useState, useEffect } from "react";
import styles from "./TodoApp.module.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditedTodoText(text);
  };

  const cancelEditing = () => {
    setEditingTodoId(null);
    setEditedTodoText("");
  };

  const saveEditedTodo = (id: number) => {
    if (editedTodoText.trim() !== "") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, text: editedTodoText } : todo
        )
      );
      setEditingTodoId(null);
      setEditedTodoText("");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>
      <div className={styles["input-container"]}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          className={styles.input}
          required= {true}
        />
        <button onClick={addTodo} className={styles.button}>
          Add Todo
        </button>
      </div>
      <ul className={styles["todo-list"]}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles["todo-item"]}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className={styles['todo-checkbox']}
            />
            {editingTodoId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                />
                <button
                  onClick={() => saveEditedTodo(todo.id)}
                  className={styles["edit-button"]}
                >
                  Save
                </button>
                <button
                  onClick={cancelEditing}
                  className={styles["remove-button"]}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div
                className={`${styles["todo-text"]} ${
                  todo.completed ? styles.completed : ""
                }`}
              >
                {todo.text}
              </div>
            )}
            <div className={styles["action-buttons"]}>
              <button
                onClick={() => startEditing(todo.id, todo.text)}
                className={styles["edit-button"]}
              >
                Edit
              </button>
              <button
                onClick={() => removeTodo(todo.id)}
                className={styles["remove-button"]}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
