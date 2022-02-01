import Section, {FiTitle, SectionLeft, SectionRight} from "../../components/section";
import {Details, Description, Title, WorkImage, GithubImage} from "../../components/projectComps";
import {
    JsIcon,
    NodeIcon,
    ProjectArrow,
    ReactIcon,
    TailwindIcon, TypescriptIcon
} from "../../components/logo";

import {Container, Heading, Link} from "@chakra-ui/react";


const Snap = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    border border-green-500 min-h-screen select-none">
        <div className="mb-10 max-w-3xl m-5">

            <SectionLeft><Title>
                <SectionLeft><Heading className="flex items-center justify-start
                text-3xl text-yellow-400 select-none animate-pulse">
                    Snap Grid
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
                        A React-Native app designed to compare data, using templates where users can add comparative components such as checkboxes, droplists and questions,
                        users fill the components, and later on the app compares the data for them, users can sign and log to access their data from the cloud,
                        the app is still in development.
                    </Description></SectionRight>

                    <FiTitle delay={0.2}>
                        <div className="flex items-center text-green-400 text-2xl">
                            <Details>
                                Type
                            </Details>
                            SmarthPhone Aplication
                        </div>
                    </FiTitle>

                    <div className="flex items-center">
                        <FiTitle delay={0.4}><Details>
                            Stack
                        </Details></FiTitle>
                        <FiTitle delay={0.6}><ReactIcon/></FiTitle>
                        <FiTitle delay={0.7}><NodeIcon/></FiTitle>
                        <FiTitle delay={0.8}><JsIcon/></FiTitle>
                        <FiTitle delay={0.9}><TypescriptIcon/></FiTitle>
                        <FiTitle delay={1}><TailwindIcon/></FiTitle>
                        {/*<FiTitle delay={1.1}><JsIcon/></FiTitle>*/}
                        {/*<FiTitle delay={1.2}><HtmlIcon/></FiTitle>*/}
                        {/*<FiTitle delay={1.3}><CssIcon/></FiTitle>*/}
                    </div>

                    <FiTitle delay={0.9}>
                        <div className="flex items-center">
                            <Details>
                                Link
                            </Details>
                            <FiTitle delay={1}>
                                <Link href={'https://github.com/SERGEICROW/SnapGrid'}>
                                    <GithubImage/>
                                </Link>
                            </FiTitle>
                        </div>
                    </FiTitle>

                    <br/>
                    <Section delay={1.2}>
                        <WorkImage src='/images/projectImages/snap/snap_menu.png' alt="Finde"/>
                        <div className="w-full flex justify-end"><Title>{''}</Title></div>
                    </Section>

                </div>
            </Container>

        </div>
    </Container>

)

export default Snap