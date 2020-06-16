import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import CatIndex from './pages/CatIndex'


  const App = () => {


    return(

        <Router>
        <Header />
          <Switch>
            <Route exact path="/" render={ () => <CatIndex/> } />
          </Switch>
        </Router>

    )
}
export default App
