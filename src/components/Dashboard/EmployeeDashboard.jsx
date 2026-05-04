
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = (props)=>{
    return(
        <div className="p-10
         h-screen ">
            
<Header changeUser={props.changeUser} data={props.data}></Header>
<TaskListNumber data={props.data}></TaskListNumber>
<TaskList data={props.data}></TaskList>
        </div>
    )
}
export default EmployeeDashboard;