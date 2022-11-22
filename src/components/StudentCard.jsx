const StudentCard = (props)=> {
    return(
        <div className= "card student-card" >
            <div className= "student-info">
                <h3 className="name-display">Name: {props.name}</h3>
                <button onClick={props.onClick}>View Transcript</button>
            </div>
        </div>
    )
}

export default StudentCard
