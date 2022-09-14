import { useParams } from "react-router"

const Exercise = () => {
  const params = useParams()
  return (
    <div className="exercise-container">
        {params.exercise}
    </div>
  )
}

export default Exercise