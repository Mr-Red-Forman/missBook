import { booksService } from "../services/book.service.js"
import { BooksList } from "../cmps/books-list.jsx"

const { useState, useEffect } = React

export function BookIndex() {
  const [books, setBooks] = useState([])
  const [filterBy, setFilterBy] = useState(booksService.getDefaultFilter())

  useEffect(() => {
    loadBooks()
  }, [filterBy])

  function loadBooks() {
    booksService.query(filterBy).then(booksToUpdate => {
      setBooks(booksToUpdate)
    })
  }

  return (
    <section className="books-index">
      show my book  Indexer
      <BooksList books={books}/>
    </section>
  )
}
