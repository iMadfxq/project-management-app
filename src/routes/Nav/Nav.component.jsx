import { Outlet, Link } from 'react-router-dom'
import './Nav.styles.scss'


import Sidebar from '../../components/Sidebar/Sidebar.component'

export default function Nav() {
  return (
    <>
    <header>
      <p>PM App</p>
      <section className='header__links'>
        <Link to={'/signup'} className='header__links--element'>Signup</Link>
        <Link to={'/login'} className='header__links--element'>Login</Link>
        <button className='header__links--element'>Logout</button>
      </section>
    </header>
    <main>
      <Sidebar />
    <Outlet />
    </main>
    </>
  )
}