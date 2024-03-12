import {FiTitle, SectionLeft, SectionRight} from "../../components/section";
import {Details, Description, Title} from "../../components/projectComps";
import {
    JavaIcon, OracleSQL,
    ProjectArrow, Cicon,
    RedHatIcon, WebLogic
} from "../../components/logo";

import {Container, Heading, Link} from "@chakra-ui/react";


const Softtek = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    border border-green-500 min-h-screen select-none">
        <div className="mb-10 max-w-3xl m-5">

            <SectionLeft><Title>
                <SectionLeft><Heading className="flex items-center justify-start
                text-3xl text-yellow-400 select-none animate-pulse">
                    Softtek
                </Heading></SectionLeft>
            </Title></SectionLeft>

            <Container className="flex backdrop-blur ml-2">

                <SectionRight>
                    <div className="w-20 pl-4 mt-2 hidden sm:block">
                        <ProjectArrow/>
                    </div>
                </SectionRight>

                <div className="mt-3 flex flex-col ">

                    <SectionRight><Description>
                        As part of Citigroup's separation from "Banamex bank", the project consisted in the data and logic segregation and migration of the system to new enviroments
                        and servers, i was assigned 2 inner systems in charge of electronic fund transfers and domiciliation, i developed skills in batch process systems, middleware,
                        security systems, Hardware security modules integrations, remote deploying along with people from the US and India, code analisis and optimization, testing matrices and test cases,
                        under agile methodology.
                    </Description></SectionRight>

                    <FiTitle delay={0.2}>
                        <div className="flex items-center text-green-400 text-2xl">
                            <Details>
                                Type
                            </Details>
                            Web Aplication / Batch Process System
                        </div>
                    </FiTitle>

                    <div className="flex items-center">
                        <FiTitle delay={0.4}><Details>
                            Stack
                        </Details></FiTitle>
                        <FiTitle delay={0.6}><OracleSQL/></FiTitle>
                        <FiTitle delay={0.7}><RedHatIcon/></FiTitle>
                        <FiTitle delay={0.8}><JavaIcon/></FiTitle>
                        <FiTitle delay={0.9}><Cicon/></FiTitle>
                        <FiTitle delay={1}><WebLogic/></FiTitle>

                    </div>

                    <FiTitle delay={0.9}>
                        <div className="flex items-center">
                            <Details>
                                Link
                            </Details>
                            <FiTitle delay={1}>
                                <p className={"text-2xl text-red-600"}>Internal Citigroup's network systems</p>
                            </FiTitle>
                        </div>
                    </FiTitle>



                </div>
            </Container>

        </div>
    </Container>

)

export default Softtek