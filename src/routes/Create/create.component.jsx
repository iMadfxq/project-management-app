import { useContext, useEffect, useState } from "react";
import "./create.styles.scss";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { AuthContext } from "../../context/AuthContext";

const categories = [
  { value: "Marketing", label: "Marketing" },
  { value: "Accountability", label: "Accountability" },
  { value: "Service Delivery", label: "Service Delivery" },
  { value: "Management", label: "Management" },
];

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedTo, setAssignedTo] = useState([]);

  const [userOptions, setUserOptions] = useState([]);

  const [formError, setFormError] = useState(null);

  const { documents } = useCollection("users");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUserOptions(options);
    }
  }, [documents]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a category");
      return;
    }

    if (assignedTo.length < 1) {
      setFormError("Please assign at least 1 user to the project");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      id: user.uid,
      photoURL: user.photoURL,
    };

    const assignedToList = assignedTo.map((u) => {
      return { 
        displayName: u.value.displayName,
        id: u.value.id,
        photoURL: u.value.photoURL 
      };
    });

    const project = {
      title,
      details,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      category,
      comments: [],
      createdBy,
      assignedToList,
    };

    console.log(project);
  };

  return (
    <section className="create">
      <h2>Create a project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
          />
        </label>
        <label>
          <span>Details:</span>
          <textarea
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            type="text"
          />
        </label>
        <label>
          <span>Due Date:</span>
          <input
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
            type="date"
          />
        </label>
        <label>
          <span>Category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option.value)}
          />
        </label>
        <label>
          <span>Assigned to:</span>
          <Select
            isMulti
            onChange={(option) => {setAssignedTo(option)}}
            options={userOptions}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {formError && <p>{formError}</p>}
    </section>
  );
}
