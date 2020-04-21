import React, { Component } from 'react';
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import Navbar from './components/navbar.component'
import ExerciseList from './components/exercises-list.component'
import EditExercise from './components/edit-exercise.component'
import CreateExercise from './components/create-exercise.component'
import CreateUser from './components/create-user.component'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="container">
          <Navbar/>
          <br/>
          <Switch>
          <Route exact path="/" component={ExerciseList}></Route>
          <Route exact path="/edit/:id" component={EditExercise}></Route>
          <Route exact path="/create" component={CreateExercise}></Route>
          <Route exact path="/user" component={CreateUser}></Route>
          </Switch>
          </div>
            </BrowserRouter>
        );
    }
}

export default App;