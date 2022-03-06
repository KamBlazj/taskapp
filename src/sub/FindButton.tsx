import {FindButtonProps} from "../Interfaces"

function ShowTasks(props:FindButtonProps) {
  return (
    <div className="findButton">
      <div>
        <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for task..."
            value={props.search}

            onChange={(e) => props.changeSearch(e.target.value)}
        />
      </div>
      <div>
        <span className="sr-only">Search for certain task</span>
      </div>
    </div>
  );
}

export default ShowTasks;