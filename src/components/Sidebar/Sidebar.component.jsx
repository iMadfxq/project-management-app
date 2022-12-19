import "./Sidebar.styles.scss";


import { NavLink } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

export default function Sidebar({ photoURL, displayName }) {
  const { documents } = useCollection("Projects", null, ["dueDate"]);
  const { user } = useContext(AuthContext);
  const [openMine, setOpenMine] = useState(true);
  const [openPanel, setOpenPanel] = useState(false);

  const handleClick = () => {
    setOpenMine((state) => !state);
    console.log(openMine);
  };

useEffect(() => {
  if(openPanel === true) {
  window.scrollTo(0,0)
  }
}, [openPanel])

  return (
    <>
      <div
        onClick={() => setOpenPanel(true)}
        className={!openPanel ? "responsive-openPanel" : "hide"}
      >
        ➡
        <div>
          <span>🏠</span>
          <p>Panel</p>
        </div>
      </div>
      <aside className={openPanel ? "mobilePanel" : "hide"}>
        <section>
          <img src={photoURL} alt="User's thumbnail" />
          <h3>Hey, {displayName}</h3>
        </section>
        <nav>
          <NavLink
            onClick={ () => {
              setOpenPanel(false);

            }}
            to={"/"}
          >
            Dashboard
          </NavLink>
          <NavLink
            onClick={() => {
              setOpenPanel(false);
            }}
            to={"/create"}
          >
            Create
          </NavLink>
          <h4 title="Most urgent first" onClick={handleClick}>
            YOUR PROJECTS <span className={!openMine ? "closed" : ""}>▼</span>
          </h4>
          {documents &&
            openMine &&
            documents.map((doc) => {
              let assignedToMe = false;
              doc.assignedToList.forEach((u) => {
                if (u.id === user.uid) {
                  assignedToMe = true;
                }
              });
              return assignedToMe ? (
                <NavLink
                  onClick={() => {
                    setOpenPanel(false);
                  }}
                  key={doc.id}
                  to={`/project/${doc.id}`}
                >
                  {doc.title}
                </NavLink>
              ) : (
                ""
              );
            })}
        </nav>
      </aside>
      {openPanel && (
        <>
          <div className="modal-container" onClick={() => setOpenPanel(false)}>
            <span>ⓧ</span>
          </div>
        </>
      )}
      <aside className="desktop">
        <section>
          <img src={photoURL} alt="User's thumbnail" />
          <h3>Hey, {displayName}</h3>
        </section>
        <nav>
          <NavLink to={"/"}>Dashboard</NavLink>
          <NavLink to={"/create"}>Create</NavLink>
          <h4 title="Most urgent first" onClick={handleClick}>
            YOUR PROJECTS <span className={!openMine ? "closed" : ""}>▼</span>
          </h4>
          {documents &&
            openMine &&
            documents.map((doc) => {
              let assignedToMe = false;
              doc.assignedToList.forEach((u) => {
                if (u.id === user.uid) {
                  assignedToMe = true;
                }
              });
              return assignedToMe ? (
                <NavLink key={doc.id} to={`/project/${doc.id}`}>
                  {doc.title}
                </NavLink>
              ) : (
                ""
              );
            })}
        </nav>
      </aside>
    </>
  );
}
