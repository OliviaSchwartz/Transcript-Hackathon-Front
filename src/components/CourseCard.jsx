import {useState} from 'react'

const CourseCard = (props)=> {
    return(
        <div className= "card course-card">
            <div className= "course-info">
                <h3 className="name-display">{props.name}</h3>
            </div>
        </div>
    )
}

export default CourseCard
