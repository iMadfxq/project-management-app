import ProjectsList from '../../components/ProjectsList/ProjectsList.component'
import { useCollection } from '../../hooks/useCollection'
import './dashboard.styles.scss'

export default function Dashboard( ) {
  const {documents, error} = useCollection('Projects')
  return (
    <>
      {error && <p>{error}</p>}
      {documents && <ProjectsList projects={documents} />}
    </>
  )
}