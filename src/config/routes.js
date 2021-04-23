import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import About from '../pages/About'
import Locations from '../pages/Locations'
import Services from '../pages/Services'
import Team from '../pages/Team'



export default (
  <Switch>
    <Route exact path='/' component={ LandingPage } />
    <Route exact path='/about' component={ About } />
    <Route exact path='/locations' component={ Locations } />
    <Route exact path='/services' component={ Services } />
    <Route exact path='/team' component={ Team } />
  </Switch>
)