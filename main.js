import { library } from './library.js'
import { displayBooks } from './displayBooks.js'
import { setTheme } from './changeTheme.js'

displayBooks()
// Hooks
const toggleTheme = document.getElementById('theme-toggle')
const totalBooks = document.querySelector('.total')
const readBooks = document.querySelector('.read')
const unreadBooks = document.querySelector('.unread')
const deleteBtns = Array.from(document.querySelectorAll('.delete-btn'))

// Listeners // UI Updates
totalBooks.textContent = library.length === 0 ? '0' : library.length
readBooks.textContent = library.filter(book => book.status).length
unreadBooks.textContent = library.filter(book => !book.status).length

toggleTheme.addEventListener('click', setTheme)
deleteBtns.forEach(button => {
    button.addEventListener('click', deleteBook)
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

function deleteBook(event) {
    const identifier = event.target.id
    const bookToDelete = library.filter(book => !book.id === identifier)
    library = bookToDelete
}
