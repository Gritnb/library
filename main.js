import { library } from './library.js'
import { displayBooks } from './displayBooks.js'
import { setTheme } from './changeTheme.js'

displayBooks()
// Hooks
const toggleTheme = document.getElementById('theme-toggle')
const totalBooks = document.querySelector('.total')
const readBooks = document.querySelector('.read')
const unreadBooks = document.querySelector('.unread')
const addNewBook = document.querySelector('.add-new-btn')

// Listeners // UI Updates
totalBooks.textContent = library.length === 0 ? '0' : library.length
readBooks.textContent = library.filter(book => book.status).length
unreadBooks.textContent = library.filter(book => !book.status).length

toggleTheme.addEventListener('click', setTheme)
addNewBook.addEventListener('click', newForm)

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

// function newForm() {
//     const modal = document.querySelector('.form-container')
//     modal.style.display = 'block'


    
// }

