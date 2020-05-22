import React, { useState } from 'react'

const SlideCard = props=>{

    const [current,setCurrent] = useState(0)

    const changeBullet = (id) =>{
        setCurrent(id)
    }

    const radioIcon = props.cardlist.map((list,index)=>{
        
        const bulletActive = ()=>{
            if(current === index){
                return "radio-button-on-outline"
            }else{
                return "radio-button-off-outline"
            }
        }

        //console.log(bulletActive())
        
        return (
        <div 
            className="mx-px h-4 cursor-pointer" 
            id={`bulletin-${index}`} 
            key={`bulletin-${index}`} 
            onClick={()=>{
                changeBullet(index);
            }}>
                <ion-icon name={bulletActive()}></ion-icon>
        </div>)
    })
    //console.log(radioIcon)
    return (
    <div className="border-gray-400 bg-blue-200" style={{height:"360px"}}>
        <div className="border border-gray-600 rounded mx-auto bg-blue-400 flex items-end shadow w-3/4" style={{height:"360px"}}>
            <div className="flex bg-white bg-opacity-25 rounded justify-center text-sm p-px px-2 my-2 mx-auto">{radioIcon}</div>
        </div>

    </div>
    )
}

export default SlideCard