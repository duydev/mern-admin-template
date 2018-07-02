import React from 'react'
import { Helmet } from 'react-helmet'

import { MainRouter } from '..'

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="%s - Mern Admin" title="Home" />
      <MainRouter />
    </div>
  )
}

export default App
