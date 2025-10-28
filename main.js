import { library } from './library.js'
import { displayBooks } from './displayBooks.js'
import { setTheme } from './changeTheme.js'

displayBooks()
// Hooks
const toggleTheme = document.getElementById('theme-toggle')
const bookContainer = document.querySelector('.books')
const addNewBook = document.querySelector('.add-new-btn')
const formContainer = document.querySelector('.form-container')
const form = document.querySelector('.new-form')
const cancel = document.querySelector('.cancel-btn')

// Listeners // UI Updates
formContainer.addEventListener('click', (event) => {
    if (event.target.className === 'form-container') {
        form.reset()
        formContainer.style.display = 'none'
    }
})

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

addNewBook.addEventListener('click', () => {
    formContainer.style.display = 'block'
})

cancel.addEventListener('click', () => {
    form.reset()
    formContainer.style.display = 'none'
})

form.addEventListener('submit', formData)

// Functions
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(title, author, pages, status = false) {
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

function formData(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const title = data.get('title')
    const author = data.get('author')
    const pages = data.get('pages')
    const status = data.get('status')
    console.log(status)
    addBookToLibrary(title, author, pages, status)
    form.reset()
    formContainer.style.display = 'none'
    displayBooks()
}
