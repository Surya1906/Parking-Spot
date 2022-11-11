import { Route, Routes } from 'react-router-dom'
import { Login, Register, Home } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
