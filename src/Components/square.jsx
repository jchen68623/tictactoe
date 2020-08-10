import React, { Component } from 'react';

class Square extends Component {
    render() {
      return (
        <button className="sqaure"
          onClick={this.props.onSqaureClick}
        >
          {this.props.value}
        </button>
      );
    }
  }

  export default Square;