import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agences from './pages/Agence'

const App = () => {








  return (
<div>


 <Routes>
  <Route  path='/' element={<Home />} />
  <Route  path='/agence' element={<Agences />} />
  <Route  path='/project' element={<Projects />} />
 </Routes>
</div>
  )
}

export default App
