import {RecordProps, AssignedProps} from "../Interfaces";

function Task(props:RecordProps) {
  
  return (
    <div className="task">
      <div className="taskP">
        <div>ID: <b>{props.task.work_order_id}</b> &#11044;  Priority: <b>{props.task.priority}</b> &#11044; Status: <b>{props.task.status}</b></div>
        <div>Description: {props.task.description}</div>
        <div>Received Date: {props.task.received_date}</div>
      </div>
      <div className="taskP">
      {props.task.assigned_to.length > 0 ? (
        <span><i>Assigned To:</i></span>
      ) : (
        <span><i>Not Assigned</i></span>
      )}
      {props.task.assigned_to.map((assigned:AssignedProps, index:number)=>
          {
          return(
            <div key = {index}> Name: <b>{assigned.person_name}</b> &#11044; Status: <b>{assigned.status}</b></div>
            )
          })

      }
      </div>
    </div>
  );
}

export default Task;