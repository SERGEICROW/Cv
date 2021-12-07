import Section, {FiTitle, SectionDown, SectionLeft, SectionRight, SeTitle} from "../../components/section";
import {Container, Heading, Link, Th} from "@chakra-ui/react";
import {Details, Description, Title, WorkImage, GithubImage} from "../../components/projectComps";
import {
    CssIcon,
    DjangoIcon,
    GitIcon,
    HtmlIcon, JsIcon,
    JsonIcon,
    NextIcon,
    ProjectArrow,
    PyIcon, PythonIcon,
    RestIcon, SqliteIcon
} from "../../components/logo";
import React from "react";


const Work = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    border border-green-500 min-h-screen select-none">
        <div className="mb-10 max-w-3xl m-5">

            <SectionLeft><Title>
                <SectionLeft><Heading className="flex items-center justify-start
                text-4xl text-yellow-400 select-none animate-pulse">
                    Finde
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
                        An e-commerce Django Rest web application connected to GOOGLE API's,
                        counts with user authentication, items & user data forms, maps, geolocalization,
                        stored data in a relational database, admin auth and register.
                    </Description></SectionRight>

                    <FiTitle delay={0.2}>
                        <div className="flex items-center text-green-400 text-2xl">
                            <Details>
                                Type
                            </Details>
                            Web Aplication
                        </div>
                    </FiTitle>

                    <div className="flex items-center">
                        <FiTitle delay={0.4}><Details>
                            Stack
                        </Details></FiTitle>
                        <FiTitle delay={0.6}><DjangoIcon/></FiTitle>
                        <FiTitle delay={0.7}><PythonIcon/></FiTitle>
                        <FiTitle delay={0.8}><SqliteIcon/></FiTitle>
                        <FiTitle delay={0.9}><RestIcon/></FiTitle>
                        <FiTitle delay={1}><JsonIcon/></FiTitle>
                        <FiTitle delay={1.1}><JsIcon/></FiTitle>
                        <FiTitle delay={1.2}><HtmlIcon/></FiTitle>
                        <FiTitle delay={1.3}><CssIcon/></FiTitle>
                    </div>

                    <FiTitle delay={0.9}>
                        <div className="flex items-center">
                            <Details>
                                Link
                            </Details>
                            <FiTitle delay={1}>
                                <Link href={'https://github.com/SERGEICROW/djangoProject'}>
                                    <GithubImage/>
                                </Link>
                            </FiTitle>
                        </div>
                    </FiTitle>

                    <br/>
                    <Section delay={1.2}>
                        <Description>
                            The map is called by a Google Maps Api, the DB send address data to geolocalization Api
                            and return coordinates which Back-end deploys on the map in function of the search.
                        </Description>
                        <WorkImage src='/images/projectImages/finde/finde.png' alt="Finde"/>
                        <Description>
                            Users can upload products based on 'name, price, description & picture' and manage it from
                            user settings.
                        </Description>
                        <WorkImage src='/images/projectImages/finde/products.png' alt="Finde"/>
                        <Description>
                            Users can watch add or delete data from user settings.
                        </Description>
                        <WorkImage src='/images/projectImages/finde/data.png' alt="Finde"/>
                    </Section>
                    <SectionLeft><Title>

                    </Title></SectionLeft>

                </div>
            </Container>

        </div>
    </Container>

)

export default Work