import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          {routes.map(route => (
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue'
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          ))}
          
          {/* <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li> */}

          {/* <li>
            <NavLink
              to='/'
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue'
              })}
            >
              Home</NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue'
              })}
            >Blog</NavLink>
          </li>
          <li>
            <NavLink
              to='/profile'
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue'
              })}
            >Profile</NavLink>
          </li> */}

        </ul>
      </nav>
    </div>
  );
}

const routes = [];
routes.push({
  to: '/',
  text: 'Home'
});
routes.push({
  to: '/blog',
  text: 'Blog'
});
routes.push({
  to: '/profile',
  text: 'Profile'
});

export default Menu;
