import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
//
import '../main.css'
// App component
import Navbar from '../Navbar/Navbar'
import AppContent from '../AppContent/AppContent'

const App = ()=>{
    return (
        <Router>
        <div className="layout">
            
            <Navbar />
            
            <Switch>

                <Route path="/login">
                    Login
                </Route>

                <Route path="/register">
                    Register
                </Route>

                <Route path="/">
                    <AppContent />
                </Route>
                
            </Switch>

            
            

        </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))