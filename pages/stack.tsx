import Section from "../components/section";
import {Box, Container, Heading} from "@chakra-ui/react";
import {
    PythonIcon,
    LanguagesIcon,
    DbIcon,
    FwIcon,
    VscIcon,
    IdeIcon,
    OsIcon,
    JsIcon,
    TypescriptIcon, JavaIcon, KotlinIcon, FrontIcon, BackIcon, ReactIcon, HtmlIcon, CssIcon, TailwindIcon, AngularIcon
} from "../components/logo";
import {StackDescription, StackSubcontainer, StackSubtitle, StackTitle} from "../components/technology";

const Stack = () => (

    <Container className="relative z-30 py-16 flex flex-col items-center justify-center
    border border-green-500 min-h-screen">

        <Section>
            <div className="px-5 border border-red-700 border-dotted max-w-screen-xl">
                <h1 className="text-yellow-400 invisible">This div is made to maintain the width of the page huge
                    This div is made to maintain the width of the page huge</h1>
                <Box>
                    <StackTitle>
                        <LanguagesIcon/>
                        Programing languages
                    </StackTitle>
                    <StackSubcontainer>
                        <PythonIcon/>
                        <StackSubtitle>
                            Python
                        </StackSubtitle>
                    </StackSubcontainer>
                    <StackDescription>
                        This is a description of the techonology, how it was used and for what, with other facts.
                    </StackDescription>

                    <StackSubcontainer>
                        <JsIcon/>
                        <StackSubtitle>
                            Javascript
                        </StackSubtitle>
                    </StackSubcontainer>
                    <StackDescription>
                        This is a description of the techonology, how it was used and for what, with other facts.
                    </StackDescription>

                    <StackSubcontainer>
                        <TypescriptIcon/>
                        <StackSubtitle>
                            Typescript
                        </StackSubtitle>
                    </StackSubcontainer>
                    <StackDescription>
                        This is a description of the techonology, how it was used and for what, with other facts.
                    </StackDescription>

                    <StackSubcontainer>
                        <JavaIcon/>
                        <StackSubtitle>
                            Java
                        </StackSubtitle>
                    </StackSubcontainer>
                    <StackDescription>
                        This is a description of the techonology, how it was used and for what, with other facts.
                    </StackDescription>

                    <StackSubcontainer>
                        <KotlinIcon/>
                        <StackSubtitle>
                            Kotlin
                        </StackSubtitle>
                    </StackSubcontainer>
                    <StackDescription>
                        This is a description of the techonology, how it was used and for what, with other facts.
                    </StackDescription>
                </Box>

                <Section>
                    <StackTitle>
                        <FwIcon/>
                        Frameworks and Technologies
                    </StackTitle>
                    <StackSubcontainer>
                        <StackTitle>
                            <FrontIcon/>
                            <div className="ml-3">
                                Front-End
                            </div>
                        </StackTitle>
                    </StackSubcontainer>
                    <StackSubcontainer className="text-white text-2xl flex my-1 ml-16 pl-2">
                        <ReactIcon/>
                        <StackSubtitle>
                            React
                        </StackSubtitle>
                    </StackSubcontainer>
                    <StackSubcontainer className="text-white text-2xl flex my-1 ml-16 pl-2">
                        <HtmlIcon/>
                        <StackSubtitle>
                            Html
                        </StackSubtitle>
                    </StackSubcontainer>
                    <StackSubcontainer className="text-white text-2xl flex my-1 ml-16 pl-2">
                        <CssIcon/>
                        <StackSubtitle>
                            Css
                        </StackSubtitle>
                    </StackSubcontainer>
                    <StackSubcontainer className="text-white text-2xl flex my-1 ml-16 pl-2">
                        <TailwindIcon/>
                        <StackSubtitle>
                            Tailwind
                        </StackSubtitle>
                    </StackSubcontainer>
                    <StackSubcontainer className="text-white text-2xl flex my-1 ml-16 pl-2">
                        <AngularIcon/>
                        <StackSubtitle>
                            Angular
                        </StackSubtitle>
                    </StackSubcontainer>



                </Section>

                <Section>
                    <StackTitle>
                        <DbIcon/>
                        DataBases
                    </StackTitle>
                </Section>


                <Section>
                    <StackTitle>
                        <VscIcon/>
                        Sistem Version Control
                    </StackTitle>
                </Section>

                <Section>

                    <StackTitle>
                        <IdeIcon/>
                        IDE's
                    </StackTitle>
                </Section>


                <Section>
                    <StackTitle>
                        <OsIcon/>
                        Operative Sistems
                    </StackTitle>
                </Section>


            </div>
        </Section>
    </Container>
)

export default Stack