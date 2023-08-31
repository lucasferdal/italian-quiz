import Login from "./components/Login"
import Quiz from "./components/Quiz"
import Results from "./components/Results"
import {
  HashRouter as Router,
  Routes,
  Route

} from 'react-router-dom'

import './App.css'

export default function App() {

  return (
    <>
      <Router>
        <div>
        <Routes>

          <Route path='/' element={<Login />} />

          <Route path='/quiz' element={<Quiz />} />

          <Route path='/results' element={<Results />} />

        </Routes>
        </div>
      </Router>
    </>
  )
}

