import React from 'react'
import {Link} from 'react-router-dom' 
import './dropdown.css'

const Dropdown = (props)=>{
    const list = props.list.map(list=>{
        return <div key={list} className="text-left hover:bg-blue-200 px-2 py-1 w-full border-b">
                <Link to={`/?genre=${list}`}>{list}</Link>
                </div>
    })
    
    console.log(props.list)
    return(
        <div className="container">
            <div className="dropdown button flex-inline flex-grow dropdown">
            {`${props.content}`}<span className="pl-1"><ion-icon name="caret-down-outline" style={{'fontSize':'14px'}}></ion-icon></span>
            <div className="hidden absolute shadow w-24 bg-white border rounded w-auto text-sm dropdown-content">{list}</div>
            
            </div>
        </div>
        
    )
}

export default Dropdown