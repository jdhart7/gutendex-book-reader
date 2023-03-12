import React from 'react';
import { BookSelect } from './BookSelect.js';

export class BookSelectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pageNumber: 1, bookList: '' };
    }

    componentDidMount() {
        this.getAllBooksTemp();
        //this.getAllBooks()
    }

    async getAllBooks() {
        const getAllBooks = await fetch('https://gutendex.com/books/?page=' + this.state.pageNumber, {
            method: 'GET'
        });
        const myResponse = await getAllBooks.json();
        console.log(myResponse.results[0].id);

        const books = myResponse.results.map((book) => {
            console.log(book.id);
            let editedTitle = '';
            if (book.title.length > 47) {
                editedTitle = book.title.substring(0, 40) + "...";
            }
            return (
                <div key={book.id} className="bookListItem">
                    <div className="title">{editedTitle ? editedTitle : book.title}</div>
                    <div className="author">{book.authors[0].name}</div>
                </div>
            );
        });

        this.setState(prevState => {
            return {
                ...prevState,
                bookList: books
            }
        });
    }

    getAllBooksTemp() {
        const myResponse = JSON.parse('{"count":70159,"next":"https://gutendex.com/books/?page=3","previous":"https://gutendex.com/books/","results":[{"id":28054,"title":"A Modest Proposal: For preventing the children of poor people in Ireland, from being a burden on their parents or country, and for making them beneficial to the publick","authors":[{"name":"Jonathan Swift","birth_year":1821,"death_year":1881}],"translators":[{"name":"Garnett, Constance","birth_year":1861,"death_year":1946}],"subjects":["Brothers -- Fiction","Didactic fiction","Fathers and sons -- Fiction","Russia -- Social life and customs -- 1533-1917 -- Fiction"],"bookshelves":["Best Books Ever Listings"],"languages":["en"],"copyright":false,"media_type":"Text","formats":{"text/plain":"https://www.gutenberg.org/ebooks/28054.txt.utf-8","application/octet-stream":"https://www.gutenberg.org/files/28054/28054-0.zip","text/plain; charset=us-ascii":"https://www.gutenberg.org/files/28054/28054-0.txt","application/x-mobipocket-ebook":"https://www.gutenberg.org/ebooks/28054.kf8.images","text/html":"https://www.gutenberg.org/ebooks/28054.html.images","application/epub+zip":"https://www.gutenberg.org/ebooks/28054.epub3.images","image/jpeg":"https://www.gutenberg.org/cache/epub/28054/pg28054.cover.medium.jpg","application/rdf+xml":"https://www.gutenberg.org/ebooks/28054.rdf"},"download_count":15942}, {"id":996,"title":"Don Quixote","authors":[{"name":"Cervantes Saavedra, Miguel de","birth_year":1547,"death_year":1616}],"translators":[{"name":"Ormsby, John","birth_year":1829,"death_year":1895}],"subjects":["Knights and knighthood -- Spain -- Fiction","Picaresque literature","Romances","Spain -- Social life and customs -- 16th century -- Fiction"],"bookshelves":["Best Books Ever Listings","Harvard Classics"],"languages":["en"],"copyright":false,"media_type":"Text","formats":{"application/x-mobipocket-ebook":"https://www.gutenberg.org/ebooks/996.kf8.images","application/epub+zip":"https://www.gutenberg.org/ebooks/996.epub3.images","text/html":"https://www.gutenberg.org/ebooks/996.html.images","application/octet-stream":"https://www.gutenberg.org/files/996/996-0.zip","image/jpeg":"https://www.gutenberg.org/cache/epub/996/pg996.cover.medium.jpg","text/plain; charset=us-ascii":"https://www.gutenberg.org/files/996/996-0.txt","text/plain":"https://www.gutenberg.org/ebooks/996.txt.utf-8","application/rdf+xml":"https://www.gutenberg.org/ebooks/996.rdf"},"download_count":9805}]}')
        console.log(myResponse);

        console.log(myResponse.results[0].id);

        const books = myResponse.results.map((book) => {
            console.log(book.id);
            let editedTitle = '';
            if (book.title.length > 46) {
                editedTitle = book.title.substring(0, 46) + "...";
            }
            return (
                <div key={book.id} className="bookListItem" title={book.title + ' by ' + book.authors[0].name}>
                    <div className="title">{editedTitle ? editedTitle : book.title}</div>
                    <div className="author">{book.authors[0].name}</div>
                </div>
            );
        });
        console.log(books);

        this.setState(prevState => {
            return {
                ...prevState,
                bookList: books
            }
        });
    }

    nextPage() {
        let temp = this.state.pageNumber++;
        this.setState(prevState => {
            return {
                pageNumber: temp,
            }
        });
    }

    render() {
        const bookList = this.state.bookList;
        return <BookSelect bookList={bookList} />;
    }
}