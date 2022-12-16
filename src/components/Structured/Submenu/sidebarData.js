import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as CiIcons from "react-icons/ci";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/home',
    icon: <CiIcons.CiHome />,
  },
  {
    title: 'Perfil',
    path: '/profile',
    icon: <CiIcons.CiUser />
  },
  {
    title: 'Produtos',
    path: '#',
    icon: <CiIcons.CiShop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Cadastro',
        path: '/productRegistration',
        cName: 'sub-nav'
      },
      {
        title: 'Visualização',
        path: '/productVisualization',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Configurações',
    path: '#',
    icon: <CiIcons.CiSettings />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '#',
      },
    ]
  }
];

export const SidebarDataCollapsed = [
  {
    path: '/home',
    icon: <CiIcons.CiHome />,
  },
  {
    path: '/profile',
    icon: <CiIcons.CiUser />
  },
  {
    path: '#',
    icon: <CiIcons.CiShop />,
  },
  {
    path: '#',
    icon: <CiIcons.CiSettings />,
  }
];
