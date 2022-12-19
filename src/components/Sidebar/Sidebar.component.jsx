import './Sidebar.styles.scss'

import { NavLink } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Sidebar({photoURL, displayName}) {
  const {documents } = useCollection('Projects',null,['dueDate'])
  const {user} = useContext(AuthContext)
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen((state) => !state)
    console.log(open)
  }
  return (
    <>
    <div className='responsive-openPanel'>
      ➡
      <div>
      <span>🏠</span>
      <p>Panel</p>
      </div>
    </div>
    <aside>
      <section>
        <img src={photoURL} alt="User's thumbnail" />
        <h3>Hey, {displayName}</h3>
      </section>
      <nav>
        <NavLink to={'/'}>Dashboard</NavLink>
        <NavLink to={'/create'}>Create</NavLink>
        <h4 title='Most urgent first' onClick={handleClick}>YOUR PROJECTS <span className={!open ? 'closed' : ''}>▼</span></h4>
        {(documents && open) && documents.map(doc => {
                    let assignedToMe = false;
                    doc.assignedToList.forEach((u) => {
                      if (u.id === user.uid) {
                        assignedToMe = true;
                      }
                    });
                    return assignedToMe ? <NavLink key={doc.id} to={`/project/${doc.id}`}>{doc.title}</NavLink> : '';
        
        })}
      </nav>
    </aside>
    </>
  )
}