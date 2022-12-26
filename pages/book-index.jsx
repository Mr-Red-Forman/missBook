import { booksService } from "../services/book.service.js"
import { BooksList } from "../cmps/books-list.jsx"
import {BookDetails} from "../cmps/book-details.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"


const { useState, useEffect } = React

export function BookIndex() {
  const [books, setBooks] = useState([])
  const [filterBy, setFilterBy] = useState(booksService.getDefaultFilter())
  const [selectedCar, setSelectedBook] = useState(null)


  useEffect(() => {
    loadBooks()
  }, [filterBy])

  function loadBooks() {
    booksService.query(filterBy).then(booksToUpdate => {
      setBooks(booksToUpdate)
    })
  }

  function onSetFilter(filterByFromFilter) {
    setFilterBy(filterByFromFilter)
}

  function onSelectedBook(bookId) {
    booksService.get(bookId).then((book) => {
      setSelectedBook(book)
    
    })
}


  return (
    <section className="books-index">
      {!selectedCar && <div>
      <BookFilter onSetFilter={onSetFilter} />
      <BooksList books={books} onSelectedBook={onSelectedBook}/>
      </div>}
      {selectedCar && <BookDetails
      book={selectedCar}
      onGoBack={() => setSelectedBook(null)}
      />}
    </section>
  )
}
