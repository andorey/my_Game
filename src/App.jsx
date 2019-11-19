import React from 'react';

import './App.css';
import Item from "./Item";
import dogAudio from "./audio/dog.mp3"


class App extends React.Component{

	constructor(){
		super();
		this.dogAudioRef = React.createRef()
	}

	state = {
		counter: 0,
		randomIndex: 4,
		items: [0,1,2,3,4,5,6,7,8]
	};

	componentDidMount() {
		setInterval(this.setRandomImageIndex, 1000)
	};

	setRandomImageIndex = () => {
		this.setState({
			randomIndex: Math.floor(Math.random() * 9)
		})
	};

	incCounter = () => {
		this.dogAudioRef.current.currentTime = 0;
		this.dogAudioRef.current.play();
		this.setState({
			counter: this.state.counter + 1
		})
	};


	render() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="wrapper">
					<audio src={dogAudio} ref={this.dogAudioRef}></audio>
					{this.state.items.map(i =>
					<Item key={i}
					index={i}
					randomIndex={this.state.randomIndex}
					onClickHandler={this.incCounter}/>
					)}
					<div className="counter">
						{this.state.counter}
					</div>
				</div>
			</header>
		</div>
	);}
};


export default App;
