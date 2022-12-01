import "./ProjectsList.styles.scss";

export default function ProjectsList({ projects }) {
  return (
    <>
      {projects.length === 1 && <p>Sorry, no projects have been created yet</p>}
      {projects.map((p) => (
        <>
          <p>{p.title}</p>
          <p>{p.details}</p>
        </>
      ))}
    </>
  );
}
