
function pageCount(numberOfPages){
  switch (true){
    case numberOfPages>500:
      return ('Serious Reading')
      break
    case  numberOfPages>200:
      return ('Descent Reading')
      break
    case numberOfPages<100:
      return ('Light Reading')
      break
    default:
      return (numberOfPages);
  }
}

function bookIsVantage(yearOfPublish){
  switch (true){
    case yearOfPublish>=10:
      return ('Vantage')
      break
    default:
      return ('New');
      break
  }
}

export function BookDetails({book,onGoBack }) {
  return (
    <section className="book-details">
        <h1 className="title">{book.title}</h1>
        {book.authors && <h2 className="authors">{book.authors.join('')}</h2>}
        {book.publishedDate && <h3 className="publichedDay">Published:{book.publishedDate}</h3>}
        {book.publishedDate && <h3 className="publichedDayState">{bookIsVantage(book.publishedDate)}</h3>}
        
        {book.pageCount && <h3 className="pages">{pageCount(book.pageCount)}</h3>}
        {book.categories && <h3 className="catagorys">Genra:{'\n'+book.categories}</h3>}
        {book.language && <h3 className="Langueges">Languege:<span>{book.language}</span></h3>}
        <img className="bookImg" src={book.thumbnail}></img>
        <p className="descripation">Descripation: {book.description}</p>
        <div className="price">
            <h3>Price: {new Intl.NumberFormat('en-US', { style: 'currency', currency: book.listPrice.currencyCode }).format(book.listPrice.amount)}</h3> 
            {!book.listPrice.isOnSale  &&  <img src={"https://tenor.com/view/sale-gif-19179820.gif"} alt="sale"></img>}        
        </div>
        <button className="backFromDetails" onClick={onGoBack}>Go Back</button>
    </section>
  )
}
