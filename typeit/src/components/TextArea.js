import React from 'react'
import styled from 'styled-components'

const Textbox=styled.textarea`

width:80%;
margin-top:50px;
display: flex;
margin: 50px auto;
height:400px;
font-size:30px;
resize:none;
// border: none;
outline:none;
background:transparent;
color:white;



`

let s="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex iure cumque rem magni porro, laborum fugiat at molestias accusantium? Qui doloremque dicta voluptatem dignissimos veritatis, dolores error reiciendis in laborum, accusantium nostrum saepe minus suscipit doloribus nisi obcaecati expedita modi eos harum vitae. Mollitia, consequuntur deleniti quia debitis molestiae nemo."

let s1=s.toLowerCase();

let i=0;
let ding=new Audio("ding2.mp3");


export default function TextArea() {
    function handleKey(e){


        
        let arr = ['a' , 'b', 'c', 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' ,'w', 'x' ,'y' , 'z' , ' ' , ',' , '.' , '?'];

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
  
  
          }


        }
        

        


    }
  return (
    <div>
        <p style={{color:'white',textAlign:'center', fontFamily:'Lexend Deca', wordSpacing:14, fontSize:25}}>{s1}</p>
      <Textbox onKeyDown={handleKey}></Textbox>

    </div>
  )
}
