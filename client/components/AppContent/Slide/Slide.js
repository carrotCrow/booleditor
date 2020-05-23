import React, { useState, useEffect } from 'react'
import './slide.css'

const SlideCard = props=>{

    const [current,setCurrent] = useState(0)
    const [extended,setExtended] = useState({
        width: window.innerWidth
    })

    let smoothDuration = '500';

    const changeBullet = (id) =>{
        setCurrent(id)
    }

    useEffect(()=>{
        const resizing = ()=>{
            setExtended({
                width: window.innerWidth
            })
            smoothDuration = '75'
        }
        window.addEventListener('resize', resizing)
    },1000)
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

    const navLeftHandler = ()=>{
        current-1 < 0 ? setCurrent(props.cardlist.length-1) : setCurrent(current-1)       
    }

    const navRightHandler = ()=>{
        current +1 >= props.cardlist.length ? setCurrent(0): setCurrent(current+1)       
    }

    const coverCard = props.cardlist.map((list,index)=>{
        return (
        <div className="" style={{width: window.innerWidth}}>
            {list}
        </div>
                )
    })

    //render ---- =>
    return (
    <div className="flex w-full relative z-0 overflow-hidden" style={{height:"380px"}}>

        

        <div className="absoulute bg-gray-400 flex">
            <div className={`flex ease-in-out duration-${smoothDuration}`} style={{transform: `translateX(${-(current*extended.width)}px)`}}>
                {coverCard}
            </div>            
        </div>

        

        <div className="border-b shadow-xl border-gray-500 absolute w-full flex justify-between z-0 h-full" style={{height:"380px"}}>

            <button className="flex justify-center items-center w-2/12 sm:w-1/12 text-5xl focus:outline-none hover:bg-gray-500 hover:opacity-75 rounded-md"
                    onClick={()=>{navLeftHandler()}}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button className="flex justify-center items-center w-2/12 sm:w-1/12 text-5xl focus:outline-none hover:bg-gray-500 hover:opacity-75 rounded"
                    onClick={()=>{navRightHandler()}}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>

        </div>

        <div className="flex justify-center absolute inset-x-0 bottom-0 py-2">
            <div className="mx-auto flex">{radioIcon}</div>
        </div>
    </div>
    )
}

export default SlideCard