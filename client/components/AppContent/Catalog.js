import React from 'react'
import StoryCard from './StoryCard'
const Catalog = props=>{
    return (
        <div className="my-4 mx-auto w-11/12 border rounded flex-inline justify-around text-sm py-1 bg-indigo-100 border-white">
            <h1 className="pt-2 pl-2 pb-1 text-2xl">{props.tag}</h1>
            <hr className="my-1 mx-2 shadow"/>            
            <div className="flex-inline sm:flex justify-around text-sm">
                <StoryCard name="Jason Adventure" author="Cooler Jason" genre={["Adventure"]}/>
                <StoryCard name="Jason Adventure" author="Cooler Jason" genre={["Adventure"]}/>
                <StoryCard name="Jason Adventure" author="Cooler Jason" genre={["Adventure"]}/>
                <StoryCard name="Jason Adventure" author="Cooler Jason" genre={["Adventure"]}/>
                <StoryCard name="Jason Adventure" author="Cooler Jason" genre={["Adventure"]}/>
            </div>
            <hr className="my-1 mx-2 shadow"/>
            <div className="flex justify-end">
                <button className="focus:outline-none hover:text-blue-400 border rounded py-px px-2 mx-5 my-px">
                    <span className="text-sm">view more...</span>
                </button>
            </div>


            
        </div>
    )
}

export default Catalog