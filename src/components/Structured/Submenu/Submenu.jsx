import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


const SidebarLink = styled(Link)`
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

const SidebarLabel = styled.span`
  margin-left: 16px;
  font-size: 14px;
`;

const DropdownLink = styled(Link)`
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

export function SubMenu({ item }){
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
          <div style={{ float: "right" }}>
          {
            item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null
          }
          </div>
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </div>
  );
};