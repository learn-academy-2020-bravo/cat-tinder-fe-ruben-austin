import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './App.css'
import CatShow from './pages/CatShow'
import Header from './components/Header'
import CatList from './pages/CatList'
import NewCat from './pages/NewCat'



  const App = () => {


    return(

        <Router>
        <Header />
          <Switch>
            <Route  exact path="/" render={ () => <CatList/> } />
            <Route exact path="/show/:id" render={ (props) => <CatShow props={props}/> } />
            <Route path="/newcat" render={ () => <NewCat/> } />
          </Switch>
        </Router>

    )
}
export default App
