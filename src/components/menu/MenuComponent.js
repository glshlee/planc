// MenuComponent.js
import IconComponent from '../icon/IconComponent'; // IconComponent를 import합니다.

const MenuComponent = ({ menuItems }) => {
  return (
    <div className="menu">
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index} onClick={menuItem.onClick}>
            {/* 아이콘을 추가합니다. */}
            <IconComponent icon={menuItem.icon} />
            {menuItem.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuComponent;
