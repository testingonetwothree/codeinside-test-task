import React, {useState} from 'react'
import {Table} from "../../../shared/Table";
import {MainTableHeader} from "./MainTableHeader/MainTableHeader";
import {MainTableBody} from "./MainTableBody/MainTableBody";
import {generateId} from "../../../common/utils";
import {tableData} from "../../../mock/tabledata";
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
    validated: true
  }

  const [tableContent, setTableContent] = useState(tableData)

  const handleAddRow = () => {
    setTableContent([...tableContent, emptyRow])
  }

  const handleValidate = (numbers, subject) => {
    const subjectIsOk = (subject.length >= 3 && subject.length <= 16)
    const numbersAreOk = !numbers.some(isNaN)
    return Boolean(numbersAreOk && subjectIsOk)
  }

  const handleCheckResults = () => {
    tableContent.map((d) => {
      const totalMarks = Number(d.excellent) + Number(d.good) + Number(d.satisfying) + Number(d.bad) + Number(d.awful)
      const averageScore = (Number(d.excellent) * 5 + Number(d.good) * 4 + Number(d.satisfying) * 3 + Number(d.bad) * 2 + Number(d.awful)) / totalMarks
      const result = {
        discipline: d.subject,
        average_rating: averageScore,
        isChecked: Boolean(averageScore > 4.2 && d.absences < 8)
      }
      setTableContent(prevState => (
        prevState.map(
          el => el.id === d.id ? {
            ...el,
            checkedIn: (averageScore > 4.2 && d.absences < 8) ? 'Да' : 'Нет',
            validated: Boolean(handleValidate([d.excellent, d.good, d.satisfying, d.bad, d.awful, d.absences], d.subject))
          } : el
        )
      ))
      return console.log(JSON.stringify(result, null, ' '))
    })
  }


  return (
    <div className='table-wrapper'>
      <Table className='table-general'>
        <MainTableHeader/>
        <MainTableBody
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
