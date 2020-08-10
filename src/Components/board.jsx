import React, { Component } from 'react';
import Square from "./square";

class Board extends Component {
    state = {
        sqaures: Array(9).fill(null),
        xIsNext: true
    };

    calculateWinners = () => {
        const squares = this.state.sqaures;

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                console.log(squares[a]);
              return squares[a];
            }
          }
          return null;    
    }

    handleClick = (index) => {
        console.log('You click on sqaure ' + index + ' , and the value is ' + this.state.sqaures[index]);
        if (this.calculateWinners() != null) {
            alert('There\'s a winner already! Click on reset to restart the game');
            return;
        }
        if (this.state.sqaures[index] != null) {
            alert('You cannot click on a sqaure with existed value!');
            return;
        }

        const Sqaures = this.state.sqaures.slice();
        Sqaures[index] = this.state.xIsNext ? 'X' : 'O';
        const XIsNext = !this.state.xIsNext;
        //Determining When to Re-Render in React

        this.setState({
            sqaures : Sqaures,
            xIsNext : XIsNext
        });
      }

    resetBoard = () => {
        const sqaures = Array(9).fill(null);

        this.setState({
            sqaures : sqaures,
            xIsNext : true
        })
    }

    renderSquare(i) {
      return <Square 
      value={this.state.sqaures[i]}
      onSqaureClick = {() => this.handleClick(i)}
      />;
    }
  
    render() {
      let status = 'Status: '
      if (this.calculateWinners() === 'X') status += 'Winner is X';
      else if (this.calculateWinners() === 'O') status += 'Winner is O';
      else status += this.state.xIsNext ? 'Next player: X' : 'Next player: O';
  
      return (
        <div>
          <button 
          onClick={this.resetBoard}
          >
              restart
          </button>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  export default Board;