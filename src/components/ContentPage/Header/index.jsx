import React, {useState} from 'react'
import {useAuth} from "../../../hooks/useAuth";
import './styles.css'

const projectName = 'Таблица успеваемости студента'
const studentName = 'Анатолий Васильевич П.'

export const Header = () => {
  const [dropdown, setDropdown] = useState(false)
  const auth = useAuth()

  return (
    <header className='header'>
      <div className='header__title'>
        {projectName}
      </div>
      <div
        className='header__student'
        onMouseOver={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        {studentName}
        {dropdown &&
        <div className='header__student_dropdown-menu'>
          <div className="header__student_dropdown-menu-item">О студенте</div>
          <div
            className="header__student_dropdown-menu-item"
            onClick={auth.handleLogout}
          >
            Выход
          </div>
        </div>
        }
      </div>
    </header>
  )
}
