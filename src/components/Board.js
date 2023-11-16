import React, { Component, useState } from "react";
import Square from "./Square";
import "./board.css";

const Board = ({ squares, onClick, statue }) => {
  // const [squares, setSquares] = useState(Array(9).fill(null)); // App.js로 이동
  // const [xIsNext, setXIsNext] = useState(true); // App.js로 이동

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //   };
  // } // ==> 이전 state 적용 방식. (class형)

  // const handleClick = (i) => {
  //   const newSquares = squares.slice();
  //   // 둘 중에 이긴사람이 있으면 클릭 방지 or 클릭한 곳 반복 클릭 금지.

  //   if (calculationWinner(squares) || squares[i]) {
  //     return;
  //   }

  //   newSquares[i] = xIsNext ? "X" : "O"; // 조건부 삼항 연산자
  //   setSquares(newSquares);
  //   setXIsNext((current) => !current); // 커런트 : 현재의 newSquares
  // }; // App.js로 이동

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  // 승리조건

  // const calculationWinner = (i) => {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (
  //       squares[a] &&
  //       squares[a] === squares[b] &&
  //       squares[a] === squares[c]
  //     ) {
  //       return squares[a];
  //     }
  //   }
  // }; // App.js로 이동

  // const winner = calculationWinner(squares); // App.js로 이동

  // status 에 winner를 할당해서 승자 표시

  // let statue;
  // if (winner) {
  //   statue = "Winner " + winner;
  // } else {
  //   statue = `Next Player : ${xIsNext ? "X" : "O"}`;
  // } // App.js로 이동

  return (
    <>
      <div className="boardTotal">
        <div className="boardLow">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="boardLow">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="boardLow">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="statue">{statue}</div>
    </>
  );
};

export default Board;

// 함수형 바꿔보기.
// 1. 이긴 경우의 수 찾아보기.
// 2. 이긴 것 텍스트 표현.
// 3. 게임이 끝나면 더이상 클릭이 안되게.

// 전개연산자, map()

// 20231116
// ㅁ 전개연산자 : [...history]
// - 특정 개체 또는 배열값을 다른객체, 배열로 복제해서 옮길 때 사용하는 연산자.

// 배열 조합 가능
// 객체 조합 가능
// 기존배열 보존 역할

// 1. 베열 조합 가능
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2]; // result : [1, 2, 3, 4, 5, 6];

// 2. 객체 조합 가능

// 3. 기존 배열을 보존할 때 사용 가능
// 전개 연산자 사용 X -> 메소드로 기존배열에 변화 -> 원본배열에 변화 반영
// 전개 연산자 사용 O -> 메소드로 기존배열에 변화 -> 원본배열 유지

// ㅁ map() : 배열 내의 있는 리스트 나열 메소드
// - 배열 내의 모든 요소 각각의 대해 주어진 함수를 호출한 결과를 모아서
// 새로운 배열을 반환해줌.

// - 형태 : array.map(callbackFunction(배열 인덱스도 가능.), [thisArg])
