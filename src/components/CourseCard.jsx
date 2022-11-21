import Courses from "../pages/Courses"

const CourseCard = (props)=> {
    return(
        <div className= "card course-card" >
            <div className= "course-info">
                <h3 className="name-display">Course: {props.name}</h3>
                <button>Join this class</button>
            </div>
        </div>
    )
}

export default CourseCard
