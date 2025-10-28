import { library } from './library.js'


export function displayBooks() {
    const bookContainer = document.querySelector('.books')
    
    library.forEach(book => {
        const card = document.createElement('div')
        card.classList.add('card')



        bookContainer.append(card)
        
    })
}