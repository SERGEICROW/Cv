import {Container, Heading} from "@chakra-ui/react";
import {LogoArrow} from "./logo";
import Timeline from "./timeline";

const Bio = () => {
    return (
        <Container className="max-w-2xl min-h m-5">
            <div className="mt-11 flex flex-wrap justify-evenly items-center ">
                <div>
                    <Heading className="min-w-min min-h-min flex justify-center
                    items-center  text-4xl text-white ">
                        Rodrigo I. Yanez Carvajal
                    </Heading>
                    <p className="pl-5 text-green-400 text-3xl ">
                        <LogoArrow/>
                        Full Stack developer
                    </p>
                </div>
                <div>
                    <img
                        className="w-36 border-double rounded-full border border-primary border-8 border-opacity-30"
                        src="/images/profile_pic.png"
                        alt="Profile image"
                    />
                </div>
            </div>

            <div className="mt-5 flex flex-col flex-wrap ">
                <div>
                    <Heading className="text-white text-3xl text-green-500">
                        About me
                    </Heading>
                </div>
                <p className="pl-10 text-white text-justify text-xl">
                    <LogoArrow/>
                    Born in 1993 in Mexico City, I am a dedicated, organized and methodical individual.
                    With good interpersonal skills, am an excellent team worker, keen and very willing to
                    learn and develop new skills. With an active and dynamic approach to work to identify
                    and develop opportunities.
                </p>
            </div>

            <div className="mt-5 flex flex-col flex-wrap mb-5">
                <div>
                    <Heading className="text-white text-3xl text-green-500">
                        Timeline
                    </Heading>
                </div>
                <p className="pl-10 text-white text-xl text-justify mb-5">
                    <LogoArrow/>
                    'A brief record of my past knowledge and work experience<br/>
                    CLick on timeline to watch content:
                </p>
            </div>
               <Timeline/>
        </Container>
    )
}

export default Bio