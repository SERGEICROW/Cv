import {Container, Heading} from "@chakra-ui/react";
import {LogoArrow} from "./logo";
import Timeline from "./timeline";
import {TimelineSection} from "./containers";

const Bio = () => {
    return (
        <Container className="max-w-2xl m-5 border border-blue-400">
            <div className="flex flex-wrap justify-evenly items-center border border-yellow-50 border-dotted">
                <div>
                    <Heading className="min-w-min min-h-min flex justify-center
                    items-center  text-3xl  border border-yellow-300 border-dotted text-white ">
                        Rodrigo I. Yanez Carvajal
                    </Heading>
                    <p className="pl-5 text-green-500 text-xl border border-yellow-300 border-dotted ">
                        <LogoArrow/>
                        Full Stack developer
                    </p>
                </div>
                <div className="border border-yellow-300 border-dotted">
                    <img
                        className="w-36 border-double rounded-full border border-primary border-8 border-opacity-30"
                        src="/images/profile_pic.png"
                        alt="Profile image"
                    />
                </div>
            </div>

            <div className="mt-5 flex flex-col flex-wrap border border-red-700 border-dotted">
                <div>
                    <Heading className="text-white text-2xl border border-yellow-300 border-dotted">
                        About me
                    </Heading>
                </div>
                <p className="pl-10 text-white text-justify border border-yellow-300 border-dotted ">
                    <LogoArrow/>
                    Born in 1993 in Mexico City, I am a dedicated, organized and methodical individual.
                    With good interpersonal skills, am an excellent team worker, keen and very willing to
                    learn and develop new skills. With an active and dynamic approach to work to identify
                    and develop opportunities.
                </p>
            </div>

            <div className="mt-5 flex flex-col flex-wrap border border-red-700 border-dotted ">
                <div>
                    <Heading className="text-white text-2xl border border-yellow-300 border-dotted">
                        Timeline
                    </Heading>
                </div>
                <p className="pl-10 text-white text-justify border border-yellow-300 border-dotted ">
                    <LogoArrow/>
                    'Click on lines to display content'
                </p>

            </div>


               <Timeline/>


        </Container>
    )
}

export default Bio