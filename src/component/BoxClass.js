import React, { Component } from "react";

export default class BoxClass extends Component {
     
    constructor() {
        super();
        this.result = "";
      }

    getResult = () => {
    if (
      this.props.title === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result !== ""
    ) { 
        this.result = this.props.result === "win"?"lose":"win";
    } else {
        this.result = this.props.result; 
    }
  }

  render() {
    this.getResult();
    return (
      <div className={`box ${this.props.item && this.result}`}>
        <h2>{this.props.title}</h2>
        <img className="item-img" src={this.props.item && this.props.item.img} alt="" />
        <h1>{this.props.item && this.result}</h1>
      </div>
    );
  }
}