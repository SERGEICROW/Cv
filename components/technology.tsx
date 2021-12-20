import {Container, Heading} from "@chakra-ui/react";
import {ChakraIcon, JsonIcon, StackArrow, XmlIcon} from "./logo";
import Section, {
    FifTitle,
    FiTitle,
    FoTitle,
    SectionDown,
    SectionLeft,
    SectionRight,
    SeTitle, SiTitle,
    ThTitle
} from "./section";
import React, {useState} from "react";
import {
    DebianIcon,
    GitIcon,
    IntellIcon,
    MongoIcon,
    MysqlIcon,
    PyIcon,
    RedisIcon,
    SqliteIcon, VsIcon,
    WebsIcon, WindowsIcon
} from "./logo"
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
    NextIcon,
    DjangoIcon,
    NodeIcon,
    RestIcon,
    GraphIcon,
    DockerIcon
} from "./logo";

export default function TechStack() {
    //state
    const [active, setActive] = useState<number>(-1);

    const toggleHandler = (id: number) => () =>
        setActive((active) => (active === id ? -1 : id));

    const Refresh = ({children}) => {
        if (active) {
            return (
                <SectionLeft>
                    {children}
                </SectionLeft>
            )
        }
    };

    //Content
    const Languages = (
        <SectionDown>
            <StackContainer><PythonIcon/><StackSubtitle>
                Python
            </StackSubtitle></StackContainer><StackDescription>
            Currently one of my main programming languages, second to learned, and improved in the "Full-Stack
            Python" bootcamp from "Bedu".</StackDescription>

            <StackContainer><JsIcon/><StackSubtitle>
                Javascript
            </StackSubtitle><UsedTo>Site runs with</UsedTo></StackContainer><StackDescription>
            Currently focusin on mastering this programming language, used behind Typescript to develope this
            website.</StackDescription>

            <StackContainer><TypescriptIcon/><StackSubtitle>
                Typescript
            </StackSubtitle><UsedTo>Site runs with</UsedTo></StackContainer><StackDescription>
            Added to my stack after learned JS, personally considering it as a very useful tool at the
            moment of develop JS.</StackDescription>

            <StackContainer><JavaIcon/><StackSubtitle>
                Java
            </StackSubtitle></StackContainer><StackDescription>
            First programming language to learn, helped me to understand general structure,
            syntax of object-oriented based and general development logic.</StackDescription>

            <StackContainer><KotlinIcon/><StackSubtitle>
                Kotlin
            </StackSubtitle></StackContainer><StackDescription>
            Currently developing an Android app with Kotlin, why? due to it's compatibility with Java and JS, it's
            capabilities as a modern language and friendly and minimalist syntax like Python. .</StackDescription>

            <StackContainer><JsonIcon/><XmlIcon/><StackSubtitle>
                JSON / XML
            </StackSubtitle></StackContainer>
            <br/>
        </SectionDown>
    );
    const Frameworks = (
        <SectionDown>
            {/*FRONT-END*/}
            <StackContainer><StackTitle><FrontIcon/>
                <div className="ml-3 text-white">Front-End</div>
            </StackTitle></StackContainer>

            <Section><StackSubcontainer><ReactIcon/><StackSubtitle>
                React</StackSubtitle><UsedTo>Site runs with</UsedTo></StackSubcontainer><StackSubDescription>
                Great experience when developing Front end static sites, drawing all the potential
                behind React Components and Hooks </StackSubDescription>

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
                    I consider both a must to learn before jumping to
                    frameworks or libraries which can make front-end development faster.
                </StackSubDescription>

                <StackSubcontainer>
                    <TailwindIcon/>
                    <ChakraIcon/>
                    <StackSubtitle>
                        Tailwind / Chakra UI
                    </StackSubtitle>
                    <UsedTo>Site runs with</UsedTo>
                </StackSubcontainer>
                <StackSubDescription>
                    Learned while creating this website, i consider both great tools to reduce code and
                    maintain styling, reducing unused code, changes and accidental override.
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
                    Great Full-stack framework to work with React, Node.js, Express, etc... and taking it to the next
                    level,
                    with all the amazing features Next.js has to offer.
                </StackSubDescription>

                <StackSubcontainer>
                    <DjangoIcon/>
                    <StackSubtitle>
                        Django
                    </StackSubtitle>
                </StackSubcontainer>
                <StackSubDescription>
                    Amazing high level framework to work with Python, learned in Boot camp, where i developed
                    "Finde", an e-commerce web application with user auth, product posting, connected to Google
                    Geolocalization Api's,
                    using SQLite etc...
                </StackSubDescription>

                <StackSubcontainer>
                    <NodeIcon/>
                    <StackSubtitle>
                        Node.js
                    </StackSubtitle>
                    <UsedTo>Site runs with</UsedTo>
                </StackSubcontainer>
                <StackSubDescription>
                    Great to build server side Javascript web applications, with a large list of libraries to work with.
                </StackSubDescription>

                <StackSubcontainer>
                    <RestIcon/>
                    <GraphIcon/>
                    <StackSubtitle>
                        Rest / GraphQl
                    </StackSubtitle>
                    <UsedTo>Site runs with</UsedTo>
                </StackSubcontainer>
                <StackSubDescription>
                    Taking the best out of both worlds.
                </StackSubDescription>

                <StackSubcontainer>
                    <DockerIcon/>
                    <StackSubtitle>
                        Docker
                    </StackSubtitle>
                </StackSubcontainer>

            </Section>
            <br/>
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
                A must to learn when it comes to relational databases.
            </StackDescription>

            <StackContainer>
                <SqliteIcon/>
                <StackSubtitle>
                    SQLite
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                Default Django DB, used on project "Finde".
            </StackDescription>

            <StackContainer>
                <MongoIcon/>
                <StackSubtitle>
                    MongoDb
                </StackSubtitle>
                <UsedTo>Site runs with</UsedTo>
            </StackContainer>
            <StackDescription>
                Learned at BootCamp, preferred choice when it comes to non relational databases.
            </StackDescription>

            <StackContainer>
                <RedisIcon/>
                <StackSubtitle>
                    Redis
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                Latest DB to learn, and still learning to explore and squeeze it's unique capabilities.
            </StackDescription>
            <br/>
        </SectionDown>
    );
    const Os = (
        <SectionDown>
            <StackContainer>
                <DebianIcon/>
                <StackSubtitle>
                    GNU Linux <span className={"hidden sm:block"}>- Kali & Debian based distributions</span>
                </StackSubtitle>
                <UsedTo>Used on creation</UsedTo>
            </StackContainer>
            <StackDescription>
                Currently on a Debian based distribution, used 100% of the time.
            </StackDescription>

            <StackContainer>
                <WindowsIcon/>
                <StackSubtitle>
                    Windows
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                Used since i can remember, still on use when it comes to Microsoft Office bundle needs.
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
                Used with github from Bash.
            </StackDescription>
            <br/>
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
                Reliable, light and most common IDE.
            </StackDescription>

            <StackContainer>
                <IntellIcon/>
                <StackSubtitle>
                    Intellij
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                Great for Java development, heavy but powerful and full of tools like Debugging, like all JetBrains family IDE's.
            </StackDescription>

            <StackContainer>
                <PyIcon/>
                <StackSubtitle>
                    PyCharm
                </StackSubtitle>
            </StackContainer>
            <StackDescription>
                Same as Intellij but for Python, my preferred option when it comes to Python related development.
            </StackDescription>

            <StackContainer>
                <WebsIcon/>
                <StackSubtitle>
                    WebStorm
                </StackSubtitle>
                <UsedTo>Used on creation</UsedTo>
            </StackContainer>
            <StackDescription>
                My pick to go when it comes to web development, friendly with frameworks and web technologies.
            </StackDescription>
            <br/>
        </SectionDown>
    );


    return (
        <Container>
            {/*PROGRAMING LANGUAGES*/}
            <div onClick={toggleHandler(1)} className="mb-7">
                <FiTitle><Refresh><StackTitle>
                    <LanguagesIcon/>
                    Programing languages
                </StackTitle></Refresh></FiTitle>
            </div>
            <Section>{active === 1 && Languages}</Section>

            {/*FRAMEWORKS AND TECHNOLOGIES*/}
            <div onClick={toggleHandler(2)} className="mb-7">
                <SeTitle><Refresh><StackTitle><FwIcon/>
                    Frameworks, API's & Tech's
                </StackTitle></Refresh></SeTitle>
            </div>
            <Section>{active === 2 && Frameworks}</Section>

            {/*DATABASES*/}
            <div onClick={toggleHandler(3)} className="mb-7">
                <ThTitle><Refresh><StackTitle><DbIcon/>
                    DataBases
                </StackTitle></Refresh></ThTitle>
            </div>
            <Section>{active === 3 && DataBases}</Section>

            {/*VERSION SISTEM CONTROL*/}
            <div onClick={toggleHandler(4)} className="mb-7">
                <FoTitle><Refresh><StackTitle><VscIcon/>
                    Version Sistem Control
                </StackTitle></Refresh></FoTitle>
            </div>
            <Section>{active === 4 && Vsc}</Section>

            {/*IDE's*/}
            <div onClick={toggleHandler(5)} className="mb-7">
                <FifTitle><Refresh><StackTitle><IdeIcon/>
                    IDE's
                </StackTitle></Refresh></FifTitle>
            </div>
            <Section>{active === 5 && Ides}</Section>

            {/*OS*/}
            <div onClick={toggleHandler(6)} className="mb-7">
                <SiTitle><Refresh><StackTitle><OsIcon/>
                    Operative Sistems
                </StackTitle></Refresh></SiTitle>
            </div>
            <Section>{active === 6 && Os}</Section>

        </Container>
    );
};

