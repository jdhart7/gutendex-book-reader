import React from 'react';
import { BookSelect } from './BookSelect.js';

export class BookSelectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1, 
            bookList: '', 
            numberOfBooks: 0, 
            searchTerm: '',
            listState: true,
        };

        this.changePage = this.changePage.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.setBookId = this.setBookId.bind(this);
    }

    componentDidMount() {
        //this.getAllBooksTemp();
        this.getAllBooks()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.pageNumber !== this.state.pageNumber || prevState.searchTerm !== this.state.searchTerm) {
            //this.getAllBooksTemp();
            this.getAllBooks();
        }
    }

    async getAllBooks() {
        const getAllBooks = await fetch('https://gutendex.com/books/?page=' + this.state.pageNumber + this.state.searchTerm, {
            method: 'GET'
        });
        const myResponse = await getAllBooks.json();

        const books = myResponse.results.map((book) => {
            let editedTitle = '';
            if (book.title.length > 46) {
                editedTitle = book.title.substring(0, 46) + "...";
            }

            let editedAuthor = '';
            if (!book.authors[0]) {
                editedAuthor = 'No listed author';
            }else if (book.authors[0] && book.authors[0].name.length > 30) {
                editedAuthor = book.authors[0].name.substring(0, 30) + "...";
            }

            return (
                <div key={book.id} id={book.id} className="bookListItem" title={book.title} onClick={this.setBookId}>
                    <div className="title">{editedTitle ? editedTitle : book.title}</div>
                    <div className="author">{editedAuthor ? editedAuthor : book.authors[0].name}</div>
                </div>
            );
        });

        this.setState(prevState => {
            return {
                ...prevState,
                bookList: books,
                numberOfBooks: myResponse.count,
            }
        });
    }

    getAllBooksTemp() {
        let myResponse = '';
        if (this.state.pageNumber === 1) {
            myResponse = JSON.parse('{"count":64,"next":"https://gutendex.com/books/?page=3","previous":"https://gutendex.com/books/","results":[{"id":28054,"title":"A Modest Proposal: For preventing the children of poor people in Ireland, from being a burden on their parents or country, and for making them beneficial to the publick","authors":[{"name":"Jonathan Swift test test test test test test","birth_year":1821,"death_year":1881}],"translators":[{"name":"Garnett, Constance","birth_year":1861,"death_year":1946}],"subjects":["Brothers -- Fiction","Didactic fiction","Fathers and sons -- Fiction","Russia -- Social life and customs -- 1533-1917 -- Fiction"],"bookshelves":["Best Books Ever Listings"],"languages":["en"],"copyright":false,"media_type":"Text","formats":{"text/plain":"https://www.gutenberg.org/ebooks/28054.txt.utf-8","application/octet-stream":"https://www.gutenberg.org/files/28054/28054-0.zip","text/plain; charset=us-ascii":"https://www.gutenberg.org/files/28054/28054-0.txt","application/x-mobipocket-ebook":"https://www.gutenberg.org/ebooks/28054.kf8.images","text/html":"https://www.gutenberg.org/ebooks/28054.html.images","application/epub+zip":"https://www.gutenberg.org/ebooks/28054.epub3.images","image/jpeg":"https://www.gutenberg.org/cache/epub/28054/pg28054.cover.medium.jpg","application/rdf+xml":"https://www.gutenberg.org/ebooks/28054.rdf"},"download_count":15942}, {"id":996,"title":"Don Quixote","authors":[{"name":"Cervantes Saavedra, Miguel de","birth_year":1547,"death_year":1616}],"translators":[{"name":"Ormsby, John","birth_year":1829,"death_year":1895}],"subjects":["Knights and knighthood -- Spain -- Fiction","Picaresque literature","Romances","Spain -- Social life and customs -- 16th century -- Fiction"],"bookshelves":["Best Books Ever Listings","Harvard Classics"],"languages":["en"],"copyright":false,"media_type":"Text","formats":{"application/x-mobipocket-ebook":"https://www.gutenberg.org/ebooks/996.kf8.images","application/epub+zip":"https://www.gutenberg.org/ebooks/996.epub3.images","text/html":"https://www.gutenberg.org/ebooks/996.html.images","application/octet-stream":"https://www.gutenberg.org/files/996/996-0.zip","image/jpeg":"https://www.gutenberg.org/cache/epub/996/pg996.cover.medium.jpg","text/plain; charset=us-ascii":"https://www.gutenberg.org/files/996/996-0.txt","text/plain":"https://www.gutenberg.org/ebooks/996.txt.utf-8","application/rdf+xml":"https://www.gutenberg.org/ebooks/996.rdf"},"download_count":9805}]}');
        } else {
            myResponse = JSON.parse('{"count":64,"next":"https://gutendex.com/books/?page=4","previous":"https://gutendex.com/books/?page=2","results":[{"id":30254,"title":"The Romance of Lust: A classic Victorian erotic novel","authors":[],"translators":[],"subjects":["Corporal punishment -- Fiction","Erotic stories","Incest -- Fiction","Pornography","Rape -- Fiction","Sexual dominance and submission -- Fiction"],"bookshelves":[],"languages":["en"],"copyright":false,"media_type":"Text","formats":{"application/x-mobipocket-ebook":"https://www.gutenberg.org/ebooks/30254.kf8.images","application/epub+zip":"https://www.gutenberg.org/ebooks/30254.epub3.images","image/jpeg":"https://www.gutenberg.org/cache/epub/30254/pg30254.cover.medium.jpg","text/plain; charset=utf-8":"https://www.gutenberg.org/files/30254/30254-0.txt","text/html; charset=utf-8":"https://www.gutenberg.org/files/30254/30254-h/30254-h.htm","text/html":"https://www.gutenberg.org/ebooks/30254.html.images","application/rdf+xml":"https://www.gutenberg.org/ebooks/30254.rdf"},"download_count":9020},{"id":3206,"title":"Moby Multiple Language Lists of Common Words","authors":[{"name":"Ward, Grady","birth_year":1951,"death_year":null}],"translators":[],"subjects":["Words and phrase lists -- English"],"bookshelves":[],"languages":["en"],"copyright":false,"media_type":"Text","formats":{"application/x-mobipocket-ebook":"https://www.gutenberg.org/ebooks/3206.kf8.images","application/epub+zip":"https://www.gutenberg.org/ebooks/3206.epub3.images","text/plain; charset=us-ascii":"https://www.gutenberg.org/files/3206/3206.txt","image/jpeg":"https://www.gutenberg.org/cache/epub/3206/pg3206.cover.medium.jpg","application/rdf+xml":"https://www.gutenberg.org/ebooks/3206.rdf","text/html":"https://www.gutenberg.org/ebooks/3206.html.images","text/plain":"https://www.gutenberg.org/ebooks/3206.txt.utf-8"},"download_count":8923}]}');
        }

        const books = myResponse.results.map((book) => {
            let editedTitle = '';
            if (book.title.length > 46) {
                editedTitle = book.title.substring(0, 46) + "...";
            }

            let editedAuthor = '';
            if (!book.authors[0]) {
                editedAuthor = 'No listed author';
            }else if (book.authors[0] && book.authors[0].name.length > 30) {
                editedAuthor = book.authors[0].name.substring(0, 30) + "...";
            }

            return (
                <div key={book.id} id={book.id} className="bookListItem" title={book.title} onClick={this.setBookId}>
                    <div className="title">{editedTitle ? editedTitle : book.title}</div>
                    <div className="author">{editedAuthor ? editedAuthor : book.authors[0].name}</div>
                </div>
            );
        });

        this.setState(prevState => {
            return {
                ...prevState,
                bookList: books,
                numberOfBooks: myResponse.count,
            }
        });
    }

    setBookId(e) {
        this.props.setBookId(e.target.id);
    }

    changePage(e) {
        let temp = this.state.pageNumber;
        if (e.target.id === 'NEXT' && this.state.pageNumber < parseInt(this.state.numberOfBooks / 32) + 1) {
            temp = this.state.pageNumber + 1;
        } else if (e.target.id === 'PREV' && this.state.pageNumber > 1) {
            temp = this.state.pageNumber - 1;
        } else {
            return;
        }
        this.setState(prevState => {
            return {
                pageNumber: temp,
                bookList: '',
                numberOfBooks: 0,
            }
        });
    }

    onSearch(searchTerm) {
        let encodedSearchTerm = '&search=' + encodeURI(searchTerm);
        if (this.state.searchTerm !== encodedSearchTerm) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    searchTerm: encodedSearchTerm,
                    bookList: '',
                    numberOfBooks: 0,
                    pageNumber: 1,
                }
            });
        }
    }

    render() {
        const bookList = this.state.bookList;
        const numberOfBooks = this.state.numberOfBooks;
        const pageNumber = this.state.pageNumber;
        const listState = this.props.listState;
        const changePage = this.changePage;
        const onSearch = this.onSearch;

        return (
            <BookSelect 
                bookList={bookList} 
                numberOfBooks={numberOfBooks} 
                pageNumber={pageNumber} 
                changePage={changePage}
                onSearch={onSearch}
                listState={listState ? 'bookSelectContainer' : 'bookSelectContainer closedBookList'}
            />
        );
    }
}