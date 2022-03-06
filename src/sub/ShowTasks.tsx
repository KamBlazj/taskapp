import Task from "./Task";
import FindButton from "./FindButton";
import {TaskProps,ShowTasksProps} from "../Interfaces"

function ShowTasks(props:ShowTasksProps) {
  return (
    <div>
      <FindButton search={props.search} changeSearch = {props.changeSearch}/>
      <div className="showTasks">
      {props.data.map((task:TaskProps, index:number)=>
          {
          return(
              <Task key = {index} task = {task}/>
            )
          })
      }
      </div>
    </div>
  );
}

export default ShowTasks;