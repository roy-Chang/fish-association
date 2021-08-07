import React, { Component, useState,useEffect } from 'react';
import { TopRankBlock } from "./styled";
import axios from "axios";
import "./styles.css";
import { Link } from 'react-router-dom';

export default function TopRank() {

    const [notes,setNotes] = useState([])
    useEffect(() => {
        // const token = localStorage.getItem("token");
        axios
          .get("http://localhost:3000/api/travelNotes/top")
          .then((serverResponse) => {
            
            const notesRes = serverResponse.data.notes;
            // console.log(notesRes); 
            setNotes(notesRes)
            console.log(notes);
            
          });
          
      }, []);
    
  return (
    <>
        <TopRankBlock className="TopRankBlock">
        <h1 style={{margin:"30px auto"}}>推薦札記 Top 5</h1>
        <ul>
        
        {notes.map((notes,index) => {
        return(
            <>
            <li>
                <Link to={`/travelNotes/${notes.id}`}>{index+1}. {notes.note_name}</Link>
            </li>
            <hr></hr>
            </>
        )
        }
        )}
            
        </ul>
            
        </TopRankBlock>
    </>
  );
}
