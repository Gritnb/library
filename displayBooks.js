import { library } from './library.js'

export function displayBooks() {
    const bookContainer = document.querySelector('.books')
    const totalBooks = document.querySelector('.total')
    const readBooks = document.querySelector('.read')
    const unreadBooks = document.querySelector('.unread')
    bookContainer.textContent = ''

    library.books.forEach(book => {
        const card = document.createElement('div')
        card.classList.add('card')

        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add('image-wrapper')

        const cover = document.createElement('img')
        cover.classList.add('book-cover')
        cover.src = `${book.image ? book.image : './assets/images/placeholder-book.svg'}`
        cover.alt = `Cover of the book: ${book.title}. `
        imageWrapper.append(cover)

        const bookInfo = document.createElement('div')
        bookInfo.classList.add('book-info')

        const bookTitle = document.createElement('h3')
        bookTitle.classList.add('book-title')
        bookTitle.textContent = `${book.title}`
        bookInfo.append(bookTitle)
        
        const authorField = document.createElement('div')
        authorField.classList.add('book-field')
        
        const authorSpan = document.createElement('span')
        authorSpan.classList.add('book-stat')
        authorSpan.textContent = 'Author: '

        const bookAuthor = document.createElement('p')
        bookAuthor.classList.add('book-stat')
        bookAuthor.textContent = `${book.author}`

        authorField.append(authorSpan)
        authorField.append(bookAuthor)
        bookInfo.append(authorField)

        const pagesField = document.createElement('div')
        pagesField.classList.add('book-field')

        const pagesSpan = document.createElement('span')
        pagesSpan.classList.add('book-stat')
        pagesSpan.textContent = 'Pages: '
        
        const bookPages = document.createElement('p')
        bookPages.classList.add('book-stat')
        bookPages.textContent = `${book.pages}`

        pagesField.append(pagesSpan)
        pagesField.append(bookPages)
        bookInfo.append(pagesField)

        const statusField = document.createElement('div')
        statusField.classList.add('book-field')

        const statusSpan = document.createElement('span')
        statusSpan.classList.add('book-stat')
        statusSpan.textContent = 'Status: '

        const bookStatus = document.createElement('p')
        bookStatus.classList.add('book-stat')
        bookStatus.id = `${book.id}`
        bookStatus.classList.add(`${book.status ? 'read-badge' : 'pending-badge'}`)
        bookStatus.textContent = `${book.status ? 'Read' : 'In queue'}`

        statusField.append(statusSpan)
        statusField.append(bookStatus)
        bookInfo.append(statusField)

        const bookIcons = document.createElement('div')
        bookIcons.classList.add('book-icons')

        const icons = `
            <svg xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24"
                 class="icon-small">
                 <title>Favorite</title>
                 <path fill="var(--icon-fade)"
                       d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24"
                 class="icon-small">
                 <title>Share</title>
                 <path fill="var(--icon-fade)"
                 d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z" />
            </svg>
        `
        bookIcons.append(icons)

        const button = document.createElement('button')
        button.classList.add('delete-btn')
        button.id = `${book.id}`
        button.textContent = '🗑️'
        bookIcons.append(button)
        
        bookIcons.innerHTML = icons
        bookIcons.append(button)

        card.append(imageWrapper)
        card.append(bookInfo)
        card.append(bookIcons)
        bookContainer.append(card)

        totalBooks.textContent = library.books.length === 0 ? '0' : library.length
        readBooks.textContent = library.books.filter(book => book.status).length
        unreadBooks.textContent = library.books.filter(book => !book.status).length
    })
}
