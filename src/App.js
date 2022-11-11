import { Route, Routes } from 'react-router-dom'
import { Login, Register, Home, DetailPage } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/detailpage' element={<DetailPage />} />
    </Routes>
  )
}

export default App
