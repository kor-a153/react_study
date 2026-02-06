import React, { Component } from 'react';
import LifeCycleComponent from './LifecycleComponent';


const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

class LifeCycleContainer extends Component {

  // 부모의 초기 컬러는 black
  state = {
    color: "#000000"
  }

  handleColorOnClick = () => {
    this.setState({
      color: getRandomColor()
    })
    console.log("부모 컬러", this.state.color)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleColorOnClick}>색상 변경</button>
        <LifeCycleComponent color={this.state.color} />
      </div>
    );
  }
}

export default LifeCycleContainer;