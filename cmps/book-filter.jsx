const { useState, useEffect } = React

import { booksService } from "../services/book.service.js"


export function BookFilter({ onSetFilter }) {

  const [filterByToEdit, setFilterByToEdit] = useState(booksService.getDefaultFilter())

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])


  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = (type === 'number') ? +value : value
    setFilterByToEdit((prevFilter) => {
      return { ...prevFilter, [field]: value }
    })
  }

  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }



  return <section className="book-filter">
  <h2>Filter book title</h2>
  <form onSubmit={onSubmitFilter}>
      <label htmlFor="booktitle">Book Title:</label>
      <input type="text"
          id="title"
          name="txt"
          placeholder="by title"
          value={filterByToEdit.txt}
          onChange={handleChange}
      />

      <label htmlFor="maxPrice">Book max price</label>
      <input type="number"
          id="maxPrice"
          name="maxPrice"
          placeholder="By max price"
          value={filterByToEdit.maxPrice}
          onChange={handleChange}
      />

      <button>Filter books!</button>
  </form>

</section>
}
