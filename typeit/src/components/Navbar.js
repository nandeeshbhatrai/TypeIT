import React from 'react';
import styled from 'styled-components';


let fills=document.getElementsByClassName('icon');

let fillarr=Array.from(fills);

fillarr.forEach((e)=>{
    let fill=e.getAttribute('fill');
    e.setAttribute(fill,'red');
})
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
    cursor: pointer;

`;


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
export default function Navbar() {
  return (
    <>
        <NavBar>


            <Navleft>
                <Logo src='icons/typeitLogo.png'/>
                <Icon src='icons/keyboard.svg' className='icon'/>
                <Icon src='icons/crown-solid.svg' className='icon'/>
                <Icon src='icons/info-lg.svg'/>
                <Icon src='icons/gear-fill.svg'/>
                
            </Navleft>

            <NavRight>
                <Icon src='icons/bell-fill.svg'/>
                <Icon src='icons/person-circle.svg'/>
            </NavRight>


            
        </NavBar>
    </>
  );
}
