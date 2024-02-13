import React from 'react';
import {BiHomeAlt, BiLink, BiUser} from "react-icons/bi";
import {Link} from "react-scroll"
import {BsBriefcase, BsChatSquareText, BsClipboardData} from "react-icons/bs";

const Nav = () => {
  return <nav className={'fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'}>
    <div className="container mx-auto">
      <div className={'w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'}>
        <Link to={'home'} className={'cursor-pointer w-[60px] h-[60px] flex items-center'}>
          <BiHomeAlt/>
        </Link>
        <Link to={'about'} className={'cursor-pointer w-[60px] h-[60px] flex items-center'}>
          <BiUser/>
        </Link>
        <Link to="services" className={'cursor-pointer w-[60px] h-[60px] flex items-center'}>
          <BsClipboardData/>
        </Link>
        <Link to="work" className={'cursor-pointer w-[60px] h-[60px] flex items-center'}>
          <BsBriefcase/>
        </Link>
        <Link to="contact" className={'cursor-pointer w-[60px] h-[60px] flex items-center'}>
          <BsChatSquareText/>
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
