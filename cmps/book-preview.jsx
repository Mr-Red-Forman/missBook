export function BookPreview({book}) {

    function shortText(txt){
        const words=txt.split(/\s+/)

        .reduce(function(prev, curr) {
            if (prev.length && (prev[prev.length - 1] + ' ' + curr).length <= 100) {
                prev[prev.length - 1] += ' ' + curr;
            }
            else {
                prev.push(curr);
            }

            return prev;
        }, [])
        return words
    }
   
    return (
   <article className= "bookPreview">
        <h1>{book.title}</h1>
        <h2>{book.authors.join('')} </h2>
        {/* <div className="bookAuthorAndDate">
            <h6>Pages: 6500</h6> 
            <h6>01/01/1990</h6>
        </div>  */}
        <img src={book.thumbnail}></img>
        <p>Descripation: {shortText(book.description)}</p>
        <div className="price">
            <h3>Price: <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: book.listPrice.currencyCode }).format(book.listPrice.amount)}</span></h3> 
            {!book.listPrice.isOnSale  &&  <img src={"https://tenor.com/view/sale-gif-19179820.gif"} alt="sale"></img>}        
            </div>
   </article>
  )
}
