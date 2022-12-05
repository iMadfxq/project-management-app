import { useState } from "react"

const filters = ['Marketing', "Accountability", "Service Delivery", "Management"]

export default function FilterProjects() {
  const [currentFilter, setCurrentFilter] = useState('')

  const handleClick = (f) => {
    setCurrentFilter(f)
    console.log(currentFilter)
    console.log(f)
  }

  return (
    <nav>
      {filters.map(f => (
        <button className={currentFilter === f ? 'active' : ''} key={f} onClick={() => {handleClick(f)}}>
          {f}
        </button>
      ))}
    </nav>
  )
}