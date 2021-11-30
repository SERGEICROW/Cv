import {Container, Heading} from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";
import {LogoArrow} from "./logo";
import Section from "./section";

const Bar0 = styled("hr")`
  width: 20%;
  margin-left: 75%;
  height: 10px;
`
const Bar1 = styled("hr")`
  width: 29%;
  margin-left: 30%;
  height: 10px;
`
const Bar2 = styled("hr")`
  width: 7%;
  margin-left: 29%;
  height: 10px;
`
const Bar3 = styled("hr")`
  width: 21%;
  margin-left: 59%;
  height: 10px;
`
const Bar4 = styled("hr")`
  width: 30%;
  margin-left: 5%;
  height: 10px;
`
const Bar5 = styled("hr")`
  width: 15%;
  margin-left: 45%;
  height: 10px;
`

const Timeline = () => {

    const years1 = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    const years2 = [12, 13, 14, 15, 16, 17, 18, 19, 10, 21]
    const sep = ["|", "|", "|", "|", "|", "|", "|", "|", "|", "|",]

    // const [show, setShow] = React.useState(className="hidden")
    //
    // const onClick = () => setShow(false)
    // return (
    //     <div>
    //         <h1 onClick={onClick}>
    //             HOLA
    //         </h1>
    //     </div>
    // )

    return (

        <Container className="flex flex-col flex-shrink text-white font-bold mt-5 backdrop-blur-sm">
            <Section>
                <div className="grid grid-rows-4 border-1-2 my-3">
                    <Bar0 className="rounded-full border-0 cursor-pointer my-1
                bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"/>
                    <div className="flex">
                        <Bar1 className="rounded-full border-0 cursor-pointer my-1
                    bg-gradient-to-r from-blue-900 to-blue-600"/>
                        <Bar2 className="rounded-full border-0 cursor-pointer my-1
                    bg-gradient-to-r from-yellow-300 to-green-400"/>
                    </div>
                    <Bar3 className="rounded-full border-0 cursor-pointer my-1
                bg-gradient-to-r from-yellow-500 to-yellow-500"/>
                    <div className="flex">
                        <Bar4 className="rounded-full border-0 cursor-pointer my-1
                    bg-gradient-to-r from-black via-green-700 to-green-700"/>
                        <Bar5 className="rounded-full border-0 cursor-pointer my-1
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
                <div className="flex justify-around ">
                    {years1.map((i) => {
                        return (
                            <div className="animate-pulse">{i}</div>
                        );
                    })}
                </div>

                <Section>
                    <div className="m-6 flex flex-col bg-black rounded-lg bg-opacity-40 p-5 hidden ">
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
                            Born in 1993 in Mexico City, I am a dedicated, organized and methodical individual.
                            With good interpersonal skills, am an excellent team worker, keen and very willing to
                            learn and develop new skills. With an active and dynamic approach to work to identify
                            and develop opportunities.
                        </p>
                    </div>
                </Section>

            </Section>
        </Container>


    )
}

export default Timeline