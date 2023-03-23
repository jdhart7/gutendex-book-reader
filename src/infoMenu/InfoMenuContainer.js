import React from 'react';
import { InfoMenu } from './InfoMenu.js';

export class InfoMenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoState: false,
            bookInfo: '',
            authors: '',
            bookShelves: '',
            copyright: '',
            downloadCount: 0,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.bookId !== this.props.bookId && this.props.infoState === true) || (prevProps.infoState !== this.props.infoState && this.props.bookId)) {
            this.getBookInfo();
        }
    }

    async getBookInfo() {
        const getAllBooks = await fetch('https://gutendex.com/books/' + this.props.bookId, {
            method: 'GET'
        });
        const myResponse = await getAllBooks.json();

        let authors = '';
        if (myResponse.authors) {
            for (let i = 0; i < myResponse.authors.length; i++) {
                authors += myResponse.authors[i].name + ' (' + myResponse.authors[i].birth_year + '-' + myResponse.authors[i].death_year + ')';
                if (i !== myResponse.authors.length - 1) {
                    authors += ', ';
                }
            }
        } else {
            authors = 'No Author Available'
        }

        let bookShelves = ''
        if (myResponse.bookshelves) {
            for (let i = 0; i < myResponse.bookshelves.length; i++) {
                bookShelves += myResponse.bookshelves[i];
                if (i !== myResponse.bookshelves.length - 1) {
                    bookShelves += ', ';
                }
            }
        } else {
            bookShelves = 'This book has no bookshelves';
        }

        let copyright = '';
        switch (myResponse.copyright) {
            case true:
                copyright = 'Currently under copyright in the US';
                break;
            case false:
                copyright = 'Not under copyright in the US';
                break;
            case null:
                copyright = 'No information on copyright status';
        }
        
        var key;
        let count = 0;
        let formats = [];
        for (key in myResponse.formats) {
            if (myResponse.formats.hasOwnProperty(key)) {
                formats[count] = key;
                formats[count + 1] = myResponse.formats[key];
                count += 2;
            }
        }

        this.setState((prevState) => {
            return {
                ...prevState,
                bookTitle: myResponse.title,
                bookInfo: myResponse,
                authors: authors,
                bookShelves: bookShelves,
                copyright: copyright,
                downloadCount: myResponse.download_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                languages: myResponse.languages.toString(),
                formats: formats,
            }
        });
    }

    render() {
        const { infoState, bookId } = this.props;
        const { bookInfo, bookTitle, authors, bookShelves, copyright, downloadCount, languages, formats } = this.state;

        return (
            <InfoMenu 
                infoState={infoState ? 'infoMenuContainer' : 'infoMenuContainer closedInfoList'}
                bookId={bookId}
                bookInfo={bookInfo}
                bookTitle={bookTitle}
                authors={authors}
                bookShelves={bookShelves}
                copyright={copyright}
                downloadCount={downloadCount}
                languages={languages}
                formats={formats}
            />
        );
    }
}