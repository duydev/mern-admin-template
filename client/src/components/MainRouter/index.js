import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NotFound, AdminRouter } from '..'

const Router = () => {
  return (
    <Switch>
      <Route path="/admin" component={AdminRouter} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Router
