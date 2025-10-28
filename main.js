import { library } from './library.js'
import { displayBooks } from './displayBooks.js'
import { setTheme } from './changeTheme.js'

displayBooks()
// Hooks
const totalBooks = document.querySelector('.total')
const readBooks = document.querySelector('.read')
const unreadBooks = document.querySelector('.unread')

// Listeners // UI Updates
document.getElementById('theme-toggle').addEventListener('click', setTheme)
totalBooks.textContent = library.length === 0 ? '0' : library.length
readBooks.textContent = library.filter(book => book.status).length
unreadBooks.textContent = library.filter(book => !book.status).length

// Functions
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status)
    book.id = crypto.randomUUID()
    library.push(book)
}
