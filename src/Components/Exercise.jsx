import { useState, useEffect} from "react"
import { useParams } from "react-router"

// Components
import NewLogModal from "./NewLogModal"

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const Exercise = () => {
  // Get params from react router url to get exercise name
  const params = useParams()
  
  const [logs, setLogs] = useState([])
  const [currentNavOption, setCurrentNavOption] = useState(0)
  const [newLogModal, setNewLogModal] = useState(false)

  useEffect(() => {
    const data = {
        date: "Monday, Sep 05 2022",
        timestamp: "7:03pm",
        sets: [
            {
                reps: 5,
                weight: 115,
                unit: 'lbs'
            },
            {
                reps: 5,
                weight: 125,
                unit: 'lbs'
            }
        ],
        workoutLength: 25,
        notes: "None"
    }
    const data2 = {
        date: "Tuesday, Sep 05 2022",
        timestamp: "7:15pm",
        sets: [
            {
                reps: 5,
                weight: 115,
                unit: 'lbs'
            },
            {
                reps: 5,
                weight: 125,
                unit: 'lbs'
            }
        ],
        workoutLength: 25,
        notes: ""
    }
    setLogs([data, data2])
  }, [])

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

  return (
    <div className="exercise-container">
        <div className="exercise-title">{params.exercise.replaceAll("_", " ")} </div>

        {/* NAVBAR */}
        <div className="log-nav-wrapper">
            <div className="log-nav-container">
            <div className="log-nav-link" id={currentNavOption === 0 ? "log-nav-selected": ""} onClick={(e) => onNavClick(0)}>
                Logs
            </div>
            <div className="log-nav-link" id={currentNavOption === 1 ? "log-nav-selected": ""} onClick={(e) => onNavClick(1)}>
                Graph
            </div>
            </div>
            <div className="log-nav-baseline"></div>
            <div id="log-nav-selected-baseline"></div>
        </div>

        { /* EXERCISE LOGS */
            currentNavOption === 0 &&
            <>
                <div className="new-log-btn" onClick={(e) => setNewLogModal(true)}>New Log</div>
                {newLogModal && <NewLogModal setShowModal={setNewLogModal} addLog={(e) => console.log(e)}/>}
            
                {
                    logs.length > 0 &&
                    logs.map((log, key) => {
                        return (
                            <div key={`log_${key}`} className="log-container">
                                <div className="log-header">
                                    <p className="log-header-date">{log.date}</p>
                                    <div className="log-header-righthand">
                                        <p className="log-header-timestamp">{log.timestamp}</p>
                                        <FontAwesomeIcon icon={faAngleDown} className="log-header-options"/>
                                    </div>
                                </div>
                                
                                {  /* SETS */
                                    log.sets.map((set, setKey) => {
                                        return (
                                            <div className="log-sets-container" key={`log_${key}_set_${setKey}`}>
                                                <p className="log-sets-setindex">{`SET ${setKey+1}: `}</p>
                                                <p className="log-sets-reps">{`${set.reps} reps `} @ {set.weight + ` ${set.unit}`}</p>
                                            </div>
                                        )
                                    })
                                }

                                { /* NOTES */
                                    log.notes.length > 0 &&
                                    <div className="log-notes-container">
                                        <div className="log-notes-label">NOTES: </div>
                                        <div className="log-notes">{log.notes}</div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </>
        }
    </div>
  )
}

export default Exercise