import React from 'react';
import { BookReader } from './BookReader.js';

export class BookReaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookLink: '',
            listState: true,
            infoState: false,
        };

        this.toggleList = this.toggleList.bind(this);
        this.toggleInfo = this.toggleInfo.bind(this);
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

    toggleInfo() {
        this.props.toggleInfo(this.state.infoState ? false : true);
        this.setState(prevState => {
            return {
                ...prevState,
                infoState: this.state.infoState ? false : true,
            }
        });
    }

    render() {
        const { bookId } = this.props;
        const bookTitle = this.props.bookTitle;
        const bookLink = this.state.bookLink;
        const listState = this.state.listState;
        const infoState = this.state.infoState;
        const toggleInfo = this.toggleInfo;
        const toggleList = this.toggleList;

        return (
                <BookReader 
                    bookId={bookId} 
                    bookLink={bookLink} 
                    bookTitle={bookTitle} 
                    listState={listState}
                    infoState={infoState} 
                    toggleList={toggleList} 
                    toggleInfo={toggleInfo}
                />
        )
    };
}