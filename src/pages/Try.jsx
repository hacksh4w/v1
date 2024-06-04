import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
    return ( 
        <div className='grid w-full p-1 z-100000 items-center fixed '>
            {/* put fixed for stickey top*/}
            <SlideTabs />
        </div>
    
    )
}
const SlideTabs = () => {
    const [position, setPosition] = useState({
        left : 0,
        width : 0,
        opacity : 1,
    });
/* Framer Motion aanu use cheyyunne */ 
/*which means component ine alla nammal styling cheyyune, we are animating an objetc, 
here the black pill is moving based on our hover on the navbar, hence it need the width it needs tocover (dependant on word)
and also the left offset (distance from extreme left of nav component ) */
    return ( 
        <ul 
        onMouseLeave={() => {
            setPosition((pv) => ({
                ...pv,
                opacity : 0,
            }));
        }}
        className=' mx-auto flex w-fit rounded-full border-2 bg-neutral-100 border-black bg-white p-1'>
            <Tab setPosition = { setPosition }> Home </Tab>
            <Tab setPosition = { setPosition }> Pricing </Tab>
            <Tab setPosition = { setPosition }> Features </Tab>
            <Tab setPosition = { setPosition }> Docs </Tab>
            <Tab setPosition = { setPosition }> Blogs </Tab>
            <Cursor position={ position }/>
        </ul>
    );
};
 
const Tab = ({children, setPosition}) => {
    const ref = useRef(null);
    return ( 
        <li 
        ref = { ref}
        onMouseEnter= {() => {
        if (!ref.current) return;
        
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
            width, 
            opacity : 1,
            left : ref.current.offsetLeft,  //looks at closest relative parent
        })
        }}
        className='relative z-10 block curser-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference 
        md:px-5 md:py-3 md:text-case-base'> 
            {children}
        </li>
    )
};

const Cursor = ({position}) => {
    return  <motion.li 
    animate = { position }
    className="absolute z-0 rounded-full h-7 bg-black md:h-12" /> 
};


export default SlideTabsExample;