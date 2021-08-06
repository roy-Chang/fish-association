import React from "react";

import TNBoardSingle from "./TNBoardSingle"

import "./styles.css"
import { Form,Button } from "react-bootstrap";

function BoardBlock() {
  return (
    <>
        <div className="TN-board-block">
            <div className="TN-board-wrapper">
                <h3 style={{fontSize:"20px"}}>留言板</h3>
                <div>
                    <TNBoardSingle />
                    <TNBoardSingle />
                    <TNBoardSingle />
                </div>
                <div className="TN-board-editor">
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>留言名稱</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>留言內容</Form.Label>
                      <Form.Control as="textarea" rows={2} />
                    </Form.Group>
                    <Button style={{background:"var(--second-color)",border:"none"}} type="submit">送出留言</Button>
                  </Form>
                </div>
            </div>
        </div>
    </>

  );
}

export default BoardBlock;