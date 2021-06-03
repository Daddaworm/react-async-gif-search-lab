import React, { Component } from 'react'


export default class GifSearch extends Component {

    state = {
        searchTerm: ""
    }


    handleSearch = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGifs(this.state.searchTerm)
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Enter a search term:</h3>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleSearch}/>
                    <input type="submit" value="Find gifs"/>
                </form>
            </div>
        )
    }

}