import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function ToDoList({task, index, updateTask, deleteTask}) {
  return (
    <>
      <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
        <li
          className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
          <div className="form-check">
            <input className="form-check-input me-0" type="checkbox" id="flexCheckChecked1" onClick={() => updateTask(index)}/>
          </div>
        </li>
        <li
          className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
          <p className="lead fw-normal mb-0 text-primary" style={{textDecoration: task.isComplete && 'line-through'}}>{task.title}</p>
        </li>
        <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          <div className="d-flex flex-row justify-content-end mb-1">
            <a className="text-danger" data-mdb-toggle="tooltip" title="Delete todo" onClick={() => deleteTask(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </a>
          </div>
        </li>
      </ul>
    </>
  );
}

export default ToDoList;