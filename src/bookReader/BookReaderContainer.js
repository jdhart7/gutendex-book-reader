import React from 'react';
import { BookReader } from './BookReader.js';

export class BookReaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookLink: '',
            listOpen: true,
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
        console.log('listOpen: ' + this.state.listOpen);
        this.setState(prevState => {
            return {
                ...prevState,
                listOpen: this.state.listOpen ? false : true,
            }
        })
    }

    render() {
        const { bookId } = this.props;
        const bookLink = this.state.bookLink;
        const bookTitle = this.props.bookTitle;
        const listOpen = this.state.listOpen;
        const toggleList = this.toggleList;

        return (
            <div>
                <BookReader 
                    bookId={bookId} 
                    bookLink={bookLink} 
                    bookTitle={bookTitle} 
                    listOpen={listOpen}
                    toggleList={toggleList} 
                />
            </div>
        )
    };
}