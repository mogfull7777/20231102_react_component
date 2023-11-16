import { useState } from "react";
import "./App.css";
import Test from "./Test";
import Board from "./components/Board";

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNext, setStepNext] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const calculationWinner = (squares) => {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const current = history[stepNext];
  const winner = calculationWinner(current.squares);

  let statue;
  if (winner) {
    statue = "Winner " + winner;
  } else {
    statue = `Next Player : ${xIsNext ? "X" : "O"}`;
  }

  const handleClick = (i) => {
    // 새로운 히스토리 생성
    const newHistory = history.slice(0, stepNext + 1);
    const newCurrent = newHistory[newHistory.length - 1];

    const newSquares = newCurrent.squares.slice();
    // 둘 중에 이긴사람이 있으면 클릭 방지 or 클릭한 곳 반복 클릭 금지.

    if (calculationWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? "X" : "O"; // 조건부 삼항 연산자
    setHistory([...newHistory, { squares: newSquares }]);
    setXIsNext((current) => !current); // 커런트 : 현재의 newSquares
    setStepNext(newHistory.length);
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move} className="buttonCenter">
        {/* 리스트엔 무적권 key값을 입력해야함. */}
        {/* 번호 나열형 으로 잘 사용하진 않는다. 키 값을. */}
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  // 짝수 일때 ture 값이 나오도록 => 나머지 연산자 활용
  const jumpTo = (step) => {
    setStepNext(step);
    setXIsNext(step % 2 === 0);
    console.log(step);
  };

  return (
    <div className="game">
      {/* <Test aprops="A" /> */}
      <div className="gameBoard">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
          statue={statue}
        />
      </div>
      <div className="gameInfo">
        <div>gameInfo</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// class컴포넌트는 옛날에 사용. (옛날 것 유지보수를 위해 알아야하긴한다.)
// JSX : div박스가 병렬 구조로 이뤄져야한다.
// export : 딴데서 부품으로 사용해도 됨.
// rcc -> enter : 리액트 클래스형 기본틀 (이번수업 기본틀)
// fcc -> enter : 리액트 함수형 기본틀

// prop : 프로펄티의 줄임말. 부모컴포넌트로 부터 자식컴포넌트한테 정보 전달. (읽기 전용) 자식에게 변화 줄려면 부모에서 수정을 해야함.
// <틱택토 만들기>
// 클릭한 부분을 기억하고 X 표시 넣기.

// props : 부모 컴포넌트 -O-> 자식 컴포넌트에게 테이터 등을 물려줌.
//         자녀 컴포넌트 prop 변하지 않음.(자녀 컴포넌트는 읽기 전용)
//         그래서 변경은 부모 컴포넌트에서 가능.

// boaed 에서 square

// state : 부모 컴포넌트 -X-> 자식 컴포넌트
//         해당 컴포넌트 내부에서 테이터 전달 : state
//         state는 변경이 가능.
//         state는 변화가 있으면 re-render 된다.
//
// *** 안보고 칠 수 있도록 연습.

export default App;

// 숙제
// 1. 깃허브 올리고 url 공유
// 2. 버튼 두개로 카운터 만들어서 깃허브 올리기
