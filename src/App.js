import {useState} from "react";
import "./App.css";
import Box from "./component/Box";

//1. 박스 2개 (유저 영역, 컴퓨터 영역), 박스 안에는 영역 표시/이미지/게임 결과
//2. 가위바위보 버튼, 게임 결과
//3. 가위바위보 버튼 클릭하면 유저 영역에 클릭한 아이템이 보이기
//4. 동시에 컴퓨터 영역에는 아이템을 랜덤으로 표시
//5. 결과에 따라 승패 나누기 (게임 결과 표시, 박스 색 바뀌기)

//★동일 박스: 외부 컴포넌트로 만들어서 가져온다.
//★게임 결과: 오브젝트로 만들어준다.
//★버튼 클릭 이벤트 함수: <button onClick={()=>play("scissors")}>가위</button> : "온클릭"으로 "선택매개변수"가진 "함수"를 "함수"안에 만들어준다.
//★UI는 state : 리액트 함수 useState 사용

const choice = {
 rock:{name:"Rock", img:"https://images.khan.co.kr/article/2019/04/04/l_2019040402000241100044321.jpg"},
 scissors:{name:"Scissors", img:"https://cdn.topstarnews.net/news/photo/201809/490323_149761_4921.jpg"},
 paper:{name:"Paper", img:"https://cdn.footballist.co.kr/news/photo/202206/150705_77322_4555.jpg"}
}

function App() {
  const [userSelect, setUserSelect] = useState() //내 영역
  const [comSelect, setComSelect] = useState() //컴퓨터 영역
  const [result, setResult] = useState() //승패 나누기

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let comChoice = randomChoice() //5.밑에서 리턴한 값(아이템 이름)을 받아와짐
    setComSelect(comChoice)
    setResult(judgment(choice[userChoice],comChoice))
  }
 
  const randomChoice=()=>{
    let itemArray = Object.keys(choice) //1.객체에 키값만 뽑아서 배열 만들어주는 함수
    let randomItem = Math.floor(Math.random()*itemArray.length) //2.랜덤하게 인덱스 번호 뽑아주는 함수 (Math.floor:소수점버리기)
    let final = itemArray[randomItem] //3.인덱스 번호에 맞는 아이템 이름으로 반환
    return choice[final] //4.그 이름을 리턴해서 받으면 >> 위 함수에 뿅 들어가서 comChoice로~
  }

  const judgment=(user,com)=>{
    console.log("user", user, "com", com)
    if(user.name === com.name){
      return "tie"
    }
    else if(user.name === "Rock")return com.name === "Scissors"?"win":"lose"
    else if(user.name === "Scissors")return com.name === "Paper"?"win":"lose"
    else if(user.name === "Paper")return com.name === "Rock"?"win":"lose"
  }
  

  return (
    <div>
    <div className="main_area">
      <Box title="YOU" item={userSelect} result={result} />
      <Box title="Computer" item={comSelect} result={result}/>
    </div>
    <div className="main_area">
      <button onClick={()=>play("scissors")}>가위</button>
      <button onClick={()=>play("rock")}>바위</button>
      <button onClick={()=>play("paper")}>보</button>
    </div>
    </div>
  );
}

export default App;
