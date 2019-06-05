import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Signup from "./components/Signup"
import Signin from "./components/Signin"
import MonCompte from "./components/MonCompte"
import Articles from "./components/Articles"
import Sources from "./components/Sources"
import Birthdays from "./components/Birthdays"
import Today from "./components/Today"
import Events from "./components/Events"


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Signup}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/monCompte' component={MonCompte}/>
      <Route path='/articles' component={Articles}/>
      <Route path='/classement' component={Sources} />
      <Route path='/birthdays' component={Birthdays} />
      <Route path='/today' component={Today} />
      <Route path='/events' component={Events} />
    </Switch>
  </main>
)

export default Main
