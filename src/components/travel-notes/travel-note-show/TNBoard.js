import React, { Component, useState,useEffect } from 'react';
import axios from 'axios';

import TNBoardSingle from "./TNBoardSingle"

import "./styles.css"
import { Form,Button } from "react-bootstrap";
import { useParams, withRouter } from 'react-router-dom';

class BoardBlock extends Component {

  state = {
    noteId:"",
    name: "",
    content:"",
  };
  
  componentDidMount() {
    const id = this.props.match.params.noteId;
    this.state.noteId = id;
  }




    onSubmit = (e) => {
      axios
        .post(
          `http://localhost:3000/api/travelNotes/boardUpload/${this.state.noteId}`,
            {
                board_usename:this.state.name,
                board_content:this.state.content,
            }
         
        )
        .then(()=>{
        })
        
        .catch((error) => {
          throw error;
        });
  };


  render() {
    return (
    <>
        <div className="TN-board-block">
            <div className="TN-board-wrapper">
                <h3 style={{fontSize:"24px",fontWeight:"bold"}}>留言板</h3>
                <div>
                    <TNBoardSingle />
                </div>
                <div className="TN-board-editor">
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>留言名稱</Form.Label>
                      <Form.Control type="text"
                                    value={this.state.name}
                                    onChange={e => this.setState({ name: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>留言內容</Form.Label>
                      <Form.Control as="textarea"
                                    rows={2}
                                    value={this.state.content}
                                    onChange={e => this.setState({ content: e.target.value })} />
                    </Form.Group>
                    <Button style={{background:"var(--second-color)",border:"none"}} 
                            type="submit"
                            onClick={this.onSubmit}
                            >送出留言</Button>
                  </Form>
                </div>
            </div>
        </div>
    </>

  )}
}

export default  withRouter(BoardBlock)