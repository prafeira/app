import './App.css'
import Home from './pages/home/Home'
import Usuarios from './pages/usuarios/Usuarios'
import Financeiro from './pages/financeiro/Financeiro'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SideBar from './components/sideBar/SideBar.tsx'

const App = () => {
    return (
      <Router>
      <div className="app">
        <SideBar />
        <div className="content-wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/financeiro" element={<Financeiro />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    );
  };

export default App;
