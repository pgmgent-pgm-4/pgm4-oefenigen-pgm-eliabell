import React from 'react'
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

export default function Navigation() {
  return (
    <div>
        <NavLink to={ROUTES.home.path} > Home </NavLink>
        <NavLink to={ROUTES.about.path} > About </NavLink>
        <NavLink to={ROUTES.contact.path} >Contact </NavLink>
    </div>
  )
}
