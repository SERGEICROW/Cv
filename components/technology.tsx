import {Container, Heading} from "@chakra-ui/react";
import {LogoArrow, StackArrow} from "./logo";
import Section, {SectionDown, SectionRight} from "./section";
import React, {useState} from "react";
import logo, {
    DebianIcon,
    GitIcon,
    IntellIcon,
    MongoIcon,
    MysqlIcon,
    PyIcon,
    RedisIcon,
    SqliteIcon, VsIcon,
    WebsIcon, WindowsIcon
} from "../components/logo"
import {
    PythonIcon,
    LanguagesIcon,
    DbIcon,
    FwIcon,
    VscIcon,
    IdeIcon,
    OsIcon,
    JsIcon,
    TypescriptIcon,
    JavaIcon,
    KotlinIcon,
    FrontIcon,
    BackIcon,
    ReactIcon,
    HtmlIcon,
    CssIcon,
    TailwindIcon,
    AngularIcon,
    NextIcon,
    DjangoIcon,
    NodeIcon,
    RestIcon,
    GraphIcon,
    DockerIcon
} from "../components/logo";

export default function TechStack() {
    //state
    const [active, setActive] = useState<number>(-1);
    const [animation, setAnimation] = useState(active)

    const toggleHandler = (id: number) => () =>
        setActive((active) => (active === id ? -1 : id));

    //Content
    const Languages = (
        <SectionDown>
            <StackContainer>
                <PythonIcon/>
                <StackSubtitle>
                    Python
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>

            <StackContainer>
                <JsIcon/>
                <StackSubtitle>
                    Javascript
                </StackSubtitle>
                <UsedTo>Site runs with</UsedTo>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>

            <StackContainer>
                <TypescriptIcon/>
                <StackSubtitle>
                    Typescript
                </StackSubtitle>
                <UsedTo>Site runs with</UsedTo>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>

            <StackContainer>
                <JavaIcon/>
                <StackSubtitle>
                    Java
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other
                facts.
                This is a description of the techonology, how it was used and for what, with other
                facts.
                This is a description of the techonology, how it was used and for what, with other
                facts.
            </StackDescription>

            <StackContainer>
                <KotlinIcon/>
                <StackSubtitle>
                    Kotlin
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>
        </SectionDown>
    );
    const Frameworks = (
        <SectionDown>
            {/*FRONT-END*/}
            <StackContainer>
                <StackTitle>
                    <FrontIcon/>
                    <div className="ml-3 text-white">
                        Front-End
                    </div>
                </StackTitle>
            </StackContainer>

            <Section>
                <StackSubcontainer>
                    <ReactIcon/>
                    <StackSubtitle>
                        React
                    </StackSubtitle>
                    <UsedTo>Site runs with</UsedTo>
                </StackSubcontainer>
                <StackSubDescription>
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                </StackSubDescription>

                <StackSubcontainer>
                    <HtmlIcon/>
                    <CssIcon/>
                    <StackSubtitle>
                        Html
                    </StackSubtitle>
                    <StackSubtitle>
                        / Css
                    </StackSubtitle>
                    <UsedTo>Site runs with</UsedTo>
                </StackSubcontainer>
                <StackSubDescription>
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                </StackSubDescription>

                <StackSubcontainer>
                    <TailwindIcon/>
                    <StackSubtitle>
                        Tailwind
                    </StackSubtitle>
                    <UsedTo>Site runs with</UsedTo>
                </StackSubcontainer>
                <StackSubDescription>
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                </StackSubDescription>
            </Section>
            {/*BACK-END*/}
            <Section>
                <StackContainer>
                    <StackTitle>
                        <BackIcon/>
                        <div className="ml-3 text-white">
                            Back-End
                        </div>
                    </StackTitle>
                </StackContainer>

                <StackSubcontainer>
                    <NextIcon/>
                    <StackSubtitle>
                        Next.js
                    </StackSubtitle>
                    <UsedTo>Site runs with</UsedTo>
                </StackSubcontainer>
                <StackSubDescription>
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                </StackSubDescription>

                <StackSubcontainer>
                    <DjangoIcon/>
                    <StackSubtitle>
                        Django
                    </StackSubtitle>
                </StackSubcontainer>
                <StackSubDescription>
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                </StackSubDescription>

                <StackSubcontainer>
                    <NodeIcon/>
                    <StackSubtitle>
                        Node.js
                    </StackSubtitle>
                </StackSubcontainer>
                <StackSubDescription>
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                </StackSubDescription>

                <StackSubcontainer>
                    <RestIcon/>
                    <StackSubtitle>
                        Rest
                    </StackSubtitle>
                </StackSubcontainer>
                <StackSubDescription>
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                </StackSubDescription>

                <StackSubcontainer>
                    <GraphIcon/>
                    <StackSubtitle>
                        GraphQl
                    </StackSubtitle>
                </StackSubcontainer>
                <StackSubDescription>
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                </StackSubDescription>

                <StackSubcontainer>
                    <DockerIcon/>
                    <StackSubtitle>
                        Docker
                    </StackSubtitle>
                </StackSubcontainer>
                <StackSubDescription>
                    This is a description of the techonology, how it was used and for what, with other
                    facts.
                </StackSubDescription>
            </Section>
        </SectionDown>
    );
    const DataBases = (
        <SectionDown>
            <StackContainer>
                <MysqlIcon/>
                <StackSubtitle>
                    MySQL
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>

            <StackContainer>
                <SqliteIcon/>
                <StackSubtitle>
                    SQLite
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>

            <StackContainer>
                <MongoIcon/>
                <StackSubtitle>
                    MongoDb
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>

            <StackContainer>
                <RedisIcon/>
                <StackSubtitle>
                    Redis
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>
        </SectionDown>
    );
    const Os = (
        <SectionDown>
            <StackContainer>
                <DebianIcon/>
                <StackSubtitle>
                    GNU Linux - Kali & Debian based distributions
                </StackSubtitle>
                <UsedTo>Used on creation</UsedTo>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>

            <StackContainer>
                <WindowsIcon/>
                <StackSubtitle>
                    Windows
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>
        </SectionDown>
    );
    const Vsc = (
        <SectionDown>
            <StackContainer>
                <GitIcon/>
                <StackSubtitle>
                    Git
                </StackSubtitle>
                <UsedTo>Used on creation</UsedTo>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>
        </SectionDown>
    );
    const Ides = (
        <SectionDown>
            <StackContainer>
                <VsIcon/>
                <StackSubtitle>
                    VS code
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>

            <StackContainer>
                <IntellIcon/>
                <StackSubtitle>
                    Intellij
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>

            <StackContainer>
                <PyIcon/>
                <StackSubtitle>
                    PyCharm
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>

            <StackContainer>
                <WebsIcon/>
                <StackSubtitle>
                    WebStorm
                </StackSubtitle>
                <UsedTo>Used on creation</UsedTo>
            </StackContainer>
            <StackDescription>
                This is a description of the techonology, how it was used and for what, with other facts.
            </StackDescription>
        </SectionDown>
    );


    return (
        <Container>
            {/*PROGRAMING LANGUAGES*/}
            <div onClick={toggleHandler(1)}  className="mb-10">
                    <StackTitle>
                        <LanguagesIcon/>
                        Programing languages
                    </StackTitle>
            </div>
            <Section>
                {active === 1 && Languages}
            </Section>

            {/*FRAMEWORKS AND TECHNOLOGIES*/}
            <div onClick={toggleHandler(2)} className="mb-10">
                <StackTitle>
                    <FwIcon/>
                    Frameworks and Technologies
                </StackTitle>
            </div>
            <Section>
                {active === 2 && Frameworks}
            </Section>

            {/*DATABASES*/}
            <div onClick={toggleHandler(3)} className="mb-10">
                <StackTitle>
                    <DbIcon/>
                    DataBases
                </StackTitle>
            </div>
            <Section>
                {active === 3 && DataBases}
            </Section>

            {/*VERSION SISTEM CONTROL*/}
            <div onClick={toggleHandler(4)} className="mb-10">
                <StackTitle>
                    <VscIcon/>
                    Version Sistem Control
                </StackTitle>
            </div>
            <Section>
                {active === 4 && Vsc}
            </Section>

            {/*IDE's*/}
            <div onClick={toggleHandler(5)} className="mb-10">
                <StackTitle>
                    <IdeIcon/>
                    IDE's
                </StackTitle>
            </div>
            <Section>
                {active === 5 && Ides}
            </Section>

            {/*OS*/}
            <div onClick={toggleHandler(6)} className="mb-10">
                <StackTitle>
                    <OsIcon/>
                    Operative Sistems
                </StackTitle>
            </div>
            <Section>
                {active === 6 && Os}
            </Section>

        </Container>
    )
}

