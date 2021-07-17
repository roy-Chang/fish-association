import React from "react";
import { useSpring, animated as a } from "react-spring";
import { BiSkipNext } from 'react-icons/bi';//BiSkipNext
import "./styled.css";

const Conversation = () => {
    
  const [stateNum, setStateNum] = React.useState(1);
  const [msg, setMsg] = React.useState("嗨 ! 今天真是適合出遊的日子...嗯嗯...");
  const handleChange = () => {
    stateNum === 4 ? setStateNum(1) : setStateNum(stateNum + 1)
    if(stateNum === 1) {
        setMsg('想吃嗎...釣魚中...海釣真有趣 ! 正濱漁港去看看吧...')
    }
    if(stateNum === 2) {
        setMsg('嗚嗚...龍洞好漂亮')
    }
    if(stateNum === 3) {
        setMsg('我正在水裡游...')
    }
    if(stateNum === 4) {
        setMsg('嗨 ! 今天真是適合出遊的日子...嗯嗯...')
    }
  }
 
  


  //----------------
  const [greetingStatus, displayGreeting] = React.useState(false);
  
  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    marginTop: greetingStatus ? 0 : -500
  });
  return (
    <div className="conversationWrapper">
      {greetingStatus ? '' : 
      <div className="button-container">
        <button onClick={() => displayGreeting(a => !a)} className="button">
          開始故事
        </button>
      </div>}
      {!greetingStatus ? (
        <div className="Intro">這是一個很遙遠的故事...那天...<br/>更深夜靜的夜晚...發生了...</div>
      ) : (
        <a.div className="box" style={contentProps}>
          <h1>
             {msg}
          </h1>
          <BiSkipNext onClick={handleChange} style={{fontSize: '2vw'}}/>
        </a.div>
      )}
      {console.log(greetingStatus)}
      {console.log(stateNum)}
    </div>
    
  );
};



export default Conversation;