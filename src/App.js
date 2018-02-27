import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import autobind from 'react-autobind';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: false,
      position1: '100,0 300,200 200,300 0,100',
      position2: '0,200 200,0 300,100 100,300',
    }

    autobind(this);
  }

  toggleCheckbox() {
    if (this.state.saved) {
      this.animationToStar.beginElement();
      this.animationToYellow.beginElement();
      this.buttonText.innerHTML = "Save";
      this.setState({ saved: false});
    } else {
      this.animationToCheck.beginElement();
      this.animationToGreen.beginElement();
      this.buttonText.innerHTML = "Saved!";
      this.setState({ saved: true});
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleCheckbox}>
          <svg viewBox="0 0 194.6 185.1">
            <polygon fill="#FFD41D" points="97.3,0 127.4,60.9 194.6,70.7 145.9,118.1 157.4,185.1 97.3,153.5 37.2,185.1 48.6,118.1 0,70.7 67.2,60.9">
              <animate ref={ref => this.animationToCheck = ref} begin="indefinite" fill="freeze" attributeName="points" dur="500ms" to="110,58.2 147.3,0 192.1,29 141.7,105.1 118.7,139.8 88.8,185.1 46.1,156.5 0,125 23.5,86.6 71.1,116.7"/>
              <animate ref={ref => this.animationToGreen = ref} begin="indefinite" fill="freeze" attributeName="fill" dur="500ms" to="#53B848"></animate>
              <animate ref={ref => this.animationToStar = ref} begin="indefinite" fill="freeze" attributeName="points" dur="500ms" to="97.3,0 127.4,60.9 194.6,70.7 145.9,118.1 157.4,185.1 97.3,153.5 37.2,185.1 48.6,118.1 0,70.7 67.2,60.9"/>
              <animate ref={ref => this.animationToYellow = ref} begin="indefinite" fill="freeze" attributeName="fill" dur="500ms" to="#FFD41D"></animate>
            </polygon>
          </svg>
          <span ref={ref => this.buttonText = ref}>Save</span>
        </button>
      </div>
    );
  }
}

export default App;
