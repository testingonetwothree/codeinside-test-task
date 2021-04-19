import React from 'react'
import {Header} from "components/ContentPage/Header";
import {MainTable} from "components/ContentPage/MainTable";
import {LoginPage} from "components/Authorization/LoginPage";
import {useAuth} from "hooks/useAuth";
import {Footer} from "components/ContentPage/Footer";

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
