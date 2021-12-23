import {motion} from 'framer-motion'
import {chakra, shouldForwardProp} from '@chakra-ui/react'
import {Transition} from "@headlessui/react";
import {Fragment} from "react";

//HANDLES ALL CONTENT ANIMATION ENTRANCES TAGS

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({children, delay = 0}) => (

    <StyledDiv
        initial={{y: 10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        // @ts-ignore
        transition={{duration: 0.8, delay}}
    >
        {children}
    </StyledDiv>
)

export default Section

//For Nav Menu
export const NavMenus = ({children, delay = 0}) => (

    <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
    >
        {children}
    </Transition>
)

//For Stack Subtitles
export const SectionDown = ({children, delay = 0}) => (

    <StyledDiv
        initial={{y: -100, x: -100, opacity: -1}}
        animate={{y: 0, x: 0, opacity: 1}}
        // @ts-ignore
        transition={{duration: 0.5, delay}}
    >
        {children}
    </StyledDiv>
)
//For Stack descriptions
export const SectionRight = ({children, delay = 0}) => (

    <StyledDiv
        initial={{y: 0, x: -100, opacity: -1}}
        animate={{y: 0, x: 0, opacity: 1}}
        // @ts-ignore
        transition={{duration: 1, delay}}
    >
        {children}
    </StyledDiv>
)
//For Stack titles after clicking
export const SectionLeft = ({children, delay = 0}) => (

    <StyledDiv
        initial={{y: 100, x: 100, opacity: -1}}
        animate={{y: 0, x: 0, opacity: 1}}
        // @ts-ignore
        transition={{duration: 0.3, delay}}
    >
        {children}
    </StyledDiv>
)
//Stack titles Intro section
export const FiTitle = ({children, delay = 0}) => (
    <StyledDiv
        initial={{y: 0, x: 100, opacity: -1}}
        animate={{y: 0, x: 0, opacity: 1}}
        // @ts-ignore
        transition={{duration: 0.5, delay}}
    >
        {children}
    </StyledDiv>
)
export const SeTitle = ({children, delay = 0}) => (
    <StyledDiv
        initial={{y: 0, x: -100, opacity: -1}}
        animate={{y: 0, x: 0, opacity: 1}}
        // @ts-ignore
        transition={{duration: 1, delay}}
    >
        {children}
    </StyledDiv>
)
export const ThTitle = ({children, delay = 0}) => (
    <StyledDiv
        initial={{y: 0, x: 100, opacity: -1}}
        animate={{y: 0, x: 0, opacity: 1}}
        // @ts-ignore
        transition={{duration: 1.5, delay}}
    >
        {children}
    </StyledDiv>
)
export const FoTitle = ({children, delay = 0}) => (
    <StyledDiv
        initial={{y: 0, x: -100, opacity: -1}}
        animate={{y: 0, x: 0, opacity: 1}}
        // @ts-ignore
        transition={{duration: 2, delay}}
    >
        {children}
    </StyledDiv>
)
export const FifTitle = ({children, delay = 0}) => (
    <StyledDiv
        initial={{y: 0, x: 100, opacity: -1}}
        animate={{y: 0, x: 0, opacity: 1}}
        // @ts-ignore
        transition={{duration: 2.5, delay}}
    >
        {children}
    </StyledDiv>
)
export const SiTitle = ({children, delay = 0}) => (
    <StyledDiv
        initial={{y: 0, x: -100, opacity: -1}}
        animate={{y: 0, x: 0, opacity: 1}}
        // @ts-ignore
        transition={{duration: 3, delay}}
    >
        {children}
    </StyledDiv>
)
