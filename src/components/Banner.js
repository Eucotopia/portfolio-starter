import React from 'react';
import Image from '../assets/avatar.svg'
import {FaGithub, FaYoutube, FaDribble} from 'react-icons/fa'
import {TypeAnimation, typeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from "../variants";

const Banner = () => {
    return <section className={"min-h-[85vh] lg:min-h-[78vh] flex items-center"} id={'home'}>
        <div className="container mx-auto">
            <div className={'flex flex-col gap-y-8 lg:flex-row items-center'}>
                <div className={'flex-1 text-center font-secondary lg:text-left'}>
                    <h1 className={'text-[55px] font-bold leading-[0.8] lg:text-[110px]'}>BEN<span>AIDEN</span></h1>
                    <div
                        className={'mb-5 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'}>
                        <span className={'text-white mr-4'}>I am a </span>
                        <TypeAnimation speed={50} className={"text-accent"} wrapper={'span'} repeat={Infinity}
                                       sequence={['Developer', 2000, 'Designer', 2000, 'Youtuber', 2000]}/>
                    </div>
                    <p className={'mb-8 max-w-lg mx-auto lg:mx-0'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde,
                        numquam. Harum deleniti id sapiente
                    </p>
                    <div className={'flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'}>
                        <button className={'btn btn-lg'}>Contact Me</button>
                        <a href={"#"} className={'text-gradient btn-link'}>My portfolio</a>
                    </div>
                    <div className={'flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'}>
                        <a href={"#"}
                        >
                            <FaYoutube/>
                        </a>
                        <a href={"#"}
                        >
                            <FaYoutube/>
                        </a>
                        <a href={"#"}
                        >
                            <FaYoutube/>
                        </a>
                        <a href={"#"}
                        >
                            <FaYoutube/>
                        </a>
                    </div>
                </div>

                <div className={'hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'}>
                    <img src={Image} align={''}/>
                </div>
            </div>
        </div>
    </section>;
};

export default Banner;
