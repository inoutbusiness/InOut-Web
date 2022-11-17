import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 45px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background: #020D21;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
  font-size: 14px;
`;

export const DropdownLink = styled(Link)`
  background: #020D21;
  height: 45px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;

  &:hover {
    background: #020D21;
    cursor: pointer;
  }
`;