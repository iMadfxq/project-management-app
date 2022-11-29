import { useCollection } from '../../hooks/useCollection'
import './AppUsers.styles.scss'

export default function AppUsers() {
  const { documents } = useCollection('users', null, null)
  return (
    <section className='appusers'>
      <p>Users</p>
      {documents && documents.map((user) => (
        <article key={user.id}>
          <span className={user.online ? 'online' : ''}></span>
          <img src={user.photoURL} alt="user thumbnail" />
          <p>{user.displayName}</p>
        </article>
      ))}
    </section>
  )
}