//Containers
const StackTitle = ({children, ...props}) => {
    return (
        <Section>
            <Heading
                className="flex items-center min-w-min min-h-min justify-start text-3xl text-green-400 select-none cursor-pointer" {...props}>
                {children}
            </Heading>
        </Section>
    )
}
const StackContainer = ({children}) => {
    return (
        <div className="flex items-center my-3 pl-5 text-white text-2xl select-none">
            <StackArrow/>
            {children}
        </div>
    )
}
const StackSubtitle = ({children}) => {
    return (
        <div className="ml-3 text-yellow-500 animate-pulse select-none">
            {children}
        </div>
    )
}
const StackSubcontainer = ({children}) => {
    return (
        <div className="flex items-center ml-16 my-3 pl-2 text-white text-2xl select-none">
            <StackArrow/>
            {children}
        </div>
    )
}
const StackDescription = ({children, ...props}) => {
    return (
        <SectionRight>
            <div className="ml-16 max-w-2xl text-gray-200 text-xl  text-justify select-none"
                 {...props}>
                <StackArrow/>
                {children}
            </div>
        </SectionRight>
    )
}
const StackSubDescription = ({children}) => {
    return (
        <SectionRight>
            <div className="ml-6 pr-3 max-w-2xl text-gray-200 text-xl text-justify select-none
            sm:block sm:ml-32 sm:pr-16">
                <StackArrow/>
                {children}
            </div>
        </SectionRight>
    )
}
const UsedTo = ({children}) => {
    return (
        <div className="ml-6 px-1 flex items-center border border-yellow-300 text-white rounded-r-lg bg-gradient-to-r
        from-green-500 via-purple-500 to-yellow-500 animate-pulse cursor-help
        hidden sm:block text-lg">
            {children}
        </div>
    )
}

