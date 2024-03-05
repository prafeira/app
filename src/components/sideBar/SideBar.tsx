// SideBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-link">
        <HomeIcon />
        <span>Pagina Inicial</span>
      </Link>
      <Link to="/usuarios" className="sidebar-link">
        <PeopleIcon />
        <span>Usuários</span>
      </Link>
      <Link to="/financeiro" className="sidebar-link">
        <MonetizationOnIcon />
        <span>Financeiro</span>
      </Link>
    </div>
  );
};

export default SideBar;
