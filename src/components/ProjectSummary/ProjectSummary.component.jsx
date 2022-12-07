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
      {user.uid === project.createdBy.id && (
        <button onClick={handleCompleted}>Mark as completed</button>
      )}
    </section>
  );
}
