import React, { Component } from 'react'


export default class GifList extends Component {


genGifs = () => {
    return this.props.gifs.map((gif,idx) => {
        return (idx < 3) ? <li key={idx} ><img src={gif.images.original.url} alt=""/></li> : null
    })
}


    render() {
        return(
            <ul>
                {this.genGifs()}
            </ul>
        )
    }

}

