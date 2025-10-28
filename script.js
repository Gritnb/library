import { library } from './library.js'

// Hooks
const bookContainer = document.querySelector('.books')

// Listeners
document.getElementById('theme-toggle').addEventListener('click', setTheme)


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

function displayBooks() {
    library.forEach(book => {
        const card = document.createElement('div')
        card.classList.add('card')

        bookContainer.append(card)
        
    })
}


function setTheme() {
    const root = document.documentElement;
    const dayIcon = document.getElementById('day-icon')
    const nightIcon = document.getElementById('night-icon')

    if (root.className === 'dark') {
        dayIcon.classList.add('icon-inactive')
        nightIcon.classList.remove('icon-inactive')
    } else {
        dayIcon.classList.remove('icon-inactive')
        nightIcon.classList.add('icon-inactive')
    }

    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

displayBooks()