import React from 'react'
import PropTypes from "prop-types";
import {TableRow} from "shared/TableRow";
import {TableCell} from "shared/TableCell";
import {TableBody} from "shared/TableBody";
import {TableEditableCell} from "shared/TableEditableCell";


export const MainTableBody = ({tableContent, setTableContent}) => {

  const handleChange = (id, field, value) => {
    setTableContent(prevState => (
      prevState.map(
        el => el.id === id ? {...el, [field]: value} : el
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
          <TableEditableCell
            className='table-cell__subject'
            value={data.subject}
            placeholder='Название предмета'
            onChange={(event) => handleChange(data.id, 'subject', event.target.value)}
          />
          <TableEditableCell
            className="table-cell__editable_number"
            value={data.excellent}
            onChange={(event) => handleChange(data.id, 'excellent', event.target.value)}
          />
          <TableEditableCell
            className="table-cell__editable_number"
            value={data.good}
            onChange={(event) => handleChange(data.id, 'good', event.target.value)}
          />
          <TableEditableCell
            className="table-cell__editable_number"
            value={data.satisfying}
            onChange={(event) => handleChange(data.id, 'satisfying', event.target.value)}
          />
          <TableEditableCell
            className="table-cell__editable_number"
            value={data.bad}
            onChange={(event) => handleChange(data.id, 'bad', event.target.value)}
          />
          <TableEditableCell
            className="table-cell__editable_number"
            value={data.awful}
            onChange={(event) => handleChange(data.id, 'awful', event.target.value)}
          />
          <TableEditableCell
            className="table-cell__checked-in"
            value={data.absences}
            onChange={(event) => handleChange(data.id, 'absences', event.target.value)}
          />
          <TableCell className='table-cell__checked-in'>{data.validated ? data.checkedIn : null}</TableCell>
          <TableCell>
            <button onClick={() => handleDeleteRow(data.id)}>Удалить предмет</button>
          </TableCell>
          {!data.validated ? <TableCell>Строка заполнена неправильно!</TableCell> : null}
        </TableRow>
      ))}
    </TableBody>
  )
}

MainTableBody.propTypes = {
  tableContent: PropTypes.array,
  setTableContent: PropTypes.func,
};
