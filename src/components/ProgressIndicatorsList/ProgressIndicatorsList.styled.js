import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-left: 48px;
`;

export const Item = styled.li`
  position: relative;
  padding: 4px 0;
  font-size: 16px;
  color: #5d7fa3;
`;

export const MainNav = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  text-decoration-color: #ffffff;

  ::before {
    content: '';
    position: absolute;
    bottom: 32px;
    left: -34px;
    display: block;
    width: 0px;
    height: 48px;
    border: 2px solid #5d7fa3;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: -48px;
    display: block;
    width: 32px;
    height: 32px;
    border: 2px solid #5d7fa3;
    border-radius: 50%;
  }

  &.active {
    font-weight: 500;
    color: #ffffff;

    ::before,
    ::after {
      border-color: #32abf2;
    }
  }
`;

export const FirstMainNav = styled(MainNav)`
  ::before {
    content: none;
  }
`;
