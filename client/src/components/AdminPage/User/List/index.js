import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const PageAdminUserList = () => {
  return (
    <div>
      <Helmet title="Manage Users" />
      <Grid container spacing={24} style={{ marginTop: '60px' }}>
        <Grid item xs={12} style={{ padding: '20px' }}>
          <Paper elevation={6}>Content In Here</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.data,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(PageAdminUserList)
