import React from 'react'
import SlideCard from './Slide/Slide'
import './Card.css'
import Catalog from './Catalog'
const AppContent = props=>{
    return (
    <div className="font-kanit" style={{height:'100vx'}}>

        <SlideCard cardlist={
            [
                'img-1',
                'img-2',
                'img-3',
                'img-4',
                'img-5',
                'img-1',
                'img-2',
                'img-3',
                'img-4',
                'img-5',

            ]
        }/>
        <Catalog tag="Recommendation"/>
        <Catalog tag="Hot"/>
        <Catalog tag="Lastest"/>
        <Catalog tag="Romance"/>
        
    </div>
    )
}

export default AppContent