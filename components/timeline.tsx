import {useState} from "react";
import {LogoArrow} from "./logo";
import Section, {FifTitle, FiTitle, FoTitle, SeTitle, SiTitle, ThTitle} from "./section";
import {Bootcamp, Engineer, JetBrains, Softtek} from "./css";

import {Container, Heading, Image} from "@chakra-ui/react";

//Timeline main components
export default function Timeline() {
    //Timeline years
    const years1 = [2021, 2022, 2023, 2024]
    const years2 = [21, 22, 23, 24]
    //Set especific timeline content when clicked hook
    const [content, setContent] = useState(null);

    //Recreates animation any time timeline content is generated
    const Refresh = ({children}) => {
        const active = content != setContent
        if (active) {
            return (
                <Section>
                    <div>
                        {children}
                    </div>
                </Section>
            )
        }
    }
    return (
        <Container className="flex flex-col flex-shrink text-white backdrop-blur-sm">
            <Section>
                {/*BARS*/}
                <a
                    href={"#timeline_content"}
                    className="grid grid-rows-3 border-1-2 my-3">
                    <JetBrains onClick={() => setContent(BarContent_3)}/>
                    <div className="flex">
                        <Bootcamp onClick={() => setContent(BarContent_5)}/>
                        <Softtek onClick={() => setContent(BarContent_6)}/>
                    </div>
                    <div className="flex">
                        <Engineer onClick={() => setContent(BarContent_4)}/>
                    </div>
                </a>
                {/*Vertical bars on timeline*/}
                <div
                    className="grid grid-cols-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white">
                    {[...Array(4)].map((id, i) =>
                        <div key={i} className="flex items-center justify-center">
                            |
                        </div>)}
                </div>
                <hr className="relative bottom-1"/>
                {/*Responsive years*/}
                <div className="flex justify-around mb-2 font-bold text-sm">
                    {years2.map((i) => {
                        return (
                            <div key={i.toString()} className="animate-pulse block sm:hidden ">{i}</div>
                        );
                    })}
                    {years1.map((i) => {
                        return (
                            <div key={i.toString()} className="animate-pulse hidden sm:block ">{i}</div>
                        );
                    })}
                </div>
                <div className="h-56 sm:h-e">
                    <div className="mx-7" id={"timeline_content"}>
                        <Refresh>
                            {content}
                        </Refresh>
                    </div>
                </div>
            </Section>
        </Container>
    )
}

