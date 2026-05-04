


const TaskList = ({ data }) => {
    return (
        <div className="flex-shrink-0 h-full w-[320px] p-5 rounded-2xl shadow-lg border border-white/20 
        bg-gradient-to-br from-amber-200 via-yellow-300 to-orange-300
        hover:shadow-2xl transition-all duration-300">

            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    {data.taskCategory}
                </h3>
                <h4 className="text-xs text-gray-800 font-medium bg-white/40 px-2 py-1 rounded-md backdrop-blur">
                    {data.taskDate}
                </h4>
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
                {data.taskTitle}
            </h2>

            <p className="text-sm mt-2 text-gray-800 opacity-90">
                {data.taskDescription}
            </p>

            <div className="flex justify-between mt-6 gap-3">
                <button className="flex-1 bg-green-600 hover:bg-green-700 active:scale-95 transition-all text-white px-3 py-2 text-xs rounded-lg shadow-md">
                    Mark as Completed
                </button>

                <button className="flex-1 bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-white px-3 py-2 text-xs rounded-lg shadow-md">
                    Mark as Failed
                </button>
            </div>

        </div>
    );
};

export default TaskList;