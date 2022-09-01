// Font Awesome
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LogItem = ({data, remove}) => {
  return (
    <div className="log-item-wrapper">
        <div id="log-item-item">
            <label>Date:</label>
            <div>{data.date}</div>
        </div>        
            
        <div id="log-item-item">
            <label>Workout:</label>
            <div>{data.workout}</div>
        </div> 

        <div id="log-item-item">
            <label>Sets:</label>
            <div>{data.sets}</div>
        </div>

        <div id="log-item-item">
            <label>Reps:</label>
            <div>{data.reps}</div>
        </div>

        <div id="log-item-item">
            <label>Weight:</label>
            <div>{data.weight}</div>
        </div>

        <div id="log-item-item"> 
            <label>Time:</label>
            <div>{data.time}</div>
        </div>

        <div id="log-item-item"> 
            <label>Notes:</label>
            <div>{data.notes}</div>
        </div>

        <div className="log-item-delete" onClick={(e) => remove(data.id)}>
            <FontAwesomeIcon icon={faTrash}/>
        </div>
    </div>
  )
}

export default LogItem