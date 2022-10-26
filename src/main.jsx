import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppJaime } from './AppJaime'

import { BrowserRouter } from 'react-router-dom'
import { AppJaimeNavBar } from './nav-bar-proyectos/AppJaimeNavBar'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  {/* <React.StrictMode> */}
    {/* <AppJaime/> */} 
    <AppJaimeNavBar/>
  {/* </React.StrictMode> */}
  </BrowserRouter>
)
