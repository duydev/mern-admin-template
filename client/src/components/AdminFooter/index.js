import React from 'react'
import moment from 'moment'

import { withStyles } from '@material-ui/core'
import indigo from '@material-ui/core/colors/indigo'

const styles = {
  redText: {
    color: 'red'
  },
  footer: {
    textAlign: 'center',
    backgroundColor: indigo[300],
    padding: '10px 0',
    color: '#fff',
    fontWeight: '500'
  }
}

const FooterHeader = props => {
  const { classes } = props
  return (
    <footer className={classes.footer}>
      {moment().format('Y')} &copy; Make with{' '}
      <span className={classes.redText}>❤</span> by Trần Nhật Duy
    </footer>
  )
}

export default withStyles(styles)(FooterHeader)
