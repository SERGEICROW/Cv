import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import {render} from "react-dom";
import {renderCar} from "use-sidecar";
import {useEffect} from "react";

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})


const Section = ({ children, delay = 0}) => (

    <StyledDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // @ts-ignore
        transition={{ duration: 0.8, delay }}
    >
        {children}
    </StyledDiv>
)

export default Section

export const SectionDown = ({ children, delay = 0}) => (

    <StyledDiv
        initial={{ y: -100, x: -100, opacity: -1 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        // @ts-ignore
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </StyledDiv>
)

export const SectionRight = ({ children, delay = 0}) => (

    <StyledDiv
        initial={{ y: 0, x: -100, opacity: -1 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        // @ts-ignore
        transition={{ duration: 1, delay }}
    >
        {children}
    </StyledDiv>
)