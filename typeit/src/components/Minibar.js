import React, {useState} from 'react';
import styled from 'styled-components';


const MiniBar = styled.div`
  display: flex;
  width: 50%;
  margin: auto;
  background-color: #443c68;
  color: white;
  gap: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 15px;
  font-family: 'Varela Round', sans-serif;
  opacity:0.8
  `;
  
  const StyledSettings = styled.div`
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`

var OPAC = 0;


const CapsDiv= styled.div`

height: 40px;
color: white;
background-color: #9ed072;
word-spacing:5px;
width:max-content;
margin: 40px auto;
padding : 10px;
font-size:30px;
border:2px solid white;
border-radius:20px;
font-family: Lexend Deca;
font-weight:bold;
opacity: ${props => (props.capsOn ? 1 : 0)};
`
function Minibar() {

  const [capsOn, setCapsOn] = useState(false);

  function handleCaps(e) {
    if (e.getModifierState('CapsLock')) {
      setCapsOn(true);
    } else {
      setCapsOn(false);
    }
  }
  return (
    <>
    <MiniBar>
      <StyledSettings>@ Punctuation</StyledSettings>

      <StyledSettings># numbers</StyledSettings>

      <div style={{ height: '30px', width: '2.5px', borderRadius: '2px', backgroundColor: 'white' }}></div>

      <StyledSettings>time</StyledSettings>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span>
          <img src='icons/A2.png' style={{ height: 17 }} alt='icon' />
        </span>
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

    <CapsDiv onKeyDown={handleCaps}>Caps ON</CapsDiv>
    </>
  );
}

export default Minibar;
