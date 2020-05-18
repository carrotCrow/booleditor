import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="border rounded shadow mx-auto mt-4 p-4 bg-green-400 w-2/4 font-mono">
                <h1 className="text-center text-2xl mb-2">Hello World!!</h1>
                <hr/>
                <p className="text-white mt-2">this is reactailwind parcel bundler</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))