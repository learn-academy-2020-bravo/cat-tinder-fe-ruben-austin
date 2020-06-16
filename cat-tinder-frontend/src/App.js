import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import cats from './cats'
import Header from './components/Header'
import CatIndex from './pages/CatIndex'


  const App = () => {
    const [allcats, setAllCats] = useState(cats)
      // allCats: cats

    return(

        <Router>
        <Header />
          <Switch>
            <Route exact path="/" render={ (props) => <CatIndex cats={ this.state.allCats } /> } />
          </Switch>
        </Router>

    )
}
export default App
