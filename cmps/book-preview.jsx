export function BookPreview({book}) {
  return (
   <article className= "bookPreview">
        <h2>Title: {book.title}</h2>
        <img src={book.thumbnail}></img>
        <h3>Descripation: {book.description}</h3>
   </article>
  )
}
