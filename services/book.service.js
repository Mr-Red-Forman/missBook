import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'


const DB_KEY='booksDB'

_createBooks()

export const booksService={
    query,
    get,
    remove,
    getDefaultFilter,
    getEmptyBooks,

}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(DB_KEY)
    .then(books=>{
        if (filterBy.txt){
            const regex = new RegExp(filterBy.txt, 'i')
            books=books.filter(book=>regex.text(book.title))
        }
        if (filterBy.price){
            books=books.filter(book=> 
                +book.listPrice.amount>=+filterBy.price) 
        }
        
    return books
    })
    // .then()
}

function get(bookId) {
    return storageService.get(DB_KEY, bookId)
    // return axios.get(CAR_KEY, carId)
}

function remove(bookId) {
    return storageService.remove(DB_KEY, bookId)
}

function getDefaultFilter() {
    return { txt: '', price: ''}
}


function getEmptyBooks(title = '', description = '',listPrice={amount:0, currencyCode:"BitQuin", isOnSale:false } ) {
    return { id: '', title, description, thumbnail:'' ,listPrice }
}


function _createBooks() {
    let books = utilService.loadFromStorage(DB_KEY)
    if (!books || !books.length){
        books=[]
        books.push(_createBook("metus hendrerit",utilService.makeLorem(5),
        {amount:109,currencyCode:'Euro', isOnSale:false}))
        books.push(_createBook("Lula Marsh",utilService.makeLorem(5),
        {amount:526,currencyCode:'Euro', isOnSale:false}))
        books.push(_createBook("Rabbit Run",utilService.makeLorem(5),
        {amount:855,currencyCode:'Euro', isOnSale:false}))
        utilService.saveToStorage(DB_KEY, books)
    }
}

function _createBook(title, description, listPrice){
    const book = getEmptyBooks(title,description, listPrice)
    book.id=utilService.makeId(4)
    book.thumbnail=`https://robohash.org/${book.id}?set=set2`
    return book
}