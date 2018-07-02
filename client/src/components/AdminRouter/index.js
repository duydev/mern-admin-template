import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PageNotFound, AdminHeader, AdminFooter } from '..'

const Router = () => {
  return (
    <div>
      <AdminHeader />
      <Switch>
        <Route component={PageNotFound} />
      </Switch>
      <AdminFooter />
    </div>
  )
}

export default Router
