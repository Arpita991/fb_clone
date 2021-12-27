import React from 'react'
import "./css/story.css"
import { Avatar } from '@mui/material'

function Storyreel() {
    return (
        <div className="storyReel">
            <div className="story" style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqVYfA5yijbN9J-kx1kCvKk3NS4hiad9wTQ&usqp=CAU')`}}>
                <Avatar/>
                <h4>Arpita Borade</h4>
            </div>

            <div className="story" style={{backgroundImage:`url('https://i.pinimg.com/564x/24/0c/e7/240ce743e9e5bd6daf9e7e16b95c4957.jpg')`}}>
                <Avatar/>
                <h4>Damini Khatik</h4>
            </div>

            <div className="story" style={{backgroundImage:`url('https://media.istockphoto.com/photos/orange-autumn-background-old-watercolor-paper-texture-painted-marbled-picture-id1286001324?b=1&k=20&m=1286001324&s=170667a&w=0&h=8uzC9AfftH9H4lEA4QjZRSCLoEjtxqF42M8Qu9RslzY=')`}}>
                <Avatar/>
                <h4>Mansi</h4>
            </div>

            <div className="story" style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg')`}}>
                <Avatar/>
                <h4>Mayuri </h4>
            </div>

            <div className="story" style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg')`}}>
                <Avatar/>
                <h4>Manali </h4>
            </div>
            
        </div>
    )
}

export default Storyreel
