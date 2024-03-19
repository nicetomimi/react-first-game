import React from "react";

const Box = (props) => {
    console.log("props",props)
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} alt="" />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;

// <img className="item-img" src={props.item && props.item.img} /> : 조건부 랜더링 해주기 "props.item &&" 라는 가드를 넣어줘야 한다.
