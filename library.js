class Library {
    constructor() {
        this.books = []
    }

    add(book) {
        this.books.push(book)
    }

    delete(id) {
        const index = this.books.findIndex(book => book.id === id)
        this.books.splice(index, 1)
    }
    

}

const library = new Library()

library.add(
    {
        id: crypto.randomUUID(),
        title: 'Ulysses',
        author: 'James Joyce',
        pages: 732,
        status: true,
        image: "./assets/books-samples/ulysses.jpg"
    }
)

library.add(
    {
        id: crypto.randomUUID(),
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 180,
        status: false,
        image: './assets/books-samples/great-gatsby.jpg'
    }
)

library.add(
    {
        id: crypto.randomUUID(),
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel García Márquez',
        pages: 432,
        status: true,
        image: './assets/books-samples/solitude.jpg'
    }
)

class Book {
    constructor(title, author, pages, status) {
        this.title = title
        this.author = author
        this.pages = pages
        this.status = status
        this.id = crypto.randomUUID()
    }
}

export { library };

// function deleteBook(bookID) {
//     const index = library.findIndex(book => book.id === bookID)
//     library.splice(index, 1)
//     displayBooks()
// }