import {Container, Heading} from "@chakra-ui/react";
import {LogoArrow} from "./logo";
import Timeline from "./timeline";

//BIO COMPONENT CONTAINS TIMELINE
const Bio = () => {
    return (
        <Container className="max-w-xl select-none m-5">
            <div className="mt-5 flex flex-wrap justify-evenly items-center backdrop-blur rounded-lg">
                <div>
                    <Heading className="text-3xl sm:text-3xl min-w-min min-h-min flex justify-center
                    items-center text-white select-none">
                        Rodrigo I. Yanez Carvajal
                    </Heading>
                    <div className="text-xl sm:text-xl pl-5 text-green-400 animate-pulse select-none font-mono font-bold">
                        <LogoArrow/>
                        Full Stack developer
                    </div>
                </div>
                <div>
                    <img
                        className="w-32 border-double rounded-full border border-primary border-8 border-opacity-30"
                        src={"/images/profile_pic.png"}
                        alt="Profile image"
                    />
                </div>
            </div>

            <div className="mt-2 flex flex-col flex-wrap backdrop-blur rounded-lg">
                <div>
                    <Heading className="text-2xl  text-white text-green-500 select-none font-mono">
                        About me
                    </Heading>
                </div>
                <div className="pl-10 text-white text-justify sm:text-lg select-none sm:leading-snug">
                    <LogoArrow/>
                    Born in 1993 in Mexico City, I am a very motivated and dedicated developer
                    with good, soft and technical skills, am an excellent team worker, willing to
                    learn and develop new skills and challenges. With an active and dynamic approach to work to identify
                    and develop opportunities and solutions, generating a healthy, productive and efficient work environment.
                </div>
           </div>

            <div className="mt-5 flex flex-col flex-wrap backdrop-blur rounded-lg">
                <div>
                    <Heading className="text-2xl text-white text-green-500 select-none font-mono">
                        Timeline
                    </Heading>
                </div>
                <div className="pl-10 text-white sm:text-lg sm:leading-5 text-justify mb-5 select-none ">
                    <LogoArrow/>
                    A brief and general record of my past knowledge and work experience.<br/>
                    <div className={"animate-pulse mt-3 text-gray-400 text-base"}>Click on timelines to watch content:</div>
                </div>
            </div>

               <Timeline/>

        </Container>
    )
}

export default Bio