//Containers
const StackTitle = ({children, ...props}) => {
    return (
        <Section>
            <Heading
                className="flex items-center min-w-min min-h-min justify-start text-2xl text-green-400 select-none cursor-pointer" {...props}>
                {children}
            </Heading>
        </Section>
    );
};

const StackContainer = ({children}) => {
    return (
        <div className="flex items-center my-1 pl-5 text-white text-2xl select-none">
            <StackArrow/>
            {children}
        </div>
    );
};

const StackSubtitle = ({children}) => {
    return (
        <div className="ml-3 text-yellow-500 animate-pulse select-none">
            {children}
        </div>
    );
};

const StackSubcontainer = ({children}) => {
    return (
        <div className="ml-6 sm:ml-16 my-1 pl-2 flex items-center text-white text-2xl select-none">
            <StackArrow/>
            {children}
        </div>
    );
};

const StackDescription = ({children, ...props}) => {
    return (
        <SectionRight>
            <div className="hidden sm:block ml-16 max-w-2xl text-gray-200 text-base  text-justify select-none"
                 {...props}>
                <StackArrow/>
                {children}
            </div>
        </SectionRight>
    );
};

const StackSubDescription = ({children}) => {
    return (
        <SectionRight>
            <div className="hidden sm:block ml-32 pr-16 pr-3 max-w-2xl text-gray-200 text-base text-justify select-none ">
                <StackArrow/>
                {children}
            </div>
        </SectionRight>
    );
};

const UsedTo = ({children}) => {
    return (
        <div className="ml-6 px-1 flex items-center border border-yellow-300 text-white rounded-r-lg bg-gradient-to-r
        from-green-500 via-purple-500 to-yellow-500 animate-pulse cursor-help
        hidden sm:block text-sm">
            {children}
        </div>
    );
};

