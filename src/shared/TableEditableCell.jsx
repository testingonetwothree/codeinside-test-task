import React from 'react'
import {TableCell} from "./TableCell";

export const TableEditableCell = ({value, className, onChange}) => {


  return (
    <TableCell className={className}>
      <input className={className} value={value} onChange={onChange}/>
    </TableCell>
  )
}
