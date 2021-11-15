import React, { Component } from 'react'

/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */

class MemeGenerator extends Component {
	constructor() {
		super()
		this.state = {
			topText: '',
			bottomText: '',
			randomImg: 'http://i.imgflip.com/1bij.jpg'
		}
	}
	render() {
		return <div>I am a placeholder for meme</div>
	}
}

export default MemeGenerator
