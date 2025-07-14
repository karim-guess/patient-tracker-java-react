import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaChevronLeft,
  FaChevronRight,
  FaTachometerAlt,
  FaUserInjured,
  FaUserNurse,
  FaAmbulance
} from 'react-icons/fa';

const links = [
  { name: 'Dashboard', to: '/', icon: <FaTachometerAlt /> },
  { name: 'Patients', to: '/patients', icon: <FaUserInjured /> },
  { name: 'Staff', to: '/staff', icon: <FaUserNurse /> },
  { name: 'Interventions', to: '/interventions', icon: <FaAmbulance /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-16' : 'w-56'}
        bg-gradient-to-b from-gray-900 to-gray-800 text-white
        shadow-lg rounded-xl m-2 h-[calc(100vh-1rem)] flex flex-col relative
      `}
    >
      {/* Toggle button */}
      <button
  onClick={() => setCollapsed(!collapsed)}
  className="absolute top-90 right-4 bg-gray-800 p-2 rounded-full shadow hover:bg-gray-700 transition"
>
  {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
</button>


      {/* Title */}
      <div className="p-4 text-xl font-bold">
        {!collapsed && 'Régulation'}
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col space-y-2 px-2 mt-4">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `
              flex items-center gap-3 py-2 px-3 rounded-md transition-colors
              ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-gray-700 text-gray-300'}
              ${collapsed ? 'justify-center' : ''}
              `
            }
            title={collapsed ? link.name : undefined}
          >
            <span className="text-lg">{link.icon}</span>
            {!collapsed && <span>{link.name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
