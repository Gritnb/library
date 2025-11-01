class Library {
    constructor() {
        this.books = []
    }

    addBook(book) {
        this.books.push(book)
    }

}

const library = new Library()

library.addBook(
    {
        id: crypto.randomUUID(),
        title: 'Ulysses',
        author: 'James Joyce',
        pages: 732,
        status: true,
        image: "./assets/books-samples/ulysses.jpg"
    }
)

library.addBook(
    {
        id: crypto.randomUUID(),
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 180,
        status: false,
        image: './assets/books-samples/great-gatsby.jpg'
    }
)

library.addBook(
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