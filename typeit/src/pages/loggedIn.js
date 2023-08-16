import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
    height: 70px;
    cursor:pointer;

`

const Navleft = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Icon = styled.img`
    height: 20px;
    cursor:pointer;
`
const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const NavBar= styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    height: 70px;


`
function loggedIn() {
  return (
    <div>
      <NavBar>


<Navleft>
    <Logo src='icons/typeitLogo.png'/>
    <Icon src='icons/keyboard.svg'/>
    <Icon src='icons/crown-white.png'/>
    <Icon src='icons/info-lg.svg'/>
    <Icon src='icons/gear-fill.svg'/>
    
</Navleft>

<NavRight>
    <Icon src='icons/bell-fill.svg'/>
    <Icon src='icons/person-circle.svg'/>
    <Icon src='icons/box-arrow-right.svg'/>
</NavRight>



</NavBar>
    </div>
  )
}

export default loggedIn
