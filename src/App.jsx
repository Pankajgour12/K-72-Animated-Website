import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agences from './pages/Agence'
 import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'

const App = () => {








  return (
<div>

{/* <Navbar /> */}
<FullScreenNav />
{/*  <Routes>
  <Route  path='/' element={<Home />} />
  <Route  path='/agence' element={<Agences />} />
  <Route  path='/project' element={<Projects />} />
 </Routes> */}
</div>
  )
}

export default App
