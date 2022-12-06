import { Link } from "react-router-dom";
import "./ProjectsList.styles.scss";

export default function ProjectsList({ projects }) {
  return (
    <section className="dashboard__projectslist">
      {projects.length === 0 && <p>No projects found</p>}
      {projects.map((p) => (
        <Link to={`project/${p.id}`} className="dashboard__projectslist--item" key={p.id}>
          <p>{p.title}</p>
          <p>Due: {p.dueDate.toDate().toDateString()}</p>
          <p>Category: {p.category}</p>
          <p>Assigned to: {p.assignedToList.map((user) => {
            return (
              <span key={user.photoURL}><img src={user.photoURL} alt={user.displayName} title={user.displayName}  /></span>
            )
          })}</p>
        </Link>
      ))}
    </section>
  );
}
