import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        const key = 'o5EOnMC93HiLG3EZAqh6lIRqIlzGWg5d'
        let url = `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${key}&rating=g`
        fetch(url)
        .then(resp => resp.json())
        .then(gifData => {
            console.log(gifData.data);
            this.setState({
                gifs: gifData.data
            })
        })
    }

    render() {
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }

    fetchGifs = (searchTerm) => {
        const key = 'o5EOnMC93HiLG3EZAqh6lIRqIlzGWg5d'
        let url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${key}&rating=g`
        fetch(url)
        .then(resp => resp.json())
        .then(gifData => {
            console.log(gifData.data);
            this.setState({
                gifs: gifData.data
            })
        })
    }
}