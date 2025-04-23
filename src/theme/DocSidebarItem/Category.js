import React from 'react';
import DefaultCategory from '@theme-original/DocSidebarItem/Category';
import { SidebarIcons } from '@site/src/components/SidebarIcons';

function CategoryWithIcon(props) {
  const { item } = props;
  
  // Obtener el nombre del icono desde las propiedades personalizadas
  const iconName = item.customProps?.icon;
  
  // Si no hay icono, usamos el componente original
  if (!iconName || !SidebarIcons[iconName]) {
    return <DefaultCategory {...props} />;
  }

  // Personaliza el componente Category con el icono
  const className = `menu__link menu__link--sublist ${
    props.activePath.includes(item.label) ? 'menu__link--active' : ''
  }`;

  return (
    <li className="menu__list-item">
      <div className="menu__list-item-collapsible">
        <a className={className} onClick={props.onClick}>
          <span className="sidebar-item-icon">
            {SidebarIcons[iconName]}
          </span>
          {item.label}
        </a>
      </div>
      <DefaultCategory {...props} />
    </li>
  );
}

export default function CategoryWrapper(props) {
  // Solo personaliza si tiene un icono definido
  if (props.item?.customProps?.icon) {
    return <CategoryWithIcon {...props} />;
  }
  
  // Si no, usa el componente predeterminado
  return <DefaultCategory {...props} />;
}