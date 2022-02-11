import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
      <button 
        onClick={props.onClick}
        className="square"
      >
        {props.squareValue}
      </button>
    );
}

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      currentPlayer: true,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    this.state.currentPlayer ? squares[i] = "X" : squares[i] = "O";
    this.setState({squares: squares});
    this.state.currentPlayer = !this.state.currentPlayer;
  }

  chekForCurrentPlayer(){
    if(this.state.currentPlayer) return "X"
    else return "O";
  }

  renderSquare(i) {
    return(
      <Square 
        squareValue={this.state.squares[i]}
        onClick={()=> this.handleClick(i)} 
      />
    )
  }

  render() {
    
    const status = 'Next player: ' + this.chekForCurrentPlayer();

    return (
      <div>
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
