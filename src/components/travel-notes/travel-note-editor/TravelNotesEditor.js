import React, { Component, useState,useEffect } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {Container,Form,Button} from "react-bootstrap";
import MainFooter from "../../footer/MainFooter";

import "./styles.css"

export default class TravelNotesEditor extends Component {
    
    state = {
        title: "",
        content:"",
      };

      
      onSubmit = () => {
        console.log(this.state.title);
        console.log(this.state.content);

        const token = localStorage.getItem("token");
        let header = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          };
         
          axios
            .post(
              "http://localhost:3000/api/travelNotes/upload",
                {
                    note_name:this.state.title,
                    note_content:this.state.content,
                },
                {
                    headers:header,
                }
             
            )
            .then(()=>{
                this.props.history.push("/travelNotes")
            })
            
            .catch((error) => {
              throw error;
            });
      };
   

    render() {
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
                                    <Form.Control   type="text"
                                                    name="title"
                                                    value={this.state.title}
                                                    onChange={e => this.setState({ title: e.target.value })}
                                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="TN-content">
                                    <Form.Label style={{color:"white"}}>文章內容</Form.Label>
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        // data="<p>Hello from CKEditor 5!</p>"
                                        onReady={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            // console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            this.setState({content: editor.getData() });
                                            // console.log( { event, editor, CKdata } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            // console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            // console.log( 'Focus.', editor );
                                        } }
                                    />
                                </Form.Group>
                                <Button style={{background:"var(--second-color)",border:"none"}} 
                                        onClick={this.onSubmit}
                                        >
                                        送出文章
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Container>
                <MainFooter />
            </div>
        
    )
    }

        
}