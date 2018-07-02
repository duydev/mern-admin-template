import React from 'react'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const UsersTable = props => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ABC </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>ABC </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default UsersTable
