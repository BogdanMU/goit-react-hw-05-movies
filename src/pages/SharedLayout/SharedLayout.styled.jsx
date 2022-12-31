import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  box-shadow: 10px 5px 5px red;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavBarLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: brown;
  }
`;
