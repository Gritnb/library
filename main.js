import { library } from './library.js'
import { Book } from './book.js'
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
        library.delete(event.target.id)
        displayBooks()
    }
    if (event.target.className.includes('read-badge') ||
        event.target.className.includes('pending-badge')) {
        library.swapStatus(event.target.id)
        displayBooks()
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
function formData(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const title = data.get('title')
    const author = data.get('author')
    const pages = data.get('pages')
    const status = data.get('status')
    const book = new Book(title, author, pages, status)
    library.add(book)
    form.reset()
    formContainer.style.display = 'none'
    displayBooks()
}
