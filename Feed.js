import React from 'react'
import "./css/feed.css"
import MessageSender from './MessageSender'
import Storyreel from  './Storyreel'
function Feed() {
    return (
        <div className="feed">
            <Storyreel/>
            <MessageSender/>
            
        </div>
    )
}

export default Feed
