const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction", rating: 4.9 },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", rating: 4.8 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction", rating: 4.7 },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction", rating: 4.3 },
    { id: 5, title: "Moby-Dick", author: "Herman Melville", year: 1851, genre: "Adventure", rating: 4.1 },
    { id: 6, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance", rating: 4.8 },
    { id: 7, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy", rating: 4.9 },
    { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy", rating: 4.7 },
    { id: 9, title: "War and Peace", author: "Leo Tolstoy", year: 1869, genre: "Historical", rating: 4.5 },
    { id: 10, title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, genre: "Philosophical", rating: 4.6 }
  ];

const rating_greater_than_4p5 = books.filter((book) => book.rating >= 4.5)

const avg_rating_of_tolkien = books.filter((book) => book.author == "J.R.R. Tolkien").reduce((total_rating, book) => total_rating + book.rating, 0)

const no_of_books_in_each = books.reduce((geners, book) => {
    if(geners[book.genre]) 
        geners[book.genre]++
    else 
        geners[book.genre] = 1

    return geners
}, {})

const books_before_1950 = books.filter( book => book.year <= 1950 ).forEach(book => {
    // console.log(`${book.title} ${book.year}`)
})

const book_with_long_title = books.reduce( (longest_title, book) => {
    if(book.title.length > longest_title.length) 
        longest_title = book.title

    return longest_title
}, "")

const total_pages_of_books = books.reduce((pages, book) => {
    pages += book.year%100 + book.rating*50
    return pages
}, 0)

const highest_rating_in_fantacy = books.filter((book) => book.genre = "Fantacy").reduce((highest_rating, book) => {
    if(book.rating > highest_rating)
        highest_rating = book.rating
    return highest_rating
}, 0)

console.log(highest_rating_in_fantacy)