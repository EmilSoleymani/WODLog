import React from 'react'
import { useState } from "react"

// Router
import { Link } from 'react-router-dom';

// Components
import NewExerciseModal from './NewExerciseModal'

// DayPicker
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

/*
  Formats date to WODLog format
*/
function formatDate(newDate) {
  return format(newDate, "MM/dd/yyyy")
}

/*
  Returns true iff String value val is a valid float
*/
function isFloat(val) {
  var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
  if (!floatRegex.test(val))
      return false;

  val = parseFloat(val);
  if (isNaN(val))
      return false;
  return true;
}

/*
  Returns true iff String value val is a valid integer
*/
function isInt(val) {
  var intRegex = /^-?\d+$/;
  if (!intRegex.test(val))
      return false;

  var intVal = parseInt(val, 10);
  return parseFloat(val) === intVal && !isNaN(intVal);
}

// API Endpoint
const host = "http://3.88.113.211:3001"

const ExerciseList = () => {
  const [currentNavOption, setCurrentNavOption] = useState(0)
  const [newExerciseModal, setNewExerciseModal] = useState(false)
  const [exercises, setExercises] = useState([{url:"Bicep_Curl", name: "Bicep Curl"}, {url:"Dumbell_Bench_Press", name: "Dumbell Bench Press"}])

  /*
  // Fetch logs from JSON backend
  const fetchLog = async (user) => {
    return await Axios.get(host+`/logs/${user}?orderby=date`)
  }

  useEffect(() => {
    const getLogs = async (user) => {
        const response = await fetchLog(user)
        const data = response.data
        setLogList(data)
    }
    // getLogs("Emil")
  }, [])

  const onNotesChange = (e) => {
    setNotes(e.target.value);
  }

  const onWorkoutChange = (e) => {
    setWorkout(e.target.value);
  }

  const addLog = async () => {  
    if(workout.length === 0){
      alert("Please fill enter a workout name.")
      return
    }

    let sets, reps, workoutTime, workoutWeight

    if(!isInt(setsCount)){
      alert("Sets must be a valid integer value.")
      return
    }
    if(!isInt(repCount)){
      alert("Reps must be a valid integer value.")
      return
    }
    if(!isFloat(weight)){
      alert("Weight must be a valid float value.")
      return
    }
    if(!isFloat(time)){
      alert("Time must be a valid float value.")
      return
    }
    
    sets = parseInt(setsCount)
    reps = parseInt(repCount)
    workoutWeight = parseFloat(weight)
    workoutTime = parseFloat(time)
    
    if(sets <= 0){
      alert("Sets must be a positive value.")
      return
    }
    if(reps <= 0){
      alert("Reps must be a positive value.")
      return
    }
    if(workoutWeight <= 0){
      alert("Weight must be a positive value.")
      return
    }
    if(workoutTime <= 0){
      alert("Time must be a positive value.")
      return
    }

    let notes_ = notes
    if(notes_.length === 0){
      notes_ = "None"
    }

    const data = {
      log_id: uuidv4(),
      date: formatDate(date),
      workout: workout,
      sets: sets,
      reps: reps,
      weight: workoutWeight,
      time: workoutTime,
      notes: notes_
    }

    const response = await Axios.post(host+"/newLog", {
      log_id: data.log_id,
      date: data.date,
      workout: data.workout,
      sets: data.sets,
      reps: data.reps,
      weight: data.weight,
      time: data.time,
      user: "Emil",
      notes: data.notes
    })

    console.log(response.data)
    
    setLogList([...logList, data])
  }

  const deleteLog = async (log_id) => {
    await Axios.delete(host+`/delete/${log_id}`)
    setLogList(logList.filter((log) => log.log_id !== log_id))
  }
  */

  /**
   * Sets highlighted nav component to nav link that was clicked. Applies CSS
   * transformation to slide bar under corresponding link.
   * 
   * @param {*} option specifies which nav option was clicked
   */
  const onNavClick = (option) => {
    setCurrentNavOption(option)

    var baseline = document.getElementById('log-nav-selected-baseline')
    baseline.style.transform = option === 0 ? "translateX(0%)" : "translateX(100%)"
  }

  /**
   * Adds a new exercise to the list of current exercises
   * 
   * @param {*} exercise New exercise to be added
   */
  const addExercise = (exercise) => {
    setExercises([...exercises, exercise])
  }

  return (
    <div className='log-wrapper'>
      <div className="log-title">Log Your Workouts</div>
      
      {/* NAVBAR */}
      <div className="log-nav-wrapper">
        <div className="log-nav-container">
          <div className="log-nav-link" id={currentNavOption === 0 ? "log-nav-selected": ""} onClick={(e) => onNavClick(0)}>
            Exercises
          </div>
          <div className="log-nav-link" id={currentNavOption === 1 ? "log-nav-selected": ""} onClick={(e) => onNavClick(1)}>
            Programs
          </div>
        </div>
        <div className="log-nav-baseline"></div>
        <div id="log-nav-selected-baseline"></div>
      </div>


      { /* EXERCISE LIST */}
      { currentNavOption === 0 && 
        <>
          <div className="new-exercise-btn" onClick={(e) => setNewExerciseModal(true)}>New Exercise</div>
          {newExerciseModal && <NewExerciseModal setShowModal={setNewExerciseModal} addExercise={addExercise} />}
          <div className="exercise-list-container">
            {
              exercises.length > 0 && 
              
                exercises.map((exercise, i) => {
                  return(
                    <div key={`exercise_${i}`} className="exercise-list-entry">
                        <Link to={`/log/${exercise.url}`} className='exercise-list-entry-name'>{exercise.name}</Link>

                        <FontAwesomeIcon icon={faTrash} className="exercise-list-entry-delete-btn"/>
                    </div>
                  )
                })
            }
          </div>
        </>
      }
    </div>
  )
}

export default ExerciseList