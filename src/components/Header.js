import React from 'react';
import Logo from "../assets/logo.svg"
const Header = () => {
    return <header className={'bg-pink-300 py-8'}>
        <div className="container mx-auto">
            <div className={'flex flex-row justify-between items-center'}>
                <a href={"#"}>
                    <img src={Logo} align={''}/>
                </a>
                <button className={'btn btn-sm'}>
                    Work with me
                </button>
            </div>
        </div>
    </header>;
};

export default Header;
