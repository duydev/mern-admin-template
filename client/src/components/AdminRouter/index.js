import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFound from '../NotFound'

const Router = () => {
  return (
    <Switch>
      <Route component={NotFound} />
    </Switch>
  )
}

export default Router
