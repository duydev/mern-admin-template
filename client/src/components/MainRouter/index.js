import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PageNotFound, AdminRouter } from '..'

const Router = () => {
  return (
    <Switch>
      <Route path="/admin" component={AdminRouter} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Router
