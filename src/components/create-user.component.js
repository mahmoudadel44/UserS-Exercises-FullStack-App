import React, { Component } from 'react'
import axios from 'axios'
class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }
    }
    onChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: this.state.username,
        }
        console.log(user)

axios.post('http://localhost:3000/users/add',user)
.then(res=>console.log(res.data))
        this.setState({ username: '' })
    }
    render() {
        return (
            <div>
                <h1>You Are In CreateUser Component</h1>
                <form onSubmit={this.onSubmit}>
                    {/* username */}
                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Create User" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser