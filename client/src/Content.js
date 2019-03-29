import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Signup from "./components/Signup"
import Signin from "./components/Signin"
import MonCompte from "./components/MonCompte"
import Articles from "./components/Articles"
import Sources from "./components/Sources"


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Signup}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/monCompte' component={MonCompte}/>
      <Route path='/articles' component={Articles}/>
      <Route path='/classement' component={Sources} />
    </Switch>
  </main>
)

export default Main
