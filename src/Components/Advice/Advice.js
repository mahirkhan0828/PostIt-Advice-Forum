import React from 'react';
import './Advice.css';

import {Note} from '../Note/Note';

export class Advice extends React.Component{
    render(){
        // Check to see if the component has received the data yet.
        if (!this.props.data['career']){
            return(
                <div></div>
            )
        }else{
            let careerData =  this.props.data['career'];
            let collegeData = this.props.data['college'];
            let motivationData = this.props.data['motivation'];
            let fitnessData = this.props.data['fitness'];
            let relationshipsData = this.props.data['relationships'];

            //Check to see how the data should be sorted
            if(this.props.sortby === 'MostLikes'){
                careerData = careerData.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
                collegeData = collegeData.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
                motivationData = motivationData.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
                fitnessData = fitnessData.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
                relationshipsData = relationshipsData.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
            }else{
                careerData = careerData.sort((a, b) => (a.id < b.id) ? 1 : -1);
                collegeData = collegeData.sort((a, b) => (a.id < b.id) ? 1 : -1);
                motivationData = motivationData.sort((a, b) => (a.id < b.id) ? 1 : -1);
                fitnessData = fitnessData.sort((a, b) => (a.id < b.id) ? 1 : -1);
                relationshipsData = relationshipsData.sort((a, b) => (a.id < b.id) ? 1 : -1);
            }

            return(
                <div className = "Advice">
                    <div className = "Career">
                        <h2>Career</h2>
                            {careerData.map(note=>{
                                return (
                                    <div>
                                        <Note note = {note} key = {note.id} categoryNum = {1}/>
                                        <div className = "break"></div>
                                    </div>
                                )
                            })}
                    </div>
                    <div className = "College">
                        <h2>College</h2>
                        {collegeData.map(note=>{
                                return (
                                    <div>
                                        <Note note = {note} key = {note.id} categoryNum = {2}/>
                                        <div className = "break"></div>
                                    </div>
                                )
                            })}
                    </div>
                    <div className = "Motivation">
                        <h2>Motivation</h2>
                        {motivationData.map(note=>{
                                return (
                                    <div>
                                        <Note note = {note} key = {note.id} categoryNum = {3}/>
                                        <div className = "break"></div>
                                    </div>
                                )
                            })}
                    </div>
                    <div className = "Fitness">
                        <h2>Fitness/Health</h2>
                        {fitnessData.map(note=>{
                                return (
                                    <div>
                                        <Note note = {note} key = {note.id} categoryNum = {4}/>
                                        <div className = "break"></div>
                                    </div>
                                )
                            })}
                    </div>
                    <div className = "Relationships">
                        <h2>Relationships</h2>
                        {relationshipsData.map(note=>{
                                return (
                                    <div>
                                        <Note note = {note} key = {note.id} categoryNum = {5}/>
                                        <div className = "break"></div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
    
            )
        }
    }
}