import welcomeBg from '../Assets/WODLog_Home_Image.jpg'

const Welcome = () => {
  return (
    <div className='welcome-container'>
        <img src={welcomeBg} alt="bg" className='welcome-bg'/>

        <div className="logworkout-btn-container">
            <p>Click here to</p>
            <button>Log a Workout</button>
        </div>
    </div>
  )
}

export default Welcome