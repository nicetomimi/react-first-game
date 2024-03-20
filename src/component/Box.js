import React from "react";

const Box = (props) => {
  //컴퓨터 입장의 결과 >> 유저 입장에서 세팅된 결과의 값과 반대로 써준다. 를 표현하면 된다.
  let result
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) { 
    result = props.result === "win"?"lose":"win";
  } else {
    result = props.result; 
  }

  return (
    <div className={`box ${props.item && result}`}>
      <h2>{props.title}</h2>
      <img className="item-img" src={props.item && props.item.img} alt="" />
      <h1>{props.item && result}</h1>
    </div>
  );
};

export default Box;

// <img className="item-img" src={props.item && props.item.img} /> : 조건부 랜더링 해주기 "props.item &&" 라는 가드를 넣어줘야 한다.
// props.item &&  >> 이걸 조건에 같이 넣어줘야 처음부터 결과가 안나오고 실행 될때 나타나게 해준다.