import React from 'react'
import {Header} from "../ContentPage/Header";
import {MainTable} from "../ContentPage/MainTable";
import {LoginPage} from "./LoginPage";
import {useAuth} from "../../hooks/useAuth";
import {Footer} from "../ContentPage/Footer";

export const Authorization = () => {

  const auth = useAuth()

  if (!auth.user)
    return (
      <div className='wrapper__login'>
        <LoginPage/>
      </div>
    )

  return (
    <div className='wrapper__content'>
      <Header/>
      <MainTable/>
      <Footer/>
    </div>
  )
}
