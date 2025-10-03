import React, { useState } from 'react'
import axios from 'axios';

const Create = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [task, setTask] = useState();
  const handleAdd =()=>{
    axios.post(backendUrl+'/add',{task: task})
    .then(result => {
      location.reload();
    })
    .catch(err=> console.log(err))
  }

  return (
    <div className='mb-4'>
      <input onChange={(e)=> setTask(e.target.value)} className='border p-1.5 rounded-l-2xl' type="text" placeholder='Enter Task Here..'/>
      <button onClick={handleAdd} className='bg-black text-white p-2 px-3 outline-none rounded-r-2xl' type="submit">Add Task</button>
    </div>
  )
}

export default Create