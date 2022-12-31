import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavBar, NavBarLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <NavBar>
          <NavBarLink to="/">Home</NavBarLink>
          <NavBarLink to="/movies">Movies</NavBarLink>
        </NavBar>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
