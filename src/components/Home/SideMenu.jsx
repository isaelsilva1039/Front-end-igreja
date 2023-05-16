import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideMenu.css';

const SideMenu = ({ items }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
    }
  };

  const handleSubmenuClick = (route) => {
    navigate(route);
  };

  const renderSubMenu = (submenuItems) => {
    return (
      <ul className="submenu">
        {submenuItems.map((submenuItem, index) => (
          <li key={index}>
            <Link
              to={submenuItem.route}
              onClick={() => handleSubmenuClick(submenuItem.route)}
            >
              {submenuItem.icon}
              {submenuItem.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderMenuItems = (menuItems) => {
    return (
      <ul className="list-group">
        {menuItems.map((menuItem, index) => (
          <li
            key={index}
            className={`list-group-item ${
              activeMenu === index ? 'active' : ''
            }`}
          >
            <div
              onClick={() => handleMenuClick(index)}
              className={`nav-link d-flex align-items-center ${
                menuItem.submenu ? 'has-submenu' : ''
              }`}
            >
              {menuItem.icon && (
                <span className="menu-icon me-2">{menuItem.icon}</span>
              )}
              {menuItem.label}
              {menuItem.submenu && (
                <span className={`submenu-icon ${activeMenu === index ? 'active' : ''}`}>
                  <i className="bi bi-chevron-down"></i>
                </span>
              )}
            </div>
            {menuItem.submenu && activeMenu === index && renderSubMenu(menuItem.submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return <div className="side-menu">{renderMenuItems(items)}</div>;
};

export default SideMenu;
