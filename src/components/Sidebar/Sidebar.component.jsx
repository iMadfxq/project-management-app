import './Sidebar.styles.scss'

import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside>
      <section>
        {/* avatar and username */}
        <p>Hey user</p>
      </section>
      <nav>
        <NavLink to={'/'}>Dashboard</NavLink>
        <NavLink to={'/create'}>Create</NavLink>

      </nav>
    </aside>
  )
}