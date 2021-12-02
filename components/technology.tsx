import {Heading} from "@chakra-ui/react";
import {StackArrow} from "./logo";
import Section from "./section";

export const StackTitle = ({children}) => {
    return (
        <Section>
            <Heading className="flex items-center min-w-min min-h-min justify-start text-3xl text-green-400 ">
                {children}
            </Heading>
        </Section>
    )
}
export const StackSubcontainer = ({children, ...props}) => {
    return (
        <p className="pl-5 text-white text-2xl flex my-1" {...props}>
            <StackArrow/>
            {children}
        </p>
    )
}
export const StackSubtitle = ({children}) => {
    return (
        <div className="ml-3">
            {children}
        </div>
    )
}
export const StackDescription = ({children, ...props}) => {
    return (
        <div>
            <div className="ml-16 text-white text-xl max-w-2xl" {...props}>
                <StackArrow/>
                {children}
            </div>
        </div>
    )
}

