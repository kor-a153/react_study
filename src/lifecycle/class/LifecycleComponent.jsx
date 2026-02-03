import React, { Component } from 'react';

class LifecycleComponent extends Component {

  //자식 필드
  state = {
    number: 0,
    color: null,
  }

handleNumberOnClick = () => {
  this.setState({
    number: this.state.number + 1
  })
}



//ref
  coloRef = null;

  render() {
    return (
      <div>
        <div 
        ref={(el) => this.colorRef = el}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: this.state.color,
          display: 'flex',
          justifyContent: "center",
          alignItems: "center" ,
          color : "#000000"
        }}>
          {/* {자식의 상태값} */}
          <h1>{this.state.number}</h1>
        </div>

      </div>
    );
  }
}

export default LifecycleComponent;