import { Link } from "react-router-dom";
import "./ProjectsList.styles.scss";

export default function ProjectsList({ projects }) {
  return (
    <section className="dashboard__projectslist">
      {projects.length === 0 && <p>No projects found</p>}
      {projects.map((p) => (
        <Link
          to={`project/${p.id}`}
          className="dashboard__projectslist--item"
          key={p.id}
        >
          <h3>{p.title}</h3>
          <b>Due: <p> {p.dueDate.toDate().toDateString()}</p></b>
          <b>Category: <p> {p.category}</p></b>
          <div className="assignedTo">
            <b>Assigned to:</b>
            <div>
              {p.assignedToList.map((user) => {
                return (
                  <span key={user.photoURL}>
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      title={user.displayName}
                    />
                  </span>
                );
              })}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
