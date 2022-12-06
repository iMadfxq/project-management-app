import { useContext } from "react";
import { useState } from "react";
import FilterProjects from "../../components/FilterProjects/FilterProjects.component";
import ProjectsList from "../../components/ProjectsList/ProjectsList.component";
import { AuthContext } from "../../context/AuthContext";
import { useCollection } from "../../hooks/useCollection";
import "./dashboard.styles.scss";

export default function Dashboard() {
  const { documents, error } = useCollection("Projects");
  const [currentFilter, setCurrentFilter] = useState("All");
  const { user } = useContext(AuthContext);

  const changeFilter = (fltr) => {
    setCurrentFilter(fltr);
  };

  const filteredProjects = documents
    ? documents.filter((d) => {
        switch (currentFilter) {
          case "All":
            return true;
          case "Mine":
            let assignedToMe = false;
            d.assignedToList.forEach((u) => {
              if (u.id === user.uid) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case "Marketing":
          case "Accountability":
          case "Service Delivery":
          case "Management":
            return d.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <>
      {error && <p>{error}</p>}
      <FilterProjects
        currentFilter={currentFilter}
        changeFilter={changeFilter}
      />
      {filteredProjects && <ProjectsList projects={filteredProjects} />}
    </>
  );
}
