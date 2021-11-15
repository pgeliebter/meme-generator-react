import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText    : '',
            bottomText : '',
            randomImg  : 'http://i.imgflip.com/1bij.jpg',
            allImages  : []
        }
        this.getMemeImages = this.getMemeImages.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.pickNewImg = this.pickNewImg.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.getMemeImages()
    }

    getMemeImages() {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((response) => {
                const { memes } = response.data
                this.setState({ allImages: memes })
            })
    }

    handleChange(event) {
        const { value, name, type, id } = event.target
        this.setState((prevState) => {
            return { [name]: value }
        })
    }

    /**
     * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site (`.url`)
     */
    pickNewImg() {
        const random = Math.floor(Math.random() * this.state.allImages.length)
        console.log(this.state.allImages[random])
        this.setState({ randomImg: this.state.allImages[random].url })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.pickNewImg()
    }
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Top Text"
                        name="topText"
                        onChange={this.handleChange}
                        value={this.state.topText}
                    />
                    <input
                        placeholder="Bottom Text"
                        name="bottomText"
                        onChange={this.handleChange}
                        value={this.state.bottomText}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator
