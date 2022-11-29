import { useEffect, useState } from "react";
import "./create.styles.scss";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";

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
  const [assignedTo, setAssignedTo] = useState([]);
  const [category, setCategory] = useState("");

  const [userOptions, setUserOptions] = useState([]);

  const [formError, setFormError] = useState(null);

  const { documents } = useCollection("users");

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
    console.log(title, details, dueDate, category, assignedTo);
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
          <span>Assigned to:</span>
          <Select
            isMulti
            onChange={(option) => setAssignedTo(option)}
            options={userOptions}
          />
        </label>
        <label>
          <span>Category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {formError && <p>{formError}</p>}
    </section>
  );
}
