import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PageNotFound, AdminHeader, AdminFooter, PageAdminUserList } from '..'

const Router = () => {
  return (
    <div>
      <AdminHeader />
      <Switch>
        <Route exact path="/admin/users" component={PageAdminUserList} />
        <Route component={PageNotFound} />
      </Switch>
      <AdminFooter />
    </div>
  )
}

export default Router
