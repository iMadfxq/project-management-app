
const filters = [
  "All",
  "Mine",
  "Marketing",
  "Accountability",
  "Service Delivery",
  "Management",
];

export default function FilterProjects({ currentFilter, changeFilter }) {
  const handleClick = (f) => {
    changeFilter(f);
    console.log(currentFilter);
    console.log(f);
  };

  return (
    <nav>
      <p>Filter: </p>
      {filters.map((f) => (
        <button
          className={currentFilter === f ? "active" : ""}
          key={f}
          onClick={() => {
            handleClick(f);
          }}
        >
          {f}
        </button>
      ))}
    </nav>
  );
}
