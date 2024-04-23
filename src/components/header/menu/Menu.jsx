import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
const menuItem = ["Головна", "Тести", "Ігри", "Новини IT",'Фор?'];
const Menu = (props) => {
  const [activeItem, setActiveItem] = useState('Головна');
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <nav className="menu">
      <ul className="menu__list">
      
        {menuItem.map((item) => {
          return (
            <li key={item} >
              <Link to={`/${item}`}
                onClick={()=>handleItemClick(item)}
                className={
                  activeItem !== item ? "menu__item" : "menu__item active"
                }
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
