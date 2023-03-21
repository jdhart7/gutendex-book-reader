import React from 'react';
import { BookReader } from './BookReader.js';

export class BookReaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookLink: ''
        };
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
            }
        });
    }

    render() {
        const { bookId } = this.props;
        const bookLink = this.state.bookLink;

        return (
            <div>
                <BookReader bookId={bookId} bookLink={bookLink} />
            </div>
        )
    };
}