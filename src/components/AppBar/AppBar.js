import React from 'react';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { header } from './AppBar.module.css';
import { getIsAuthenticated } from '../../redux/auth';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <header className={header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
