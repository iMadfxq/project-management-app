import './Sidebar.styles.scss'

import { NavLink } from 'react-router-dom'

export default function Sidebar({photoURL, displayName}) {
  return (
    <aside>
      <section>
        <img src={photoURL} alt="User's thumbnail" />
        <p>Hey, {displayName}</p>
      </section>
      <nav>
        <NavLink to={'/'}>Dashboard</NavLink>
        <NavLink to={'/create'}>Create</NavLink>

      </nav>
    </aside>
  )
}