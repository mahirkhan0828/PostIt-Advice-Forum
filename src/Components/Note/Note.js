import React from 'react';
import './Note.css';
import axios from 'axios';


export class Note extends React.Component{
    constructor(props){
        super(props);
        this.updateNoteLikes = this.updateNoteLikes.bind(this);
        this.state = {
            noteImages : ['https://lh3.googleusercontent.com/proxy/3W1b-CwOZfKqtOdbIL9qHL8ph0gWXULCUVXxICsa5NvGwOjjhqeISAGbTBwIpUHcKDuqzeVUKkz512lQZHPGo4xQLgAAQkw',
        'https://images.clipartlogo.com/files/images/21/218409/yellow-post-it-note_p',
        'https://i.pinimg.com/originals/a3/81/54/a38154bef8aac28acf0e3bd76bb3ff5b.png',
        ]
        }
    }
    getRandomNoteImage(){
        var randomNumber = Math.floor(Math.random()*(this.state.noteImages.length));
        return this.state.noteImages[randomNumber];
    }
    updateNoteLikes(){
        let id = this.props.note.id;
        let categoryNum = this.props.categoryNum;
        axios.put(`https://nameless-oasis-07678.herokuapp.com/notes/updatelikes/?id=${id}&category=${categoryNum}`);
        this.refresh();
    }
    refresh(){
        window.location.reload();
    }
    render(){
        let noteImage = this.getRandomNoteImage();
        return(
            <div className = "Note" style ={ { backgroundImage: `url(${noteImage})` } }>
                <div className = "Content">
                    <p>{this.props.note['note']}</p>
                    <p>-{this.props.note['user']}</p>
                </div>
                <div className = "Likes">
                    <img src = "https://hotemoji.com/images/dl/u/heart-decoration-emoji-by-twitter.png" alt = "Likes: "></img>
                    <p>{this.props.note['likes']}</p>
                    <img id = "ThumbsUp" onClick = {this.updateNoteLikes} src = "https://webstockreview.net/images/emoji-clipart-thumbs-up.png" alt = "Thumbs up"></img>
                    <p id = "likeText">Like</p>
                </div>
            </div>
        )
    }
}