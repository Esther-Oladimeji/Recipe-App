import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import React from "react";
export default function Search() {
    const [input, setInput] = useState("")
    const navigate = useNavigate();
    
    function handleSubmit(event) {
      event.preventDefault();
      navigate("/searched/" + input)
    }
    
  return (
  
    <Searchbox  onSubmit={handleSubmit}>
    
    <button className="btn-search" onSubmit={handleSubmit} type="submit">
        <FaSearch></FaSearch>
        </button>
        <input 
        onChange = {(e) => setInput(e.target.value)}
        type="text" 
        className="input-search" 
        placeholder="Type to Search..." 
   value = {input}
        />
  </Searchbox>


  )
}

const Searchbox = styled.form`
    width: fit-content;
  height: fit-content;
  position: relative;
  position: fixed;
  top: 1rem;
right: 0;
  margin-bottom: .5rem;
  margin-right: 5rem;
 z-index: 2;
  .btn-search{
    
  }
  .input-search{
  height: 25px;
  width: 1px;
  border-style: none;
  padding: 10px;
  font-size: .8rem;
  letter-spacing: .3px;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  background-color: transparent;
  padding-right: 40px;
  color:black;
}
.input-search::placeholder{
  color:white;
  font-size: 1rem;
  letter-spacing: .3px;
  font-weight: 100;
}
.btn-search{
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 1.6rem;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color:white;
  background-color:transparent;
  pointer-events: painted;  
  font-weight: lighter;
}
.btn-search:hover{
    color: brown;
}
.btn-search:focus ~ .input-search{
  width:10rem;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 8.3rem;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

`