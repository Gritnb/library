import { library } from './library.js'
import { displayBooks } from './displayBooks.js'
import { setTheme } from './changeTheme.js'

displayBooks()
// Hooks
const toggleTheme = document.getElementById('theme-toggle')
const totalBooks = document.querySelector('.total')
const readBooks = document.querySelector('.read')
const unreadBooks = document.querySelector('.unread')
const bookContainer = document.querySelector('.books')

// Listeners // UI Updates
totalBooks.textContent = library.length === 0 ? '0' : library.length
readBooks.textContent = library.filter(book => book.status).length
unreadBooks.textContent = library.filter(book => !book.status).length

toggleTheme.addEventListener('click', setTheme)
bookContainer.addEventListener('click', (event) => {
    if (event.target.className === 'delete-btn') {
        deleteBook(event.target.id)
    }
    if (event.target.className.includes('read-badge') ||
        event.target.className.includes('pending-badge')) {
        swapStatus(event.target.id)
    }
})

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

function deleteBook(bookID) {
    const index = library.findIndex(book => book.id === bookID)
    library.splice(index, 1)
    displayBooks()
}

function swapStatus(bookID) {
    const index = library.findIndex(book => book.id === bookID)
    library[index].status = !library[index].status
    displayBooks()
}