import React, {useState} from 'react';
import styled from 'styled-components';

const MiniBar = styled.div`
  display: flex;
  width: 50%;
  margin: auto;
  background-color: #232429;
  color: white;
  gap: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 15px;
  font-family: 'Varela Round', sans-serif;
  `
  
  const StyledSettings = styled.div`
  cursor: pointer;
  color: #d8b95f;
  &:hover {
    color: white;
  }
`

const CapsDiv= styled.div`
display:flex;
align-items:center;
height: 20px;
background-color: #9ed072;
word-spacing:-4px;
width:max-content;
margin: 40px auto;
padding : 13px 20px;
font-size:20px;
border-radius:10px;
font-family: Roboto, monospace;

`
function Minibar() {

  const [capsOn, setCapsOn] = useState(false);
  document.addEventListener('keydown',(e)=>{

    if(e.getModifierState('CapsLock')){
      setCapsOn(true);
    }
    else{
      setCapsOn(false);
  
    }
    
  })
  return (
    <>
    <MiniBar>
      <StyledSettings>@ Punctuation</StyledSettings>

      <StyledSettings># numbers</StyledSettings>

      <div style={{ height: '30px', width: '2.5px', borderRadius: '2px', backgroundColor: 'white' }}></div>

      <StyledSettings>time</StyledSettings>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         
        <pre>
          <StyledSettings>Words</StyledSettings>
        </pre>
      </div>

      <StyledSettings>quote</StyledSettings>
      
      <div style={{ height: '30px', width: '2.5px', borderRadius: '2px', backgroundColor: 'white' }}></div>
      
      <StyledSettings className='timer'>15</StyledSettings>
      
      <StyledSettings className='timer'>30</StyledSettings>
      
      <StyledSettings className='timer'>60</StyledSettings>
      
      <StyledSettings className='timer'>120</StyledSettings>
      
    </MiniBar>

    <CapsDiv style={capsOn ? {opacity:1}:{opacity:0}}> <span style={{height:'15px', width:'15px', display:'flex', alignItems:'center', marginRight:'10px'}}><img src='icons/lock-solid.svg'/></span>Caps Lock</CapsDiv>
    </>
  );
}

export default Minibar;