const BarContent_3 = () => {
    return (
        <div className="flex items-center justify-around content-center flex-wrap bg-black rounded-lg bg-opacity-40">
            <div className="mb-0 p-5 flex flex-col">
                <FiTitle><Heading className="text-xl text-gray-400 my-px">
                    2020 - Present
                </Heading></FiTitle>
                <SeTitle>
                    <Heading
                        className="text-2xl sm:text-3xl bg-gradient-to-r from-purple-800 via-pink-700 to-transparent my-px subpixel-antialiased font-light sm:leading-7">
                        Jetbrains
                        <Heading className="text-3xl sm:text-3xl font-bold pl-8">Academy</Heading>
                    </Heading>
                </SeTitle>
                <ThTitle>
                    <div className="flex my-px subpixel-antialiased animate-pulse">
                        <Heading
                            className="sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-600 px-2">
                            JAVA
                        </Heading>
                        _
                        <Heading
                            className="sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-yellow-400 px-2">
                            PYTHON
                        </Heading>
                        _
                        <Heading
                            className="sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-pink-700 to-pink-500 pr-2">
                            KOTLIN
                        </Heading>
                        _
                        <Heading
                            className="sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-400 px-2">
                            JS
                        </Heading>
                    </div>
                </ThTitle>
                <FoTitle><p className="w-56 sm:w-64 sm:text-lg sm:pl-5 text-white my-px sm:leading-5">
                    <LogoArrow/>
                    Online Courses based on subject progress and technical questions
                </p></FoTitle>
            </div>
            <FifTitle><Image src={'/jb.png'} width={150} height={140} alt="logo" className="animate-pulse"/></FifTitle>
        </div>
    )
}
const BarContent_4 = () => {
    return (
        <div className="flex items-center justify-around content-center flex-wrap bg-black rounded-lg bg-opacity-40">
            <div className="mb-0 p-5 flex flex-col">
                <FiTitle><Heading className="text-xl text-gray-500 ">
                    05/2020 - Present
                </Heading></FiTitle>
                <SeTitle><Heading
                    className="text-2xl sm:text-3xl text-white bg-gradient-to-r from-red-900 via-red-700 to-transparent subpixel-antialiased">
                    UVM
                </Heading></SeTitle>
                <ThTitle><Heading className="text-xl text-yellow-400 animate-pulse">
                    Software and network's Engineering
                </Heading></ThTitle>
                <FoTitle><p className="w-56 sm:w-64 sm:text-lg sm:pl-5 text-white ">
                    <LogoArrow/>
                    In progress, expected to be concluded by the end of 2022
                </p></FoTitle>
            </div>
            <FifTitle>
                <Image src={'/uvm.png'} width={150} height={140} alt="logo" className="animate-pulse"/>
            </FifTitle>
        </div>
    )
}
const BarContent_5 = () => {
    return (
        <div className="flex items-center justify-around content-center flex-wrap bg-black rounded-lg bg-opacity-40">
            <div className="mb-0 p-5 flex flex-col">
                <FiTitle><Heading className="text-xl text-gray-500">
                    03/2021 - 10/2021
                </Heading></FiTitle>
                <SeTitle>
                    <div className="animate-pulse bg-gradient-to-r from-yellow-800 via-yellow-600 to-transparent">
                        <Image src={'/bedu_white.png'} width={110} height={40} alt="logo"/>
                    </div>
                </SeTitle>
                <ThTitle><Heading
                    className="text-xl animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-400 to-blue-600">
                    Python Full Stack Bootcamp
                </Heading></ThTitle>
                <FoTitle><p className="w-56 sm:w-64 sm:text-lg sm:pl-5 text-white">
                    <LogoArrow/>
                    7 Month web development bootcamp
                </p></FoTitle>
            </div>
            <FifTitle>
                <Image src={'/bedu_insight.png'} width={150} height={140} alt="logo" className="animate-pulse"/>
                <SiTitle>
                    <Image src={'/credly.png'} width={80} height={30} alt="logo" className="animate-pulse"/>
                    <a href={`https://credly.com/users/rodrigo-yanez.b981911e`}
                       target={"_blank"}
                       className="text-white underline hover:text-blue-500">Badge url</a>
                </SiTitle>
            </FifTitle>


        </div>
    )
}
const BarContent_6 = () => {
    return (
        <div className="flex items-center justify-around content-center flex-wrap bg-black rounded-lg bg-opacity-40">
            <div className="mb-0 p-5 flex flex-col">
                <FiTitle><Heading className="text-xl text-gray-500 ">
                    03/2022 - Present
                </Heading></FiTitle>
                <SeTitle><Heading
                    className="text-2xl sm:text-3xl text-white bg-gradient-to-r from-blue-700 via-green-600 to-transparent subpixel-antialiased px-2">
                    SOFTTEK
                </Heading></SeTitle>
                <ThTitle><Heading
                    className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 animate-pulse">
                    Tech Company
                </Heading></ThTitle>
                <FoTitle><p className="w-56 sm:w-64 sm:text-lg sm:pl-5 text-white ">
                    <LogoArrow/>
                    Backend software developer and technical leader for Citigroup account
                </p></FoTitle>
                <FoTitle><p className={"px-10 animate-pulse hover:cursor-pointer hover:text-yellow-400 text-xl"}><LogoArrow/>Details</p></FoTitle>
            </div>
            <FifTitle>
                <a href={"https://www.softtek.com/"}>
                    <Image src={'/softtek.png'} width={150} height={140} alt="logo" className="animate-pulse"/>
                </a>

            </FifTitle>
        </div>
    )
}

