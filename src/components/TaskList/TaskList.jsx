
import AcceptTask from './AcceptTask'
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompleteTask from './CompleteTask';

const TaskList = ({ data }) => {
    console.log(data)

    return (
        <div
            id="tasklist"
            className="h-[55%] w-full mt-10 flex items-center gap-5 
            overflow-x-auto overflow-y-hidden whitespace-nowrap
            px-4 py-6
            bg-blue-50 border border-blue-200 rounded-2xl shadow-inner
            scroll-smooth
            scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100"
        >
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
            })}
        </div>
    )
}

export default TaskList;