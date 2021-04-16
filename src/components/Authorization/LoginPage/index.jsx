import React, {useState} from 'react'
import {useAuth} from "../../../hooks/useAuth";
import './styles.css'


export const LoginPage = () => {

  const [input, setInput] = useState({
    login: '',
    password: '',
  })

  const auth = useAuth()

  const handleInput = (value, field) => {
    setInput((prevState) => ({
        ...prevState, [field]: value
      })
    )
  }

  return (
    <div className='login-form'>
      <div className='login-form__wrapper'>
        <h2 className='login-form__title'>Введите логин и пароль</h2>
        <input
          className='login-form__input'
          placeholder='Логин'
          onChange={(event) => handleInput(event.target.value, 'login')}
        />
        <input
          className='login-form__input'
          placeholder='Пароль'
          type='password'
          onChange={(event) => handleInput(event.target.value, 'password')}
        />
        <button
          className='login-form__button'
          onClick={() => auth.handleLogin(input.login, input.password)}
        >
          Войти
        </button>
      </div>

    </div>
  )
}
