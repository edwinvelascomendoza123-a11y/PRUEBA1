import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contador from "./Contador" 
import Contador2 from "./Contador2" 
import Contador3 from "./Contador3" 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Contador/>
    <Contador2/>
    <Contador3/>

    


  </StrictMode>,
)
