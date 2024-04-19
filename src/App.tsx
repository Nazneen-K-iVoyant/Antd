import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Activity from './components/Activity'
import Timesheets from './components/Timesheets'
// import "./styles/dashboard.css"

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} >  </Route>
        <Route path='activity' element={<Activity />} >   </Route>
        <Route path='timesheet' element={<Timesheets />} > </Route>
      </Routes>

    </>
  )
}

export default App
