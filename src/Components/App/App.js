import React from 'react';
import './App.css';
import {Advice} from '../Advice/Advice';
import {NewNote} from '../NewNote/NewNote';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const axios = require('axios');

class App extends React.Component{
  constructor(props){
    super(props);
    this.getData = this.getData.bind(this);
    this.mostLikes = this.mostLikes.bind(this);
    this.mostRecent = this.mostRecent.bind(this);
    this.state = {
      NoteData: [],
      SortBy: 'MostRecent'
    }
  }
  mostLikes(){
    this.setState({SortBy: 'MostLikes'});
  }
  mostRecent(){
    this.setState({SortBy: 'MostRecent'});
  }
  getData(){
    let data = axios.get('https://nameless-oasis-07678.herokuapp.com/notes');
    data.then(response=>{
      let NoteData = response['data'];
      this.setState({NoteData: NoteData});
    })
  }
  refresh(){
    window.location.reload();
  }
  changePage(){
    window.open('/newnote');
  }
  componentDidMount(){
    this.getData();
  }
  render(){
    return (
      <Router>
        <Switch>
          <Route path = '/newnote'>
            <NewNote />
          </Route>
          <Route path = '/'> 
            <div className = "App">
              <h1><span className = "rainbow">Post-It  Advice  Forum</span></h1>
              <button className = "NewPostButton" onClick = {this.changePage}>Post New Note</button>
              <h2>Sort By:</h2>
              <button className = "glow-on-hover" onClick = {this.mostRecent}>Most Recent</button>
              <button className = "glow-on-hover" onClick = {this.mostLikes}>Most Likes</button>
              < Advice  data = {this.state.NoteData} sortby = {this.state.SortBy}/>
            </div>
          </Route> 
        </Switch>
      </Router>
    )
  }
}

export default App;
