import React, {useState} from "react";
import Box from './box'

function Board(){

    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = index => {
        const squares = boardSquares;

        if(calculateWinner() || squares[index]){
            return;
        }

        squares[index] = isXNext ? "X" : "O";

        setBoardSquares(squares);
        setIsXNext(!isXNext);


    }

    const renderSquare = (index) => {
        return <Box value={boardSquares[index]} onClick={() => handleClick(index)} />
    }
    
    let status;

    if(calculateWinner()){
        console.log("winner")
        status = "Winner is: " + calculateWinner();
    }else{
        status = "Next Player: ";
        status += isXNext ? "X" : 'O';
    }
    

    function calculateWinner(){
        console.log("inside function");
        const winningStates = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let i = 0; i < winningStates.length; i++){
            const [a, b, c] = winningStates[i];
            if(boardSquares[a] && boardSquares[a] === boardSquares[b] && boardSquares[a] === boardSquares[c]){
                return boardSquares[a];
            }
        }
        return null;
    }

    return(
        <div className="board">
            
            <h1 className="text-center">TIC-TAC-TOE</h1>

            <div className="status text-center">{status}</div>

            <div className="row justify-content-center"> 
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="row justify-content-center"> 
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)} 
            </div>
            <div className="row justify-content-center">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>



        </div>
    )
}

export default Board;