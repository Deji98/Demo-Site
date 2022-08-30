import React from 'react';
import { AiFillSignal } from "react-icons/ai";

function Header() {
  return (
    <div className='clear'><AiFillSignal style={ {color: "red"} }/> ClearMix</div>
  )
}

export default Header