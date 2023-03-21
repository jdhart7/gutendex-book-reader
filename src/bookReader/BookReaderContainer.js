import React from 'react';
import { BookReader } from './BookReader.js';

export class BookReaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookLink: '',
            listState: true,
        };

        this.toggleList = this.toggleList.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.bookId !== this.props.bookId) {
            this.getBookInformation();
        }
    }

    async getBookInformation() {
        this.resetLink();
        
        this.setState(prevState => {
            return {
                ...prevState,
                bookLink: `https://gutenberg.org/files/${this.props.bookId}/${this.props.bookId}-h/${this.props.bookId}-h.htm`,
            }
        });
    }

    resetLink() {
        this.setState(prevState => {
            return {
                ...prevState,
                bookLink: '',
                bookTitle: '',
            }
        });
    }

    toggleList() {
        this.props.toggleList(this.state.listState ? false : true);
        this.setState(prevState => {
            return {
                ...prevState,
                listState: this.state.listState ? false : true,
            }
        });
    }

    render() {
        const { bookId } = this.props;
        const bookLink = this.state.bookLink;
        const bookTitle = this.props.bookTitle;
        const listState = this.state.listState;
        const toggleList = this.toggleList;

        return (
                <BookReader 
                    bookId={bookId} 
                    bookLink={bookLink} 
                    bookTitle={bookTitle} 
                    listState={listState}
                    toggleList={toggleList} 
                />
        )
    };
}