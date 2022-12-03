import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { timestamp } from "../../firebase/config"
import { useFirestore } from "../../hooks/useFirestore"

export default function ProjectComments({project}) {

  const {updateDocument, response} = useFirestore('Projects')

  const [commentText, setCommentText] = useState('')

  const {user} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const comment = {
      createdBy: user.displayName,
      creatorPhotoURL: user.photoURL,
      commentText,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random()
    }

    await updateDocument(project.id,{comments:[...project.comments, comment]})

    if(!response.error) {
      setCommentText('')
    }
  }

  return (
    <section className="project__comments">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Comment:</span>
          <textarea required onChange={e => setCommentText(e.target.value)} value={commentText} />
        </label>
        <button>Submit</button>

      </form>
    </section>
  )
}