import { useParams } from 'react-router-dom'
import FilterProjects from '../../components/FilterProjects/FilterProjects.component'
import ProjectComments from '../../components/ProjectComments/ProjectComments.component'
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary.component'
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
      <section className='project'>
        <FilterProjects />
        <ProjectSummary project={document} />
        <ProjectComments project={document} />
      </section>
    )
  }
}