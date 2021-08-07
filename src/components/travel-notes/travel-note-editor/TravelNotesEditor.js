import React, { Component, useState,useEffect } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
import CKEditor from "./CKEditor"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {Container,Form,Button} from "react-bootstrap";
import MainFooter from "../../footer/MainFooter";

import "./styles.css"

function TravelNotesEditor(props) {

    
        return (
            <div className="activity-wrapper">
                <nav style={{ height: "65px"}}></nav>
                <Container>
                    <div className="TN-editor-block">
                        <div className="TN-editor-wrapper">
                            <h1 style={{color:"white"}}>發表文章</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="TN-title">
                                    <Form.Label style={{color:"white"}}>文章標題</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="TN-content">
                                    <Form.Label style={{color:"white"}}>文章內容</Form.Label>
                                    <CKEditor />
                                </Form.Group>
                                <Button style={{background:"var(--second-color)",border:"none"}} type="submit">送出文章</Button>
                            </Form>
                        </div>
                    </div>
                </Container>
                <MainFooter />
            </div>
        
    )
}
export default TravelNotesEditor;