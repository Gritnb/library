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
    
    swapStatus(id) {
        const index = this.books.findIndex(book => book.id === id)
        this.books[index].status = !this.books[index].status
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

export { library };
