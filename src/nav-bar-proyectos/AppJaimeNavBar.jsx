import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutNavBar } from './AboutNavBar'
import { HomeNavBar } from './HomeNavBar'
import { NavBar2 } from './NavBar2'

export const AppJaimeNavBar = () => {
  return (
    <>
      <NavBar2/>

      <hr />


      <h1>  Aquí irian todas las demas paignas y EventSource</h1>

      <Routes>
        <Route path="/" element = { <HomeNavBar/> } />
        <Route path="/about2" element = { <AboutNavBar/> } />
        <Route path="/*" element = { <AboutNavBar/> } />
      </Routes>
    </>
  )
}
