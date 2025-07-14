import { NavLink } from 'react-router-dom'

const links = [
  { name: 'Dashboard', to: '/' },
  { name: 'Patients', to: '/patients' },
  { name: 'Staff', to: '/staff' },
  { name: 'Interventions', to: '/interventions' },
]

export default function Sidebar() {
  return (
    <aside className='w-64 bg-gray-800 text-white h-full p-4'>
      <nav className='flex flex-col space-y-4'>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}