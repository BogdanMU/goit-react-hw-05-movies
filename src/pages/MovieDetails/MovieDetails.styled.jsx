import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 10px;
  background-color: lightgray;
`;
export const BackLink = styled(NavLink)`
  display: block;
  margin: 5px;
  text-decoration: none;
  color: black;
  font-size: 20px;
`;

export const AdditionalInfo = styled.div`
  display: flex;

  gap: 20px;
  margin-left: 10px;
`;

export const AdditionalInfoLink = styled(NavLink)`
  color: brown;
  text-decoration: none;
`;
