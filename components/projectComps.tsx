import NextLink from 'next/link'
import {BackArrow} from "./logo";
import {SectionRight} from "./section";

import {Heading, Image} from '@chakra-ui/react'

//SMALL COMPONENTS USED ALONG WEBSITE

export const Title = ({children}) => (
    <div className="">
        <div className="text-green-400 flex items-center cursor-pointer hover:underline">
            <BackArrow/>
            <NextLink href="/experience">
                <Heading className="text-2xl mr-4 ">Projects</Heading>
            </NextLink>
        </div>
        <Heading className="pl-6">
            {children}
        </Heading>
    </div>
)

export const Description = ({children}) => (
    <p className="text-white text-xl text-justify my-3">
        {children}
    </p>
)

export const Details = ({children}) => (
    <SectionRight>
        <div className="flex items-center justify-center pt-1 my-3 mr-8 px-1 text-xl font-mono h-6 w-20 text-white
        border border-yellow-300 rounded-md bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 cursor-help">
            {children}
        </div>
    </SectionRight>
)

export const WorkImage = ({src, alt}) => (
    <Image
        className="rounded-3xl my-2"
        src={src}
        alt={alt}
    />
)

export const GithubImage = () => (
    <Image
        className="rounded-3xl w-12 cursor-pointer
        transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110"
        src={'/images/projectImages/github.png'}
        alt={'github'}
    />
)



