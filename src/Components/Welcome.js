import welcomeBg from '../Assets/WODLog_Home_Image.jpg'

const Welcome = () => {
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

    </div>
  )
}

export default Welcome