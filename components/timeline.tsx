import {Container, Heading, Portal} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {LogoArrow} from "./logo";
import Section from "./section";
import {useState} from "react";
import className = Portal.className;


const Bar0 = styled("hr")`
  width: 20%;
  margin-left: 75%;
  height: 10px;`
const Bar1 = styled("hr")`
  width: 29%;
  margin-left: 30%;
  height: 10px;`
const Bar2 = styled("hr")`
  width: 7%;
  margin-left: 29%;
  height: 10px;`
const Bar3 = styled("hr")`
  width: 21%;
  margin-left: 59%;
  height: 10px;`
const Bar4 = styled("hr")`
  width: 30%;
  margin-left: 5%;
  height: 10px;`
const Bar5 = styled("hr")`
  width: 15%;
  margin-left: 45%;
  height: 10px;`


function Timeline() {

    const years1 = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    const years2 = [12, 13, 14, 15, 16, 17, 18, 19, 10, 21]
    const sep = ["|", "|", "|", "|", "|", "|", "|", "|", "|", "|",]
    const [bars, setBars] = useState(null);


    return (


        <Container className="flex flex-col flex-shrink text-white font-bold mt-5 backdrop-blur-sm">

            <Section>
                <div className="grid grid-rows-4 border-1-2 my-3">
                    <Bar0 onClick={() => setBars(Bar3P)} className="rounded-full border-0 cursor-pointer my-1
                bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"/>
                    <div className="flex">
                        <Bar1 onClick={() => setBars(Bar1P)} className="rounded-full border-0 cursor-pointer my-1
                    bg-gradient-to-r from-blue-900 to-blue-600"/>
                        <Bar2 onClick={() => setBars(Bar5P)} className="rounded-full border-0 cursor-pointer my-1
                    bg-gradient-to-r from-yellow-300 to-green-400"/>
                    </div>
                    <Bar3 onClick={() => setBars(Bar2P)} className="rounded-full border-0 cursor-pointer my-1
                bg-gradient-to-r from-yellow-500 to-yellow-500"/>
                    <div className="flex">
                        <Bar4 onClick={() => setBars(Bar0P)} className="rounded-full border-0 cursor-pointer my-1
                    bg-gradient-to-r from-black via-green-700 to-green-700"/>
                        <Bar5 onClick={() => setBars(Bar4P)} className="rounded-full border-0 cursor-pointer my-1
                    bg-gradient-to-r from-red-800 via-red-600 to-red-900"/>
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
                    {years1.map((i) => {
                        return (
                            <div className="animate-pulse">{i}</div>
                        );
                    })}
                </div>

                <div className="h-48">
                    <div className="mx-7">
                        {bars}
                    </div>
                </div>
            </Section>
        </Container>


    )
}

const Bar0P = () => {
    return (
        <Section>
            <div className="mb-0 p-5 flex flex-col bg-black rounded-lg bg-opacity-40">
                <Heading className="text-gray-600">
                    2012-2015
                </Heading>
                <Heading className="text-red-700">
                    UVM
                </Heading>
                <Heading>
                    Finances degree
                </Heading>
                <p className="pl-10 text-white text-justify">
                    <LogoArrow/>
                    FINANCES DEGREE
                </p>
            </div>
        </Section>
    )
}
const Bar1P = () => {
    return (
        <Section>
            <div className="mb-0 p-5 flex flex-col bg-black rounded-lg bg-opacity-40 ">
                <Heading className="text-gray-600">
                    Jun 2014-May 2017
                </Heading>
                <Heading className="text-blue-700">
                    Multiple financial entities
                </Heading>
                <Heading>
                    Broker
                </Heading>
                <p className="pl-10 text-white text-justify">
                    <LogoArrow/>
                    FINANCES WORK
                </p>
            </div>
        </Section>
    )
}
const Bar2P = () => {
    return (
        <Section>
            <div className="mb-0 p-5 flex flex-col bg-black rounded-lg bg-opacity-40 ">
                <Heading className="text-gray-600">
                    Jul 2017-Oct 2019
                </Heading>
                <Heading className="text-yellow-700">
                    Los Pambolitos
                </Heading>
                <Heading>
                    Own bussisnes
                </Heading>
                <p className="pl-10 text-white text-justify">
                    <LogoArrow/>
                    LOS PAMBOLITOS
                </p>
            </div>
        </Section>
    )
}
const Bar3P = () => {
    return (
        <Section>
            <div className="mb-0 p-5 flex flex-col bg-black rounded-lg bg-opacity-40 ">
                <Heading className="text-gray-600">
                    Jan 2019-Present
                </Heading>
                <Heading className="bg-gradient-to-r from-black via-pink-500 to-purple-600">
                    Jet Brains Academy
                </Heading>
                <Heading>
                    Courses
                </Heading>
                <p className="pl-10 text-white text-justify">
                    <LogoArrow/>
                    JET BRAINS
                </p>
            </div>
        </Section>
    )
}
const Bar4P = () => {
    return (
        <Section>
            <div className="mb-0 p-5 flex flex-col bg-black rounded-lg bg-opacity-40 ">
                <Heading className="text-gray-600">
                    May 2019-Present
                </Heading>
                <Heading className="text-white bg-gradient-to-r from-red-700 via-red-900 to-transparent">
                    UVM
                </Heading>
                <Heading>
                    Software developer degree
                </Heading>
                <p className="pl-10 text-white text-justify">
                    <LogoArrow/>
                    SOFTWARE DEGREE
                </p>
            </div>
        </Section>
    )
}
const Bar5P = () => {
    return (
        <Section>
            <div className="mb-0 p-5 flex flex-col bg-black rounded-lg bg-opacity-40 ">
                <Heading className="text-gray-600">
                    Apr 2021-Oct 2021
                </Heading>
                <Heading className="text-black bg-gradient-to-r from-yellow-400 via-green-500 to-transparent">
                    BEDU
                </Heading>
                <Heading>
                    Bootcamp
                </Heading>
                <p className="pl-10 text-white text-justify">
                    <LogoArrow/>
                    Full stack Bedu
                </p>
            </div>
        </Section>
    )
}

export default Timeline