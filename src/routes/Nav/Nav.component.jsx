import { Outlet, Link } from 'react-router-dom'
import './Nav.styles.scss'
import { useLogout } from '../../hooks/useLogout'

import Sidebar from '../../components/Sidebar/Sidebar.component'

export default function Nav() {

  const {logout, isPending} = useLogout()

  return (
    <>
    <header>
      <p>PM App</p>
      <section className='header__links'>
        <Link to={'/signup'} className='header__links--element'>Signup</Link>
        <Link to={'/login'} className='header__links--element'>Login</Link>
        {!isPending && <button className='header__links--element' onClick={logout}>Logout</button>}
        {isPending && <button disabled>Logging out...</button>}
      </section>
    </header>
    <main>
      <Sidebar />
    <Outlet />
    </main>
    </>
  )
}