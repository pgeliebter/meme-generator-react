import React, { Component } from 'react'

/**
 * We'll be using an API that provides a bunch of meme images.
 * 
 * Your task:
 * make an API call to "https://api.imgflip.com/get_memes" and save the 
 * data that comes back (`response.data.memes`) to a new state property
 * called `allMemeImgs`. (The data that comes back is an array)
 */

class MemeGenerator extends Component {
	constructor() {
		super()
		this.state = {
			topText: '',
			bottomText: '',
			randomImg: 'http://i.imgflip.com/1bij.jpg'
		}
		this.getMemeImages = this.getMemeImages.bind(this)
	}
	getMemeImages() {
		fetch('https://api.imgflip.com/get_memes')
			.then((response) => response.json())
			.then((response) => console.log(response.data))
	}

	render() {
		return (
			<div>
				I am a placeholder for meme
				<button onClick={this.getMemeImages}>Get memes</button>
			</div>
		)
	}
}

export default MemeGenerator
