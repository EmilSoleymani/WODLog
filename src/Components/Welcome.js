import { useEffect, useState } from 'react'
import welcomeBg from '../Assets/WODLog_Home_Image.jpg'
import welcomeActionsData from '../Data/welcomeActions.json'
import img1 from '../Assets/PlaceholderImg.png'

const Welcome = () => {
  const [actionCount, setActionCount] = useState(0)

  const getActionCount = () => {
    setActionCount(Object.keys(welcomeActionsData).length)
  }

  useEffect(() => {
    getActionCount()
  }, [])

  return (
    <div className='welcome-container'>
      
      {/* WELCOME PAGE IMAGE BOX */}
      <div className="welcome-image-container">
        <img src={welcomeBg} alt="bg" className='welcome-bg-img'/>
        
        <div className="welcome-image-text-container">
          <h1 className='welcome-image-text-tile'>Welcome</h1>
          <p className='welcome-image-text-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet risus id ante dapibus tempus. Suspendisse a tempor magna. Sed sit amet luctus mi. Suspendisse hendrerit eleifend est, at ultrices nibh vulputate eu. Sed faucibus laoreet pellentesque. Mauris iaculis, ipsum sit amet ornare finibus</p>
          <div className="logworkout-btn-container">
              <p id="logworkout-btn-txt">Click here to</p>
              <button id="logworkout-btn">Log a Workout</button>
          </div>
        </div>
      </div>

      {/* WELCOME "ACTIONS" */}
      <div className="welcome-actions-container">
        {
          welcomeActionsData.map((data, key) => {
            return (
              <div key={key} className="welcome-action-item" style={{flex: {actionCount}}}>
                  <h2 className='welcome-action-title'>{data.action}</h2>
                  <img src={img1} alt="Img"/>
                  <p className='welcome-action-caption'>{data.caption}</p>
              </div>
            )
          })
        }
      </div>

      <div className="signup-msg-container">
        <p className="signup-msg">To set goals, view trends, and see suggested programs</p>
        <button className="signup-msg-btn">Sign Up</button>
      </div>

    </div>
  )
}

export default Welcome