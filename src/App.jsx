import { useState } from 'react'
import './App.css'
import { StepFormProvider } from './StepContext'
import StepperForm from './components/StepperForm'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Suceess from './components/Suceess'


function App() {
  const [count, setCount] = useState(0)

  return (
    <StepFormProvider>
      <Router>
      <h1 style={{textAlign:'center', textDecoration:'underline', color:'red', marginBottom:'50px'}}>React Multi stepper form</h1>
      {/* <StepperForm/> */}
        <Routes>
        <Route path='/' element={<StepperForm />} />
          <Route path='/success' element={<Suceess/>}/>
        </Routes>
      </Router>
    </StepFormProvider>
  )
}

export default App
