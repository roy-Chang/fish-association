import React from "react";
import { useSpring, animated as a } from "react-spring";

import "./styled.css";

const Conversation = () => {
  const [greetingStatus, displayGreeting] = React.useState(false);
  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    marginTop: greetingStatus ? 0 : -500
  });
  return (
    <div className="conversationWrapper">
      <div className="button-container">
        <button onClick={() => displayGreeting(a => !a)} className="button">
          Click Here
        </button>
      </div>
      {!greetingStatus ? (
        <div className="Intro">Click button below</div>
      ) : (
        <a.div className="box" style={contentProps}>
          <h1>嗨 ! 今天真是適合出遊的日子...</h1>
        </a.div>
      )}
    </div>
  );
};

export default Conversation;