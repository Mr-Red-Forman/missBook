import { BookPreview } from "./book-preview.jsx"


export function BooksList({books}) {
  return (
    <section className="book-list">
        {
       books.map(book => <div key={book.id}>
        <BookPreview book={book}/>
        </div> )
        }
    </section>
  )
}
