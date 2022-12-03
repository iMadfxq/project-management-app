export default function ProjectSummary({ project }) {
  return (
    <section className="project__summary">
      <span>
        Project was created: {project.createdAt.toDate().toDateString()}
      </span>
      <h2>{project.title}</h2>
      <p>Category: {project.category}</p>
      <p>{project.details}</p>
      <p>Project is due: {project.dueDate.toDate().toDateString()}</p>
      <section className="project__summary--assignedTo">
        {project.assignedToList.map((user) => {
          return (
            <article key={user.id}>
              <img src={user.photoURL} alt="" />
              <p>{user.displayName}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
}
