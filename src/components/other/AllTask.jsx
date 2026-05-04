

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded text-white h-[300px] flex flex-col overflow-hidden">

      {/* HEADER (fixed) */}
      <div className="bg-gray-800 mb-2 py-2 px-4 flex justify-between rounded text-sm font-semibold shrink-0">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>

      {/* SCROLL AREA ONLY */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-2">

        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="bg-gray-700 hover:bg-gray-600 transition-all py-2 px-4 flex justify-between rounded"
          >
            <h2 className="w-1/5 ">{elem.firstName}</h2>
            <h3 className="w-1/5">{elem.taskCounts.newTask}</h3>
            <h5 className="w-1/5">{elem.taskCounts.active}</h5>
            <h5 className="w-1/5">{elem.taskCounts.completed}</h5>
            <h5 className="w-1/5 text-red-400">{elem.taskCounts.failed}</h5>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AllTask;