import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore("Projects");
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleCompleted = async () => {
    await deleteDocument(project.id);
    navigate("/");
  };

  return (
    <section className="project__summary">

      <h2>{project.title}</h2>
      <p>
        <b>Category:</b> {project.category}
      </p>
      <p>
        {" "}
        <b>Details:</b> {project.details}
      </p>
      <p>
        <b>Project is due:</b> {project.dueDate.toDate().toDateString()}
      </p>
      <p>
        <b>Assigned to:</b>
      </p>
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
      {user.uid === project.createdBy.id ? (
        <button onClick={handleCompleted}>Mark as completed</button>
      ): ''}
    </section>
  );
}
