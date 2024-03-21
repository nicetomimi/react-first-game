import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
    rock:{name:"Rock", img:"https://images.khan.co.kr/article/2019/04/04/l_2019040402000241100044321.jpg"},
    scissors:{name:"Scissors", img:"https://cdn.topstarnews.net/news/photo/201809/490323_149761_4921.jpg"},
    paper:{name:"Paper", img:"https://cdn.footballist.co.kr/news/photo/202206/150705_77322_4555.jpg"}
   }

export default class AppClass extends Component {

  constructor(){
    super()
    this.state={
        userSelect : null,
        comSelect : null,
        result : ""
    }
  }

  play = (userChoice) => {
    let comChoice = this.randomChoice()
    this.setState({
        userSelect : choice[userChoice],
        comSelect : comChoice,
        result : this.judgment(choice[userChoice],comChoice)
    })
  }

  randomChoice=()=>{
    let itemArray = Object.keys(choice) 
    let randomItem = Math.floor(Math.random()*itemArray.length)
    let final = itemArray[randomItem] 
    return choice[final]
  }

  judgment=(user,com)=>{
    console.log("user", user, "com", com)
    if(user.name === com.name){
      return "tie"
    }
    else if(user.name === "Rock")return com.name === "Scissors"?"win":"lose"
    else if(user.name === "Scissors")return com.name === "Paper"?"win":"lose"
    else if(user.name === "Paper")return com.name === "Rock"?"win":"lose"
  }

  render() {
    return (
      <div>
        <div className="main_area">
          <BoxClass title="YOU" item={this.state.userSelect} result={this.state.result} />
          <BoxClass title="Computer" item={this.state.comSelect} result={this.state.result} />
        </div>
        <div className="main_area">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}
