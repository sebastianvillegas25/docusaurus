import React from 'react';
import DefaultLink from '@theme-original/DocSidebarItem/Link';
import { SidebarIcons } from '@site/src/components/SidebarIcons';

function LinkWithIcon(props) {
  const { item } = props;
  
  // Obtener el nombre del icono desde las propiedades personalizadas
  const iconName = item.customProps?.icon;
  
  // Si no hay icono, usamos el componente original
  if (!iconName || !SidebarIcons[iconName]) {
    return <DefaultLink {...props} />;
  }

  return (
    <li className="menu__list-item">
      <a 
        className={`menu__link ${props.activePath === item.id ? 'menu__link--active' : ''}`}
        href={item.href}
      >
        <span className="sidebar-item-icon">
          {SidebarIcons[iconName]}
        </span>
        {item.label}
      </a>
    </li>
  );
}

export default function LinkWrapper(props) {
  if (props.item?.customProps?.icon) {
    return <LinkWithIcon {...props} />;
  }
  return <DefaultLink {...props} />;
}