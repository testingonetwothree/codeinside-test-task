import React from 'react'
import {TableRow} from "../../../../shared/TableRow";
import {TableCell} from "../../../../shared/TableCell";
import {TableHeader} from "../../../../shared/TableHeader";
import {headerData} from "../../../../mock/headerdata";

export const MainTableHeader = () => (
  <TableHeader className='table__header'>
    <TableRow className='table__table-row'>
      <TableCell className='table-cell__subject'>{headerData.subject}</TableCell>
      <TableCell className='table-cell__editable_number'>{headerData.excellent}</TableCell>
      <TableCell className='table-cell__editable_number'>{headerData.good}</TableCell>
      <TableCell className='table-cell__editable_number'>{headerData.satisfying}</TableCell>
      <TableCell className='table-cell__editable_number'>{headerData.bad}</TableCell>
      <TableCell className='table-cell__editable_number'>{headerData.awful}</TableCell>
      <TableCell className='table-cell__checked-in'>{headerData.absences}</TableCell>
      <TableCell className='table-cell__checked-in'>{headerData.isCheckedIn}</TableCell>
    </TableRow>
  </TableHeader>
)
