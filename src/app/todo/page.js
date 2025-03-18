"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { SlActionUndo } from "react-icons/sl";
import { FaCheck } from "react-icons/fa";
import { TbHttpDelete } from "react-icons/tb";

const page = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const addTodo = () => {
    if (!input.trim()) {
      toast.error("Todo cannot be empty");
      return;
    }
    const newTodo = { id: Date.now(), text: input, isComplete: false };
    setTodos([newTodo, ...todos]);
    setInput("");
    toast.success("Todo added");
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.info("Todo deleted");
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todos, isComplete: !todo.isComplete } : todo
      )
    );
    toast.success("Todo updated");
  };
  const filteredTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="mt-24 px-10 max-w-xl mx-auto py-6 min-h-screen">
      <h1 className="text-2xl text-center font-bold my-4">TODO</h1>
      <div className="flex gap-2 my-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task.."
          className="w-full rounded-md px-4 py-2 border"
        />
        <button
          className="text-[.7em] font-bold text-center w-fit bg-green-500 px-4 py-2 text-white rounded-md cursor-pointer"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks.."
        className="w-full rounded-md px-4 py-2 border mt-6"
      />

      <ul>
        {filteredTodo.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 mb-2 rounded-md ${
              todo.isComplete ? `bg-green-500` : `bg-white`
            }`}
          >
            <span
              className={
                todo.isComplete ? `line-through text-gray-500` : `text-black`
              }
            >
              {todo.text}
            </span>
            <div className="flex gap-2">
              <button className="text-green-500" onClick={()=>toggleComplete(todo.id)}>
                {todo.isComplete ? <SlActionUndo className="cursor-pointer"/> : <FaCheck className="cursor-pointer"/>}
              </button>
              <button onClick={() => deleteTodo(todo.id)}>
                <TbHttpDelete className="text-red-500 font-bold cursor-pointer"/>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default page;
