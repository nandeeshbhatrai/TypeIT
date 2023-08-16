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

        let arr = ['a' , 'b', 'c', 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' ,'w', 'x' ,'y' , 'z' , ' ' , ',' , '.' , '?' , 'Backspace'];

        if(arr.includes(e.key)){

            if(s1[i]!==e.key && i!==s1.length && e.key !== 'Backspace'){
    
                
                ding.play();
            }else{
                if (e.key === 'Backspace') {
                    e.preventDefault();
                    console.log('hello');
                  }else{
                      console.log(`s[1] i is ${s1[i]} and key is ${e.key}`)
                      i++;
                  }
            }

        }
        


    }
  return (
    <div>
        <p style={{color:'white',textAlign:'center', fontFamily:'Lexend Deca', wordSpacing:14, fontSize:25}}>{s1}</p>
      <Textbox onKeyUp={handleKey}></Textbox>

    </div>
  )
}
