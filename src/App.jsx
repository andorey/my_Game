import React from 'react';

import './App.css';
import Item from "./Item";
import smileAudio from "./audio/laugh_2.wav";
import congAudion from "./audio/crowd-excited.mp3";


class App extends React.Component{

	constructor(){
		super();
		this.smileAudioRef = React.createRef();
		this.congAudioRef = React.createRef();
	}

	state = {
		counter: 0,
		randomIndex: 4,
		maxValue: 5,
		items: [0,1,2,3,4,5,6,7,8]
	};

	componentDidMount() {
		setInterval(this.setRandomImageIndex, 900)
	};

	setRandomImageIndex = () => {
		this.setState({
			randomIndex: Math.floor(Math.random() * 9)
		})
	};


	incCounter = () => {
		this.setState({
			counter: this.state.counter + 1
		}, () => {
			if (this.state.counter % this.state.maxValue !== 0) {
				this.smileAudioRef.current.currentTime = 0;
				this.smileAudioRef.current.play();
			} else {
				this.congAudioRef.current.currentTime = 0;
				this.congAudioRef.current.play();
			}
		})
	};


	render() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="wrapper">
					<audio src={smileAudio}
						   ref={this.smileAudioRef}></audio>
					<audio src={congAudion}
						   ref={this.congAudioRef}></audio>
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
