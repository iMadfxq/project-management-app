import "./ProjectsList.styles.scss";

export default function ProjectsList({ projects }) {
  return (
    <section className="dashboard__projectslist">
      {projects.length === 1 && <p>Sorry, no projects have been created yet</p>}
      {projects.map((p) => (
        <article className="dashboard__projectslist--item" key={p.id}>
          <p>{p.title}</p>
          <p>Due: {p.dueDate.toDate().toDateString()}</p>
          <p>Category: {p.category}</p>
          <p>Assigned to: {p.assignedToList.map((user) => {
            return (
              <span key={user.photoURL}><img src={user.photoURL} alt={user.displayName} title={user.displayName}  /></span>
            )
          })}</p>
        </article>
      ))}
    </section>
  );
}