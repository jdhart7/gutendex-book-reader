import React from 'react';
import '../bookSelect.css';

export class SearchBooks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    handleClick() {
        this.props.onSearch(this.state.searchTerm);
    }

    render() {
        return(
            <div className="searchContainer">
                <input className="inputStyle bookSearchInput" placeholder="Search Books" onChange={this.handleChange} onKeyDown={this.handleChange} />
                <button className="button" onClick={this.handleClick}>SEARCH</button>
            </div>
        );
    };
}