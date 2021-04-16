import React from 'react'
import {TableRow} from "../../../../shared/TableRow";
import {TableCell} from "../../../../shared/TableCell";
import {TableBody} from "../../../../shared/TableBody";
import {TableEditableCell} from "../../../../shared/TableEditableCell";
import '../styles.css'

export const MainTableBody = ({tableContent, setTableContent}) => {

  const handleChange = (id, field, value) => {
    setTableContent(prevState => (
      prevState.map(
        el => el.id === id ? {...el, [field]: value}: el
      )
    ))
  }


  const handleDeleteRow = (id) => {
    setTableContent(
      tableContent.filter(x => (
        x.id !== id
      ))
    )
  }

  return (
    <TableBody>
    {tableContent.map((data) => (
      <TableRow key={data.id} className="table__table-row">
        <TableEditableCell className='table-cell__subject' value={data.subject} onChange={(event) => handleChange(data.id, 'subject', event.target.value)}/>
        <TableEditableCell className="table-cell__editable_number" value={data.excellent} onChange={(event) => handleChange(data.id, 'excellent', Number(event.target.value))}/>
        <TableEditableCell className="table-cell__editable_number" value={data.good} onChange={(event) => handleChange(data.id, 'good', Number(event.target.value))}/>
        <TableEditableCell className="table-cell__editable_number" value={data.satisfying} onChange={(event) => handleChange(data.id, 'satisfying', Number(event.target.value))}/>
        <TableEditableCell className="table-cell__editable_number" value={data.bad} onChange={(event) => handleChange(data.id, 'bad', Number(event.target.value))}/>
        <TableEditableCell className="table-cell__editable_number" value={data.awful} onChange={(event) => handleChange(data.id, 'awful', Number(event.target.value))}/>
        <TableEditableCell className="table-cell__checked-in" value={data.absences} onChange={(event) => handleChange(data.id, 'absences', Number(event.target.value))}/>
        <TableCell className='table-cell__checked-in'>{data.checkedIn ? 'Да' : 'Нет'}</TableCell>
        <TableCell>
          <button onClick={() => handleDeleteRow(data.id)}>Удалить предмет</button>
        </TableCell>
      </TableRow>
    ))}
    </TableBody>
  )
}
