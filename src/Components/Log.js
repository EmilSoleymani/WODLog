import React from 'react'
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

// Components
// import LogItem from './LogItem';

// DayPicker
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

function formatDate(newDate) {
  return format(newDate, "MM/dd/yyyy")
}

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
  const fetchLog = async () => {
    const response = await fetch('http://localhost:5000/logs')
    const data = await response.json()

    return data
  }

  useEffect(() => {
    const getLogs = async () => {
        const logsFromBackend = await fetchLog()
        setLogList(logsFromBackend)
    }
    //getLogs()
  }, [])

  const onNotesChange = (e) => {
    setNotes(e.target.value);
  }

  const onWorkoutChange = (e) => {
    setWorkout(e.target.value);
  }

  const addLog = async () => {
    console.log(formatDate(date))
    return
    
    /* NEED BETTER VALIDATION */
    if(workout.length === 0 || date.length === 0){
      alert("Please fill out log properly...")
      return
    }
    const data = {
      id: uuidv4(),
      date: formatDate(date),
      workout: workout,
      sets: setsCount,
      reps: repCount,
      weight: weight,
      time: time,
      notes: notes
    }
    const response = await fetch("http://localhost:5000/logs", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    setLogList([...logList, data])
  }

  const deleteLog = async (id) => {
    await fetch(`http://localhost:5000/logs/${id}`, {
      method: "DELETE"
    })
    console.log(id)
    setLogList(logList.filter((log) => log.id !== id))
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
              <input id="log-form-entry" type="text" name="sets-field" placeholder='Enter sets' onChange={(e) => console.log(e.target.value)}/>
            </div>

            <div id="log-form-item" className="input-wrapper">
              <input id="log-form-entry" type="text" name="reps-field" placeholder='Enter reps' onChange={(e) => console.log(e.target.value)}/>
            </div>

            <div id="log-form-item" className="input-wrapper">
              <input id="log-form-entry" type="text" name="weight-field" placeholder='Enter weight' onChange={(e) => console.log(e.target.value)}/>
            </div>

            <div id="log-form-item" className="input-wrapper">
              <input id="log-form-entry" type="text" name="time-field" placeholder='Enter time' onChange={(e) => console.log(e.target.value)}/>
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

      <div className='log-entries-wrapper'>
        {logList.map((item, index) => (
          <div key={item.id} className='logitem-id-eventWrapper'>
            {/*<LogItem data={item} remove={deleteLog}/>*/}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Log