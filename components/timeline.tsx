import {Container, Heading, Image, Link} from "@chakra-ui/react";
import {useState, useRef} from "react";
import {LogoArrow} from "./logo";
import Section, {FifTitle, FiTitle, FoTitle, SeTitle, SiTitle, ThTitle} from "./section";

import {Bootcamp, Broker, Engineer, Finances, JetBrains, Pambolitos} from "./css";
import {smooth} from "popmotion";

export default function Timeline() {

    const years1 = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    const years2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
    const sep = ["|", "|", "|", "|", "|", "|", "|", "|", "|", "|",]
    const [content, setContent] = useState(null);

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

        <Container
            className="flex flex-col flex-shrink text-white  mt-5 backdrop-blur-sm">
            <Section>

                <div className="grid grid-rows-4 border-1-2 my-3">
                        <JetBrains onClick={() => setContent(BarContent_3)}/>
                    <div className="flex">
                        <Broker onClick={() => setContent(BarContent_1)}/>
                        <Bootcamp onClick={() => setContent(BarContent_5)}/>
                    </div>
                    <Pambolitos onClick={() => setContent(BarContent_2)}/>
                    <div className="flex">
                        <Finances onClick={() => setContent(BarContent_0)}/>
                        <Engineer onClick={() => setContent(BarContent_4)}/>
                    </div>
                </div>

                <div
                    className="grid grid-cols-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-white">
                    {/*{sep.map((i) => {*/}
                    {/*    return (*/}
                    {/*        <div className="flex items-center justify-center">*/}
                    {/*            {i}*/}
                    {/*        </div>*/}
                    {/*    );*/}
                    {/*})}*/}

                </div>
                <hr className="relative bottom-1"/>
                <div className="flex justify-around mb-5 font-bold ">
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

                <div className="h-72 sm:h-52">

                    <div className="mx-7">
                        <Refresh>
                            {content}
                        </Refresh>
                    </div>

                </div>

            </Section>
        </Container>
    )
}

const BarContent_0 = () => {
    return (
        <div className="flex items-center justify-around content-center flex-wrap bg-black rounded-lg bg-opacity-40">
            <div className="mb-0 p-5 flex flex-col">
                <Heading className="text-xl sm:text-2xl text-gray-400">
                    2013 - 2016
                </Heading>
                <Heading className="text-2xl sm:text-4xl text-red-700">
                    UVM
                </Heading>
                <Heading className="text-xl sm:text-2xl">
                    Finances and banking degree
                </Heading>
                <p className="sm:text-xl sm:pl-10 text-white text-justify text-gray-200">
                    <LogoArrow/>
                    Truncated
                </p>
            </div>
        </div>
    )
}
const BarContent_1 = () => {
    return (
        <div className="flex items-center justify-around content-center flex-wrap bg-black rounded-lg bg-opacity-40">
            <div className="mb-0 p-5 flex flex-col">
                <Heading className="text-xl sm:text-2xl text-gray-400">
                    06/2015 - 04/2018
                </Heading>
                <Heading className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    Financial Institutions
                </Heading>
                <Heading className="text-xl sm:text-2xl">
                    Broker/Sells
                </Heading>
                <p className="w-56 sm:w-64 sm:text-xl sm:pl-10 text-white text-justify text-gray-200">
                    <LogoArrow/>
                    Financial instruments and mortgage loans sells & consulting.
                </p>
            </div>

        </div>
    )
}
const BarContent_2 = () => {
    return (
        <div className="flex items-center justify-around content-center flex-wrap bg-black rounded-lg bg-opacity-40">
            <div className="mb-0 p-5 flex flex-col">
                <Heading className="text-xl sm:text-2xl text-gray-400">
                    2018 - 2020
                </Heading>
                <Heading
                    className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
                    Los Pambolitos
                </Heading>
                <Heading className="text-xl sm:text-2xl">
                    Mexican Restaurant
                </Heading>
                <p className="sm:text-xl sm:pl-10 text-white text-justify">
                    <LogoArrow/>
                    Owner and Manager
                </p>
            </div>
            <Image src={'/pambolitos.png'} width={160} height={150} alt="logo" className={"rounded-md"}/>
        </div>
    )
}
const BarContent_3 = () => {
    return (
        <div className="flex items-center justify-around content-center flex-wrap bg-black rounded-lg bg-opacity-40">
            <div className="mb-0 p-5 flex flex-col">
                <FiTitle><Heading className="text-xl sm:text-2xl text-gray-400 my-px">
                    2020 - Present
                </Heading></FiTitle>
                <SeTitle>
                    <Heading
                        className="text-2xl sm:text-4xl bg-gradient-to-r from-purple-800 via-pink-700 to-transparent my-px subpixel-antialiased font-light">
                        Jetbrains
                        <Heading className="text-3xl sm:text-4xl font-bold pl-8">Academy</Heading>
                    </Heading>

                </SeTitle>
                <ThTitle>
                    <div className="flex my-px subpixel-antialiased animate-pulse">
                        <Heading
                            className="sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-pink-700 to-pink-500 pr-2">
                            KOTLIN
                        </Heading>
                        _
                        <Heading
                            className="sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-yellow-400 px-2">
                            PYTHON
                        </Heading>
                        _
                        <Heading
                            className="sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-400 px-2">
                            JS
                        </Heading>
                    </div>
                </ThTitle>
                <FoTitle><p className="w-56 sm:w-64 sm:text-xl sm:pl-10 text-white text-justify my-px">
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
                <FiTitle><Heading className="text-xl sm:text-2xl text-gray-500 ">
                    05/2020 - Present
                </Heading></FiTitle>
                <SeTitle><Heading
                    className="text-2xl sm:text-4xl text-white bg-gradient-to-r from-red-900 via-red-700 to-transparent subpixel-antialiased">
                    UVM
                </Heading></SeTitle>
                <ThTitle><Heading className="text-xl sm:text-2xl text-yellow-400 animate-pulse">
                    Software and network's Engineering
                </Heading></ThTitle>
                <FoTitle><p className="w-56 sm:w-64 sm:text-xl sm:pl-10 text-white text-justify">
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
                <FiTitle><Heading className="text-xl sm:text-2xl text-gray-500">
                    03/2021 - 10/2021
                </Heading></FiTitle>
                <SeTitle>
                    <div className="animate-pulse bg-gradient-to-r from-yellow-800 via-yellow-600 to-transparent">
                        <Image src={'/bedu_white.png'} width={110} height={50} alt="logo"/>
                    </div>
                </SeTitle>
                <ThTitle><Heading
                    className="text-xl sm:text-2xl animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-400 to-blue-600">
                    Python Full Stack Bootcamp
                </Heading></ThTitle>
                <FoTitle><p className="w-56 sm:w-64 sm:text-xl sm:pl-10 text-white text-justify">
                    <LogoArrow/>
                    7 Month web development bootcamp
                </p></FoTitle>
            </div>
            <FifTitle>
                <Image src={'/bedu_insight.png'} width={150} height={140} alt="logo" className="animate-pulse"/>
                <SiTitle>
                    <Image src={'/credly.png'} width={80} height={30} alt="logo" className="animate-pulse"/>
                    <a href={`https://credly.com/users/rodrigo-yanez.b981911e`}
                       className="text-white underline hover:text-blue-500">Badge url</a>
                </SiTitle>
            </FifTitle>


        </div>
    )
}

