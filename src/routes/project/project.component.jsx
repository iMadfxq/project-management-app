import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import './project.styles.scss'

export default function Project( ) {
  const {id} = useParams()
  const {document, error} = useDocument('Projects', id)

  if (error) {
    return <p>{error}</p>
  }
  if(!document) {
    return <p>Loading...</p>
  }
  if(document) {
    return (
      <>
        <p>{document.title}</p>
      </>
    )
  }
}