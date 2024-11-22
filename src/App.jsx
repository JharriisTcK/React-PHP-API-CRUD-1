
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { UsuarioNew } from './UsuarioNew'
import { UsuariosBoard } from './UsuariosBoard'
import { Home } from './Home'
import { Usuario } from './Usuario'

function App() {

  return (
    <>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/Usuarios">Usuarios</Link></li>
          <li><Link to="/UsuarioNew">Registrar usuario</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Usuarios" element={<UsuariosBoard />} />
          <Route path="/Usuarios/:idusuarioin" element={<Usuario />} />
          <Route path="/UsuarioNew" element={<UsuarioNew/>} />
        </Routes>
      </main>

      
      
    </>
  )
}

export default App
