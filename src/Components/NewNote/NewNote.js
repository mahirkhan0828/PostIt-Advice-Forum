import React from 'react';
import './NewNote.css';
const axios = require('axios');

export class NewNote extends React.Component{
    constructor(props){
        super(props);
        this.handleNoteChange = this.handleNoteChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAnonymousChange = this.handleAnonymousChange.bind(this);
        this.handleCategoryCareerChange = this.handleCategoryCareerChange.bind(this);
        this.handleCategoryCollegeChange = this.handleCategoryCollegeChange.bind(this);
        this.handleCategoryMotivationChange = this.handleCategoryMotivationChange.bind(this);
        this.handleCategoryFitnessChange = this.handleCategoryFitnessChange.bind(this);
        this.handleCategoryRelationshipsChange = this.handleCategoryRelationshipsChange.bind(this);
        this.addNote = this.addNote.bind(this);
        this.state = {
            note: '',
            name: 'Anonymous',
            category: 3
        }
    }
    // We need to handle changes for input events as well as click events by 
    // setting the correct state which will then be used in the query to add 
    // a note through a post request.
    handleNoteChange(event){
        this.setState({
            note : event.target.value
        })
    }
    handleNameChange(event){
        this.setState({
            name : event.target.value
        })
    }
    handleAnonymousChange(){
        this.setState({
            name: 'Anonymous'
        })
        let elem = document.getElementById('NamePlaceholder');
        elem.setAttribute('placeholder','Anonymous');
    }
    handleCategoryCareerChange(){
        this.setState({
            category: 1
        })
    }
    handleCategoryCollegeChange(){
        this.setState({
            category: 2
        })
    }
    handleCategoryMotivationChange(){
        this.setState({
            category: 3
        })
    }
    handleCategoryFitnessChange(){
        this.setState({
            category: 4
        })
    }
    handleCategoryRelationshipsChange(){
        this.setState({
            category: 5
        })
    }
    addNote(){

        try{
            axios.post(`https://post-it-real-surprised-leopard.mybluemix.net/api/notes/create/?category=${this.state.category}
            &note=${this.state.note}&user=${this.state.name}`);
            alert("Note has successfully been added. Refresh previous page to view.")
        }catch(error){
            alert("Error has occured and note has not been added.")
        }
        window.location.reload();
    }
    render(){
        return(
            <div className = "App" id = "app">
                <h1 className = "rainbow2">Post a New Note</h1>
                <div className = "NewNote">
                    <textarea placeholder = "Enter your Advice here" onChange = {this.handleNoteChange}></textarea>
                    <h2>What is your name?</h2>
                    <div className = "Name">
                        <input id = "NamePlaceholder" placeholder = "Name" onChange = {this.handleNameChange}></input>
                        <button id = "anonymous" onClick = {this.handleAnonymousChange}>Anonymous</button>
                    </div>
                    <div className = "Category">
                        <h2>Category?</h2>
                        <button onClick = {this.handleCategoryCareerChange}>Career</button>
                        <button onClick = {this.handleCategoryCollegeChange}>College</button>
                        <button onClick = {this.handleCategoryMotivationChange}>Motivation</button>
                        <button onClick = {this.handleCategoryFitnessChange}>Fitness/Health</button>
                        <button onClick = {this.handleCategoryRelationshipsChange}>Relationships</button>
                    </div>
                <button className = "SubmitButton" onClick = {this.addNote}>Submit</button>    
                </div>
            </div>
        )
    }
}