import React, { Component } from "react";
import styled from "@emotion/styled";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarStyle = styled.div`
  padding: 40px;
  width: 50%;
  background: #efead2;
  color: #1d3557;
  border-radius: 20px 0 0 20px;
`;

class Calendardate extends Component {
  constructor(props) {
    super(props);
    this.state = { value: new Date() };
  }
  render() {
    return (
      <>
        <CalendarStyle>
          <Calendar value={this.state.value} style={{ width: "550" }} />
        </CalendarStyle>
      </>
    );
  }
}
export default Calendardate;
