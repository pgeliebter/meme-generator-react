import React, { Component } from 'react'

class MemeGenerator extends Component {
	constructor() {
		super()
		this.state = {
			topText: '',
			bottomText: '',
			randomImg: 'http://i.imgflip.com/1bij.jpg',
			allImages: []
		}
		this.getMemeImages = this.getMemeImages.bind(this)
		this.handleChange = this.handleChange.bind(this)
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

	render() {
		return (
			<div>
				<form className="meme-form">
					{/**
             * Create 2 input fields, one for the topText and one for the bottomText
             * Remember that these will be "controlled forms", so make sure to add
             * all the attributes you'll need for that to work
             */}
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
			</div>
		)
	}
}

export default MemeGenerator
