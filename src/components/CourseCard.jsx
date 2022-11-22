import Courses from "../pages/Courses"

const CourseCard = (props)=> {
    return(
        <div className= "course-card" >
            <div className= "course-info">
                <h3 className="name-display">Course Name: {props.name}</h3>
                <button onClick={props.joinOnClick}>Join this class</button>
                <button onClick={props.viewOnClick}>View course details</button>
            </div>
        </div>
    )
}

export default CourseCard
