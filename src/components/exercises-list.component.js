import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Exercise=({exercise,deleteExercise})=>{
    return(
<tr>
    <td>{exercise.username}</td>
    <td>{exercise.description}</td>
    <td>{exercise.duration}</td>
    <td>{exercise.date.substring(0,10)}</td>
<td><Link to={`/edit/${exercise._id}`}>Edit</Link> | <Link  onClick={()=>{deleteExercise(exercise._id)}} to="#"> Delete</Link></td>
</tr>
    )
}


class ExercisesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/exercises')
            .then(res => {
                this.setState({ exercises: res.data })
            })
            .catch(err => console.log(err))
    }
    deleteExercise = (id) => {
        axios.delete(`http://localhost:3000/exercises/${id}`)
            .then(res => console.log(res.data))
        this.setState({ exercises: this.state.exercises.filter(ele => ele._id !== id) })

    }
    exerciseList=()=>{
    return  this.state.exercises.map(currentExercise=>{
            return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id}/>
        })
    }
    render() {
        return (
            <div>
                <h1>Logged Exercises</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExercisesList