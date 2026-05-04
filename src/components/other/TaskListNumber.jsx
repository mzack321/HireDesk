

const TaskListNumber = ({data})=>{
    return(
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="bg-blue-200 border border-blue-400 shadow-md rounded-2xl px-6 py-6 hover:bg-blue-300 transition-all">
                <h2 className="text-3xl font-bold text-blue-800">
                    {data.taskCounts.newTask}
                </h2>
                <h3 className="text-sm font-semibold text-blue-950 mt-1">
                    New Task
                </h3>
            </div>

            <div className="bg-blue-200 border border-green-400 shadow-md rounded-2xl px-6 py-6 hover:bg-blue-300 transition-all">
                <h2 className="text-3xl font-bold text-green-800">
                    {data.taskCounts.completed}
                </h2>
                <h3 className="text-sm font-semibold text-blue-950 mt-1">
                    Completed Task
                </h3>
            </div>

            <div className="bg-blue-200 border border-yellow-400 shadow-md rounded-2xl px-6 py-6 hover:bg-blue-300 transition-all">
                <h2 className="text-3xl font-bold text-yellow-800">
                    {data.taskCounts.active}
                </h2>
                <h3 className="text-sm font-semibold text-blue-950 mt-1">
                    Active Task
                </h3>
            </div>

            <div className="bg-blue-200 border border-red-400 shadow-md rounded-2xl px-6 py-6 hover:bg-blue-300 transition-all">
                <h2 className="text-3xl font-bold text-red-700">
                    {data.taskCounts.failed}
                </h2>
                <h3 className="text-sm font-semibold text-blue-950 mt-1">
                    Failed Task
                </h3>
            </div>

        </div>
    )
}

export default TaskListNumber;