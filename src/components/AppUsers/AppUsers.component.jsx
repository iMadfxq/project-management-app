import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useCollection } from '../../hooks/useCollection'
import './AppUsers.styles.scss'

export default function AppUsers() {
  const { documents } = useCollection('users', null, null)
  const {user} = useContext(AuthContext)
  return (
    <section className='appusers'>
      <h2>Users:</h2>
      {documents && documents.map((u) => (
        <article key={u.id} className={u.id === user.uid ? 'active' : ''}>
          <span className={u.online ? 'online' : ''}></span>
          <img src={u.photoURL} alt="user thumbnail" />
          <p>{u.displayName}</p>
        </article>
      ))}
    </section>
  )
}