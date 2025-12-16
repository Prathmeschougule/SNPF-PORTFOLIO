
import './App.css'
// importing Router 
import { BrowserRouter as Router } from 'react-router-dom'

// Importing Component 
import AnimRoutes from './component/AnimRoutes'
import Header from './component/Header'

// importing motion 
import { motion } from 'framer-motion'

function App() {

  return (
    <>
       <Router>
          <Header/>
          <AnimRoutes/>
       </Router>
    </>
  )
}

export default App
