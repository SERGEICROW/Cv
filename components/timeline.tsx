import {Container, Heading, Image} from "@chakra-ui/react";
import {useState} from "react";
import {LogoArrow} from "./logo";
import Section, {FifTitle, FiTitle, FoTitle, SeTitle, SiTitle, ThTitle} from "./section";

import {Bootcamp, Broker, Engineer, Finances, JetBrains, Pambolitos} from "./css";

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
                    {children}
                </Section>
            )
        }
    }

    return (

        <Container
            className="flex flex-col flex-shrink text-white font-bold mt-5 backdrop-blur-sm">
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

                <div className="grid grid-cols-10">
                    {sep.map((i) => {
                        return (
                            <div className="flex items-center justify-center">
                                {i}
                            </div>
                        );
                    })}

                </div>
                <hr className="relative bottom-1"/>
                <div className="flex justify-around mb-5">
                    {years2.map((i) => {
                        return (
                            <div className="animate-pulse">{i}</div>
                        );
                    })}
                </div>

                <div className="h-52">

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
                <Heading className="text-gray-400 text-2xl">
                    2013 - 2016
                </Heading>
                <Heading className="text-red-700 text-4xl">
                    UVM
                </Heading>
                <Heading className="text-2xl">
                    Finances and banking degree
                </Heading>
                <p className="pl-10 text-white text-justify text-xl text-gray-200">
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
                <Heading className="text-gray-400 text-2xl">
                    06/2015 - 04/2018
                </Heading>
                <Heading className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    Financial Institutions
                </Heading>
                <Heading className="text-2xl">
                    Broker/Sells
                </Heading>
                <p className="pl-10 text-white text-justify text-xl text-gray-200">
                    <LogoArrow/>
                    Financial instruments<br/> and mortgage loans sells
                </p>
            </div>

        </div>
    )
}
const BarContent_2 = () => {
    return (
        <div className="flex items-center justify-around content-center flex-wrap bg-black rounded-lg bg-opacity-40">
            <div className="mb-0 p-5 flex flex-col">
                <Heading className="text-gray-400 text-2xl">
                    2018 - 2020
                </Heading>
                <Heading
                    className="text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
                    Los Pambolitos
                </Heading>
                <Heading className="text-2xl">
                    Mexican Restaurant
                </Heading>
                <p className="pl-10 text-white text-justify text-xl">
                    <LogoArrow/>
                    Owner and Manager
                </p>
            </div>
        </div>
    )
}
const BarContent_3 = () => {
    return (
        <div className="flex items-center justify-around content-center flex-wrap bg-black rounded-lg bg-opacity-40">
            <div className="mb-0 p-5 flex flex-col">
                <FiTitle><Heading className="text-gray-400 text-2xl my-px">
                    2020 - Present
                </Heading></FiTitle>
                <SeTitle><Heading
                    className="text-4xl bg-gradient-to-r from-black via-purple-800 to-pink-700 my-px subpixel-antialiased">
                    Jetbrains Academy
                </Heading></SeTitle>
                <ThTitle>
                    <div className="flex my-px subpixel-antialiased animate-pulse">
                        <Heading
                            className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-pink-700 to-pink-500">
                            KOTLIN
                        </Heading>
                        _
                        <Heading
                            className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-yellow-400">
                            PYTHON
                        </Heading>
                        _
                        <Heading
                            className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-400">
                            JS
                        </Heading>
                    </div>
                </ThTitle>
                <FoTitle><p className="pl-10 text-white text-justify text-xl my-px">
                    <LogoArrow/>
                    Online Courses
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
                <FiTitle><Heading className="text-gray-500 text-2xl">
                    05/2020 - Present
                </Heading></FiTitle>
                <SeTitle><Heading
                    className="text-4xl text-white bg-gradient-to-r from-red-900 via-red-700 to-transparent subpixel-antialiased">
                    UVM
                </Heading></SeTitle>
                <ThTitle><Heading className="text-2xl text-yellow-400 animate-pulse">
                    Software and network's Engineering
                </Heading></ThTitle>
                <FoTitle><p className="pl-10 text-white text-justify text-xl">
                    <LogoArrow/>
                    In progress, expected to be <br/>concluded by the end of 2022
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
                <FiTitle><Heading className="text-gray-500 text-2xl">
                    03/2021 - 10/2021
                </Heading></FiTitle>
                <SeTitle><Image src={'/bedu_white.png'} width={100} height={40} alt="logo" className="animate-pulse"/></SeTitle>
                <ThTitle><Heading className="text-2xl animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-green-400 to-blue-600">
                    Python Full Stack Bootcamp
                </Heading></ThTitle>
                <FoTitle><p className="pl-10 text-white text-justify text-xl">
                    <LogoArrow/>
                    7 Month bootcamp
                </p></FoTitle>
            </div>
            <FifTitle>
                <Image src={'/bedu_insight.png'} width={150} height={140} alt="logo" className="animate-pulse"/>
                <SiTitle>
                    <Image src={'/credly.png'} width={80} height={30} alt="logo" className="animate-pulse"/>
                </SiTitle>
            </FifTitle>


        </div>
    )
}
