import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post(backendUrl + "/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mb-6 flex items-center justify-center">
      <input
        onChange={(e) => setTask(e.target.value)}
        className="w-64 border border-gray-300 p-2 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
        type="text"
        placeholder="Enter Task Here..."
      />
      <button
        onClick={handleAdd}
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-4 py-2 rounded-r-2xl hover:opacity-90 transition duration-200 shadow-md"
        type="submit"
      >
        Add Task
      </button>
    </div>
  );
};

export default Create;
