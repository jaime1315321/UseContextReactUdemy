import { Route, Routes, Navigate, Link } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { NavBar } from "./NavBar"


export const AppJaime = () => {
  return (
    <>
    <h1>Main App nunca se va</h1>
    
    <NavBar/>


    <Routes>

        <Route path="/" element = { <HomePage/> } />
        <Route path="/about" element = { <AboutPage/> } />
        <Route path="/*" element = { <AboutPage/> } />

    </Routes>
    </>
  )
}
