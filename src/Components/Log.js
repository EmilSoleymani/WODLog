import React from 'react'
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

// Components
import LogItem from './LogItem'

// DayPicker
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

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

const Log = () => {
  const [date, setDate] = useState(new Date())
  const [workout, setWorkout] = useState("")
  const [repCount, setRepCount] = useState(0) 
  const [setsCount, setSetsCount] = useState(0)
  const [time, setTime] = useState(0);
  const [notes, setNotes] = useState("")
  const [weight, setWeight] = useState(45)
  const [logList, setLogList] = useState([])

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
    getLogs("Emil")
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

  return (
    <div className='log-wrapper'>
      <div className="log-title">Log Your Workouts</div>
      
      <div className="log-form">
        <div className="log-form-column-wrapper">
          {/* FORM COLUMN 1*/}
          <div className="log-form-column">
            <div id="log-form-item" className="input-wrapper">
              <input id="log-form-entry" type="text" name="workout-field" placeholder='Enter workout' onChange={(e) => onWorkoutChange(e)}/>
            </div>

            <div id="log-form-item" className="input-wrapper">
              <input id="log-form-entry" type="text" name="sets-field" placeholder='Enter sets' onChange={(e) => setSetsCount(e.target.value)}/>
            </div>

            <div id="log-form-item" className="input-wrapper">
              <input id="log-form-entry" type="text" name="reps-field" placeholder='Enter reps' onChange={(e) => setRepCount(e.target.value)}/>
            </div>

            <div id="log-form-item" className="input-wrapper">
              <input id="log-form-entry" type="text" name="weight-field" placeholder='Enter weight' onChange={(e) => setWeight(e.target.value)}/>
            </div>

            <div id="log-form-item" className="input-wrapper">
              <input id="log-form-entry" type="text" name="time-field" placeholder='Enter time' onChange={(e) => setTime(e.target.value)}/>
            </div>

            <div id="log-form-item">
              <input id="log-form-entry" type="text" className='log-form-notes' placeholder='Enter notes' onChange={(e) => onNotesChange(e)}/>
            </div>
          </div>

          {/* FORM COLUMN 2 (DATE)*/}
          <div className="log-form-column">
            <DayPicker 
              mode="single"
              required
              selected={date}
              onSelect={setDate}
              modifiersClassNames={{
                selected: 'calendar-selected'
              }}
              styles={{
                caption: { color: '#001D3D'},
                day: { color: '#001D3D'}
              }}/>

              <button onClick={addLog} className='log-form-add-btn'>Log</button>
          </div>
        </div>
      </div>

      <div className="log-seperate-line"></div>

      { // Display log entries
      logList.length > 0 &&
      <div className='log-entries-wrapper'>
        {logList.map((item, index) => (
          <div key={`LogEntry{${item.log_id}}`} className='logitem-id-eventWrapper'>
            <LogItem data={item} remove={deleteLog}/>
            {   // Render a line to separate logs if not last log
              item.log_id !== logList[logList.length-1].log_id &&
              <div className="log-item-line"></div>
            }
          </div>
        ))}
      </div>
      }
    </div>
  )
}

export default Log