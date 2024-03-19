import {useState} from "react";
import "./App.css";
import Box from "./component/Box";

//1. 박스 2개 (내 영역, 컴퓨터 영역), 박스 안에는 영역 표시/이미지/게임 결과
//2. 가위바위보 버튼, 게임 결과
//3. 가위바위보 버튼 클릭하면 내 영역에 클릭한 아이템이 보이기
//4. 동시에 컴퓨터 영역에 아이템 랜덤으로 표시
//5. 결과에 따라 승패 나누기 (게임 결과 표시, 박스 색 바뀌기-지면 빨강, 이기면 초록, 비기면 검정)

//★동일 박스: 외부 컴포넌트로 만들어서 가져온다.
//★게임 결과: 오브젝트로 만들어준다.
//★버튼 클릭 이벤트 함수: <button onClick={()=>play("scissors")}>가위</button> : "온클릭"으로 "선택매개변수"가진 "함수"를 "함수"안에 만들어준다.
//★UI는 state

const choice = {
 rock:{name:"Rock", img:"https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg"},
 scissors:{name:"Scissors", img:"https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png"},
 paper:{name:"Paper", img:"https://jdwb.co.kr/data/item/1558750656_l1"}
}

function App() {
  const [userSelect, setUserSelect] = useState()

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
  }
  return (
    <div>
    <div className="main_area">
      <Box title="YOU" item={userSelect}/>
      {/* <Box title="Computer"/> */}
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
