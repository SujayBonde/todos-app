import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircle, BsCheckCircleFill, BsFillTrashFill } from "react-icons/bs";
import dotenv from "dotenv";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(backendUrl + "/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put(backendUrl + "/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete(backendUrl + "/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col items-center pt-5 min-h-screen w-full">
      <h2 className="text-2xl font-bold text-center m-3">
        To Do List of{" "}
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Sujay
        </span>
      </h2>

      <Create />

      <div>
        {todos.length === 0 ? (
          <h2 className="font-medium">No Records Found</h2>
        ) : (
          todos.map((todo, index) => (
            <div
              className="flex items-center justify-between border rounded-lg p-3 m-2 w-80 bg-gray-50 shadow-sm"
              key={index}
            >
              <div
                onClick={() => handleEdit(todo._id)}
                className="flex items-center space-x-3 cursor-pointer"
              >
                {todo.done === true ? (
                  <BsCheckCircleFill className="text-green-500 w-6 h-6" />
                ) : (
                  <BsCircle className="text-gray-500 w-6 h-6" />
                )}

                <span className={todo.done ? "line-through text-gray-400" : ""}>
                  {todo.task}
                </span>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <BsFillTrashFill onClick={() => handleDelete(todo._id)} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
