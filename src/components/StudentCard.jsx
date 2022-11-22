const StudentCard = (props)=> {
    return(
        <div className= "student-card" >
            <div className= "student-info">
                <h3 className="name-display">Student Name: {props.name}</h3>
                <button onClick={props.onClick}>View Transcript</button>
            </div>
        </div>
    )
}

export default StudentCard
