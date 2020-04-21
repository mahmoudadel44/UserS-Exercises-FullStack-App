import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
class EditExercise extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    componentDidMount() {
        // this.setState({
        //     users: ['test user'],
        //     username: 'test user'
        // })
        axios.get(`http://localhost:3000/exercises/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    username: res.data.username,
                    description: res.data.description,
                    duration: Number(res.data.duration),
                    date: new Date(res.data.date)
                })
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:3000/users/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => {
                            return (
                                user.username
                            )
                        })
                    })
                }
            })

    }
    onChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    onChangeDescription = (e) => {
        this.setState({ description: e.target.value })
    }
    onChangeDuration = (e) => {
        this.setState({ duration: e.target.value })
    }
    onChangeDate = (date) => {
        this.setState({ date: date })
    }
    onSubmit = (e) => {
        e.preventDefault()
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }
        console.log(exercise)
        // window.location=('/')
        axios.post(`http://localhost:3000/exercises/update/${this.props.match.params.id}`, exercise)
            .then(res => console.log(res.data))
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h2>Edit Exercise Log</h2>
                <form onSubmit={this.onSubmit}>
                    {/* username */}
                    <div className="form-group">
                        <label>User Name:</label>
                        <select
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        >
                            {this.state.users.map(user => {
                                return (
                                    <option
                                        value={user}
                                        key={user}
                                    >
                                        {user}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    {/* description */}
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    {/* duration */}
                    <div className="form-group">
                        <label>Duration(in minutes):</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    {/* date */}
                    <div className="form-group">
                        <label>Date:</label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            >

                            </DatePicker>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Edit Exercise Log" />
                    </div>
                </form>

            </div>
        )
    }
}

export default EditExercise