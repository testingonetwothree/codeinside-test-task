import React, {useState} from 'react'
import {Table} from "../../../shared/Table";
import {tableData} from "../../../mock/tabledata";
import {MainTableHeader} from "./MainTableHeader/MainTableHeader";
import {MainTableBody} from "./MainTableBody/MainTableBody";
import {generateId} from "../../../common/utils";
import './styles.css'


export const MainTable = () => {

  const emptyRow = {
    id: generateId(),
    subject: 'Название предмета',
    excellent: 0,
    good: 0,
    satisfying: 0,
    bad: 0,
    awful: 0,
    absences: 0,

  }

  const [tableContent, setTableContent] = useState(tableData)

  const handleAddRow = () => {
    setTableContent([...tableContent, emptyRow])
  }

  const handleCheckResults = () => {
    {tableContent.map((d) => {
      const totalMarks = d.excellent + d.good + d.satisfying + d.bad + d.awful
      const averageScore = (d.excellent * 5 + d.good * 4 + d.satisfying * 3 + d.bad * 2 +d.awful) / totalMarks
      const result = {
        discipline: d.subject,
        average_rating: averageScore,
        isChecked: Boolean(averageScore > 4.2 && d.absences < 8)
      }

      setTableContent(prevState => (
        prevState.map(
          el => el.id === d.id ? {...el, checkedIn: (Boolean(averageScore > 4.2 && d.absences < 8))}: el
        )
      ))

      return console.log(JSON.stringify(result))
    })}
  }

    return (
      <div className='table-wrapper'>
        <Table className='table-general'>
          <MainTableHeader/>
          <MainTableBody
            handleAddRow={handleAddRow}
            tableContent={tableContent}
            setTableContent={setTableContent}
          />
        </Table>
        <div className='table__buttons-wrapper'>
          <button className='table__button' onClick={handleAddRow}>Добавить предмет</button>
          <button className='table__button' onClick={handleCheckResults}>Проверить</button>
        </div>

      </div>
    )
  }
