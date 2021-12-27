import React from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Avatar } from '@mui/material';
import "./css/messagesender.css"
function MessageSender() {
    return (
        <div className="messagesender">
            <div className="messagesender__top">
                <Avatar/>

                <form>
                    <input type="text" placeholder="What's on your mind, Arpita?"/>
                </form>
            </div>

            <div className="messagesender__bottom">
                <div className="messangerOptions">

                </div>
                </div>


            <div className="messagesender__bottom">
                <div className="messangerOptions">
                    <VideoCallIcon style={{color:'red'}} fontSize="large"/>
                    <p>Live Video</p>
             </div>
             <div className="messangerOptions">
                    <PhotoLibraryIcon style={{color:'lightgreen'}} fontSize="large"/>
                    <p>Photo/Video</p>
             </div>
             <div className="messangerOptions">
                    <TagFacesIcon style={{color:'#ffb100'}} fontSize="large"/>
                    <p>Feeling/Activity</p>
             </div>

             
            </div>
            
        </div>
    )
}

export default MessageSender
