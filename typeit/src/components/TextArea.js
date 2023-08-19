import React from 'react'
import styled from 'styled-components'


let s="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex iure cumque rem magni porro, laborum fugiat at molestias accusantium? Qui doloremque dicta voluptatem dignissimos veritatis, dolores error reiciendis in laborum, accusantium nostrum saepe minus suscipit doloribus nisi obcaecati expedita modi eos harum vitae. Mollitia, consequuntur deleniti quia debitis molestiae nemo."

let s1=s.toLowerCase();

let i=0;
let ding=new Audio("ding2.mp3");


const Div = styled.div`
display:flex;
position: relative;
height:200px;
// border:2px solid red;
width:100vw;
`
const Textbox=styled.textarea`
text-align:left;
font-family:Lexend Deca ;
position : absolute;
word-spacing:14px;
line-height:1.5;
z-index: 5;
width:inherit;
display: flex;
height:inherit;
font-size:25px;
resize:none;
outline:none;
background:transparent;
color:white;
font-weight:bold;
border: none;
`

const P = styled.p`
  margin:0;
  width:inherit;
  height:inherit;
  // border:2px solid white;
  color:#d8b95f;
  text-align:left;
  font-family:Lexend Deca ;
  word-spacing:14px;
  font-size:25px;
  line-height:1.5;`


export default function TextArea() {
    function handleKey(e){


        
        let arr = ['a' , 'b', 'c', 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' ,'w', 'x' ,'y' , 'z' , ' ' , ',' , '.'];

        let notAlwd=['Backspace', 'Enter', 'Control', 'Alt', 'Shift' ]


        if( notAlwd.includes(e.key) || e.shiftKey || e.getModifierState('CapsLock')){
          e.preventDefault();
        }

        else{

          console.log(e.key);

          if(arr.includes(e.key)){
  
  
            if(e.key!==s1[i] && i!==s.length){
              ding.play();
              e.preventDefault();
            }
            else {
              i++;
            }
  
  
          }else{
            e.preventDefault();
          }


        }

    }

  return (
    <Div>
        <P>{s1}</P>
        <Textbox onKeyDown={handleKey}></Textbox>

    </Div>
  )

  }
