import React, { Component } from "react";
import "./square.css";

const Square = ({ onClick, value }) => {
  // 위는 하나의 states.
  // constructor : 생성자 => 일시적인 객체를 저장했다가 불러올 수 있게 하는 요소.
  // super은 자바스크립트에서도 쓰임. 자식 클래스내에서 부모 클래스 호출 할 때 쓰임. this 이전에 사용이 되어야 함 (super 먼저).

  return (
    <button
      className="square"
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
};

export default Square;

// export : 딴데서 부품으로 사용해도 됨.
// rcc : 리액트 클래스형 기본틀
// fcc : 리액트 함수형 기본틀
