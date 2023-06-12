import React from 'react'
import styled from 'styled-components'
import GroupIco from "../Assets/GroupIcon.png"

import { BsFacebook, BsInstagram, BsTwitter, BsGooglePlay ,BsYoutube } from "react-icons/bs";

const FooterDiv = styled.div`
    background:rgb(59 105 197);
    .contanerLog {
    display: flex;
    justify-content: center;
    height: 4rem;
    text-align: center;
    align-items: center;
}
.log {
    background: white;
    margin: 1rem;
    border-radius: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4%;
    height: 2.5rem;
}


svg.log {
    font-size: 1.5rem;
}
.topheadingLog {
    text-align: center;
}

.topheadingLog img {
    width: 6rem;
    margin-bottom: -28px;
}
.singIn_heading1 {
    text-transform: uppercase;
    color: #FBB43A;
    text-align: center;
}
.paraHeading {
    color: white;
    text-align: center;
    font-size: x-small;
    text-transform: uppercase;
    margin-bottom: 2rem;
    letter-spacing: 0.33em;
}
.createby {
    padding: 1rem;
    background: #5786e5;
    color: white;
    text-align: center;
    font-weight: bold;
    font-family: inherit;
    text-shadow: 2px 2px 3px black;
    display: flex;
    justify-content: end;
}
 
`





const Footer = () => {
  return (<>

    <FooterDiv>

    <div className='topheadingLog'>
          <img src={GroupIco} alt='' />
          <h1 className='singIn_heading1'>Loyverse</h1>
          <p className='paraHeading'>POint of Sale</p>
        </div>

      <div className='contanerLog'>
        <div className='log'>
          <BsFacebook  />

        </div>
        <div className='log'>
          <BsInstagram />

        </div>
        <div className='log'>

          <BsTwitter />
        </div>
        <div className='log'>
          <BsGooglePlay/>
        </div>
        <div className='log'>
          <BsYoutube/>
        </div>


      </div>

      <div className='createby'>
        <p className='paraCreate_name'>By : Vikas Paras React FrontEnd Developer</p>
      </div>


    </FooterDiv>


  </>)
}

export default Footer