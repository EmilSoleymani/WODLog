import trendingProgramsData from '../Data/trendingPrograms.json'

// Font Awesome
import { faDumbbell, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Programs = () => {
  return (
    <div className="programs-wrapper">
        <div className="programs-trending">
            <h2 className="programs-trending-title">Trending Programs</h2>
            {
                trendingProgramsData.map((program, index) => {
                    return (
                        <div id="program-entry" key={`program${index}`}>
                            <div className="program-header-wrapper">
                                <h2 className="program-name">{program.name}</h2>
                                {/* To star programs, set id="program-star-starred" */}
                                <FontAwesomeIcon className="program-star-icon" icon={faStar}/>
                            </div>
                            <p className="program-splits">{program.splits}</p>
                            <p className="program-desc">{program.days} days/week ♦ {program.time} mins/session</p>
                            <div className="program-footer-wrapper">
                                <div className="program-intensity-wrapper">
                                    {
                                        // Make a new array with the needed amount of undefined items and call map()
                                        [...Array(program.intensity)].map((n, i) => {
                                            return <><FontAwesomeIcon className="program-intensity-icon" icon={faDumbbell}/> </>
                                        })
                                    }
                                </div>
                                <button className="program-select-btn">Select Program</button>
                            </div>
                            <div className="program-footer-line"></div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Programs