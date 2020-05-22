import React from 'react'

const StoryCard = props=>{
    return (
        <div className="border border-gray-500 rounded w-2/12 h-72 mx-1 my-1 p-px shadow">
        <div className="border border-gray-400 image rounded flex items-end m-1 p-px">
            <div className="border border-gray-400 bg-gray-500 bg-opacity-50 rounded w-full">
                <p className="p-1">{props.name}</p>
            </div>
        </div>        
        <p className="p-1">Author : {props.author}</p>
        <p className="p-1">Genre : {props.genre}</p>
    </div>
    )
}

export default StoryCard