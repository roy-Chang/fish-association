import { Component } from "react";
import "./MemberJoin2.css";
//component
import Join1 from './Join1';
import Join2 from './Join2';
//redux
import { connect } from 'react-redux';



class Forms extends Component {
  render() {
    return (
      <>{this.props.nextStep === false ? <Join1/> : <Join2/>}</>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nextStep: state.memberRegister.nextStep,
  }
}

export default connect(mapStateToProps, null)(Forms);
