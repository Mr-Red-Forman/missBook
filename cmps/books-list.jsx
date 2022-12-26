import { BookPreview } from "./book-preview.jsx"


export function BooksList({books ,onSelectedBook}) {
  return (
    <section className="book-list">
        {
       books.map(book => <div key={book.id}>
        <BookPreview book={book}/>
        <button onClick={() => onSelectedBook(book.id)}>Book Info</button>
        </div> )
        }
    </section>
  )
}
