

import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = ()=>{
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
    setNewTask({taskTitle, taskDescription, taskDate, asignTo, category, active:false, newTask:true, failed:false, completed:false})
    const data = userData

    console.log(userData.employees)

    data.forEach((elem)=>{
      if(asignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask+1 
      }
    })

    setUserData(data)
    console.log(data)

    setTaskTitle('')
    setTaskDescription('')
    setAsignTo('')
    setCategory('')
    setTaskDate('')
  }

  return(
    <div className="mt-8 bg-blue-50 border border-blue-200 shadow-lg rounded-2xl p-8">

      <form 
        onSubmit={(e)=>{ submitHandler(e) }}
        className="flex flex-col lg:flex-row gap-10"
      >
        
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 space-y-5">

          <div>
            <h3 className="text-sm font-semibold text-blue-700 mb-1">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e)=>{ setTaskTitle(e.target.value) }}
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-700 mb-1">
              Date
            </h3>
            <input
              value={taskDate}
              onChange={(e)=>{ setTaskDate(e.target.value) }}
              type="date"
              className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-700 mb-1">
              Assign To
            </h3>
            <input
              value={asignTo}
              onChange={(e)=>{ setAsignTo(e.target.value) }}
              type="text"
              placeholder="Employee name"
              className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-700 mb-1">
              Category
            </h3>
            <input
              value={category}
              onChange={(e)=>{ setCategory(e.target.value) }}
              type="text"
              placeholder="Design, Dev, etc..."
              className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col">

          <h3 className="text-sm font-semibold text-blue-700 mb-1">
            Description
          </h3>

          <textarea
            value={taskDescription}
            onChange={(e)=>{ setTaskDescription(e.target.value) }}
            rows="9"
            placeholder="Write task description..."
            className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          ></textarea>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all text-white font-semibold py-3 rounded-xl shadow-md">
            Create Task
          </button>

        </div>

      </form>
    </div>
  )
}

export default CreateTask;